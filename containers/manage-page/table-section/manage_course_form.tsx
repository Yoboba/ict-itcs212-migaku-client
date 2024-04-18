"use client";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconCurrencyBaht } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../../components/ui/button";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import fetchCookie from "@/utils/fetchCookie";

const formSchema = z.object({
  courseName: z.string().min(1, {
    message: "Course name cannot be blank.",
  }),
  courseDes: z
    .string()
    .max(500, {
      message: "Course description must not exceed 500 characters.",
    })
    .min(1, {
      message: "Course Description must not be blank.",
    }),
  courseCat: z.string(),
  price: z
    .string({
      required_error: "Must enter a valid price",
    })
    .min(1, {
      message: "Must not be blank",
    })
    .refine((value) => /[0-9]/.test(value), "Must be a number.")
    .refine((value) => parseInt(value) >= 0, "Cannot accept negative values."),
  status: z.string(),
  courseDuration: z
    .string({
      required_error: "Must enter a valid course duration",
    })
    .min(1, {
      message: "Must not be blank",
    })
    .refine((value) => /[0-9]/.test(value), "Must be a number.")
    .refine((value) => parseInt(value) >= 0, "Cannot accept negative values."),
  rating: z.string(),
  courseCode: z
    .string()
    .length(3, {
      message: "Must be 3 characters.",
    })
    .refine((value) => /[0-9]/.test(value), "Must be a number."),
});

type ManageCourseFormProps = {
  course?: {
    courseId: number;
    courseCode: string;
    courseCat: string;
    courseName: string;
    courseDes: string;
    courseDuration: number;
    price: number;
    status: {
      data: number[];
      type: string;
    };
    rating: number;
    imgSrc?: string;
  };
  method: "post" | "put";
  onDone: () => void;
};

