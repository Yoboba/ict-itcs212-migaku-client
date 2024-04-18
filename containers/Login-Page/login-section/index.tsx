"use client";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { BaseResponse } from "@/utils/response";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(1, { message: "Username cannot be null" }),
  password: z.string().min(1, { message: "Password cannot be null" }),
});

export default function LoginSection() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const data = {
      ...values,
      username: values.username,
      password: values.password,
    };

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(async (res) => {
      const val: BaseResponse = await res.json();
      console.log(val);
      if (val.status !== 200) {
        toast({
          title: "Login Failed",
          description: `Invalid Username or Password`,
        });
      } else {
        toast({
          title: "Logged in Successfully",
          description: `对了！！！！`,
        });
        router.replace("/");
        router.refresh();
      }
    });
  };
  return (
    <div className="flex h-screen w-full items-center justify-center md:w-1/2">
      <div className="">
        <div className="pb-4 text-xl font-semibold leading-tight sm:text-3xl sm:leading-snug">
          <h1>Log in to your account</h1>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <label
                className="text-m mb-2 block text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        className={`col-span-3 ${form.formState.errors.username ? "border-red-500" : ""}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <label
                className="text-m my-2 block text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className={`col-span-3 ${form.formState.errors.password ? "border-red-500" : ""}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="cursor-pointer text-right text-sm text-gray-400 hover:text-black">
                Forgot Password?
              </p>
            </div>
            <div className="my-4 flex justify-center">
              <Button className="w-[50%] text-center" type="submit">
                Log in
              </Button>
            </div>
            <div className="my-2 flex justify-center gap-2">
              <div className="mb-2 w-[45%] border-b-2 border-gray-400"></div>
              <p>or</p>
              <div className="mb-2 w-[45%] border-b-2 border-gray-400"></div>
            </div>
            <div className="flex justify-center gap-2">
              <p className="text-sm text-gray-400">New to us?</p>
              <p className="cursor-pointer text-sm text-gray-400 hover:text-black">
                Sign up
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
