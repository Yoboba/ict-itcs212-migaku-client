"use client"
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast"
import { useForm } from "react-hook-form"
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import isLogin from "@/util/isLogin";
import { useEffect, useState } from "react";

const formSchema = z.object({
    username: z.string().min(1, {message : "Username cannot be null"}),
    password: z.string().min(1, {message : "Password cannot be null"})
})

type LoginData = {
    username : string
    password : string
}

export default function LoginSection() {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username : "",
            password : ""
        }
    })

    const [Login, setIsLogin] = useState<Boolean>();

    useEffect(() => {
        const interval = setInterval(() => {setIsLogin(isLogin())}, 500)
        return () => clearInterval(interval);
    }, [])

    const authenticate = (data: LoginData) => {
        fetch("http://localhost:3001/api/auth", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        }).then((res) => {
            if (res.status === 200) {
                // toast({
                //     title: "Succesfully Login",
                //     description: `${JSON.stringify(data)}`,
                // })
                res.text().then((json) => {
                    const jsonData = JSON.parse(json)
                    document.cookie = `UserId=${jsonData['UserId']}; max-age=3600; path=/`;
                    document.cookie = `Role=${jsonData['Role']}; max-age=3600; path=/`;
                })
                setIsLogin(isLogin())
                console.log(Login)
                //window.location.href = '/browse';
            }
            else
            {
                // for logout - unset cookie
                //document.cookie = "UserId=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                //document.cookie = "Role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                toast({
                    title: "Login Failed",
                    description: `Invalid Username or Password`,
                })
            }
        })
    }
    
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const data = {
        ...values,
        username : values.username,
        password: values.password
        }
        
        //console.log(data)
        authenticate(data)

    }
    return (
        <div className="flex h-screen w-full items-center justify-center md:w-1/2">
            <div className="">
                <div className=" pb-4 text-xl font-semibold leading-tight sm:text-3xl sm:leading-snug">
                    <h1>Log in to your account</h1>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div>
                            <label className="text-m mb-2 block text-gray-700" htmlFor="username">
                            Username
                            </label>
                            {/* <input className="focus:shadow-outline w-full appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="username" type="text" /> */}
                            <FormField 
                                control={form.control} 
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Enter your username" 
                                                className={`col-span-3 ${form.formState.errors.username ? 'border-red-500' : ''}`}
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div>
                            <label className="text-m my-2 block text-gray-700" htmlFor="password">
                            Password
                            </label>
                            {/* <input className="focus:shadow-outline mb-3 w-full appearance-none rounded-lg border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" id="password" type="password" /> */}
                            <FormField 
                                control={form.control} 
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter your password" 
                                                className={`col-span-3 ${form.formState.errors.password? 'border-red-500' : ''}`}
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <p className="cursor-pointer text-right text-sm text-gray-400 hover:text-black">Forgot Password?</p>
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
                            <p className="cursor-pointer text-sm text-gray-400 hover:text-black">Sign up</p>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}