const ManageCourseForm = ({
  course,
  method,
  onDone,
}: ManageCourseFormProps) => {
  const axios = require("axios").default;
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseName: `${course ? course.courseName : ""}`,
      courseDes: `${course ? course.courseDes : ""}`,
      courseCat: `${course ? course.courseCat : "IT"}`,
      courseCode: `${course ? course.courseCode.slice(-3) : "000"}`,
      courseDuration: `${course ? course.courseDuration : "0"}`,
      status: `${course ? course.status.data[0] : "0"}`,
      price: `${course ? course.price : "0"}`,
      rating: `${course ? course.rating : "1"}`,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const data = {
      ...values,
      courseCode: values.courseCat + values.courseCode,
    };

    setIsProcessing(true);

    fetchCookie().then(async (cookie) => {
      if (method === "put") {
        axios
          .put("http://localhost:3001/api/course", data, {
            headers: {
              "Content-Type": "application/json",
              authorization: cookie.userId,
            },
            params: {
              courseId: course?.courseId,
            },
          })
          .then(async (res:any) => {
            console.log(res);
            if (res.status !== 200) {
              toast({
                variant: "destructive",
                title: "Failed to save changes.",
                description: `Server responded with: ${res.data.Message}`,
              });
            } else {
              toast({
                title: "Saved changes successfully.",
                description: `Server responded with: ${res.data.Message}`,
              });
              setIsProcessing(false);
              onDone();
            }
          })
          .catch((error:any) => {
            toast({
              variant: "destructive",
              title: "Unexpected Error",
              description: `Server responded with: ${error}`,
            });
            setIsProcessing(false);
          });
      } else if (method === "post") {
        console.log({ ...data, teacherId: cookie.userId });
        axios
          .post(
            "http://localhost:3001/api/course",
            { ...data, TeacherId: cookie.userId },
            {
              headers: {
                "Content-Type": "application/json",
                authorization: cookie.userId,
              },
            }
          )
          .then(async (res:any) => {
            console.log(res);
            if (res.status !== 201) {
              toast({
                variant: "destructive",
                title: "Failed to create course.",
                description: `Server responded with: ${res.data.Message}`,
              });
            } else {
              toast({
                title: "Course Created.",
                description: `Server responded with: ${res.data.Message}`,
              });
              setIsProcessing(false);
              onDone();
            }
          })
          .catch((error:any) => {
            toast({
              variant: "destructive",
              title: "Unexpected Error",
              description: `Server responded with: ${error}`,
            });
            setIsProcessing(false);
          });
      }
    });

    /* toast({
      title: "Form data has been sent.",
      description: `${JSON.stringify(data, null, 2)}`,
    }); */
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div
          id="dialog-content"
          className="flex w-full flex-col gap-6 nowrap:flex-row"
        >
          <div id="container-left" className="flex-1 space-y-4">
            <div id="course-name-form" className="grid w-full gap-1.5">
              <Label htmlFor="name" className="">
                Course Name <span className="text-red-500">*</span>
              </Label>
              <FormField
                control={form.control}
                name="courseName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Data Communication"
                        className={`col-span-3 ${form.formState.errors.courseName ? "border-red-500" : ""}`}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div id="course-desc-form" className="grid w-full gap-1.5">
              <Label htmlFor="course-desc">Course Description</Label>
              <FormField
                control={form.control}
                name="courseDes"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        placeholder="Type your course description here. (Maximum 500 characters)"
                        id="course-desc"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div
            id="container-right"
            className="w-full flex-1 flex-col space-y-4"
          >
            <div className="flex gap-2">
              <div id="course-category-form" className="grid w-full gap-1.5">
                <Label htmlFor="select-category" className="">
                  Course Category <span className="text-red-500">*</span>
                </Label>
                <FormField
                  control={form.control}
                  name="courseCat"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="mt-0 w-full">
                            <SelectValue placeholder="Course Category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="IT">IT</SelectItem>
                          <SelectItem value="MA">Mathematics</SelectItem>
                          <SelectItem value="SC">Science</SelectItem>
                          <SelectItem value="LG">Languages</SelectItem>
                          <SelectItem value="SO">Social Sciences</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div id="course-status-form" className="grid w-full gap-1.5">
                <Label htmlFor="select-status" className="">
                  Course Status <span className="text-red-500">*</span>
                </Label>
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="0">Inactive</SelectItem>
                            <SelectItem value="1">Active</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div id="course-duration-form" className="grid w-full gap-1.5">
                <Label htmlFor="course-price" className="">
                  Course Duration <span className="text-red-500">*</span>
                </Label>
                <FormField
                  control={form.control}
                  name="courseDuration"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="courseDuration"
                          className={`col-span-3 ${form.formState.errors.courseDuration ? "border-red-500" : ""}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div id="course-rating-form" className="grid w-full gap-1.5">
                <Label htmlFor="select-status" className="">
                  Course Rating <span className="text-red-500">*</span>
                </Label>
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Rating" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="1">1 (Very Easy)</SelectItem>
                            <SelectItem value="2">2 - (Easy)</SelectItem>
                            <SelectItem value="3">3 - (Average)</SelectItem>
                            <SelectItem value="4">4 - (Difficult)</SelectItem>
                            <SelectItem value="5">5 - (Expert)</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div id="course-price-form" className="grid w-full gap-1.5">
                <Label htmlFor="course-price" className="">
                  Course Price <b>(THB)</b>{" "}
                  <span className="text-red-500">*</span>
                </Label>
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative">
                          <IconCurrencyBaht
                            size={24}
                            className="absolute left-1 top-2"
                          />
                          <Input
                            id="price"
                            placeholder="10000"
                            className={`col-span-3 pl-8 ${form.formState.errors.price ? "border-red-500" : ""}`}
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div id="course-code-form" className="grid w-full gap-1.5">
                <Label htmlFor="course-price" className="">
                  Course Code <span className="text-red-500">*</span>
                </Label>
                <FormField
                  control={form.control}
                  name="courseCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          id="courseCode"
                          className={`col-span-3 ${form.formState.errors.courseCode ? "border-red-500" : ""}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-4 w-full" disabled={isProcessing}>
          {isProcessing && <Loader2 className="mr-4 size-4 animate-spin" />}
          {course ? "Save Changes" : "Create New Course"}
        </Button>
      </form>
    </Form>
  );
};

export default ManageCourseForm;
