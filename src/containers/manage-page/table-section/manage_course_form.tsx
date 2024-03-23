'use client'
import { useForm } from "react-hook-form"
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
	IconCurrencyBaht,
} from "@tabler/icons-react";
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
} from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "../../../components/ui/button";

const formSchema = z.object({
    courseName: z.string().min(1, {
        message: "Course name cannot be blank."
    }),
    courseDes: z.optional(z.string().max(500, {
        message: "Course description must not exceed 500 characters.",
    })),
    courseCat: z.string(),
    price: z.string({
        required_error: "Must enter a valid price",
    }).min(1, {
        message: "Must not be blank"
    }).refine((value) => !/[a-z]/.test(value), 'Must be a number.')
    .refine((value) => parseInt(value) >= 0, 'Cannot accept negative values.'),
    status: z.string()
})

type ManageCourseFormProps = {
    course?: {
        courseId: number,
        courseCode: string,
        courseCat: string,
        courseName: string,
        courseDes: string,
        price: number,
        status: string,
        imgSrc?: string,
    }
}

const ManageCourseForm = ({
    course,
}: ManageCourseFormProps) => {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            courseName: `${course ? course.courseName : ''}`,
            courseDes: `${course? course.courseDes : ''}`,
            courseCat: `${course? course.courseCat : 'IT'}`,
            status: `${course? course.status : '0'}`,
            price: `${course? course.price : 0}`
        }
    })
    
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const data = {
        ...values,
        price: parseInt(values.price),
        status: values.status === '0' ? 0 : 1
        }
        
        console.log(data)

        toast({
            title: "Form data has been sent.",
            description: `${JSON.stringify(data, null, 2)}`,
        })
    }
    

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div
                    id="dialog-content"
                    className="nowrap:flex-row flex w-full flex-col gap-6"
                >
                    <div id="container-left" className="flex-col space-y-4">
                        <div id="course-name-form" className="grid w-full gap-1.5">
                            <Label htmlFor="name" className="">
                                Course Name <span className="text-red-500">*</span>
                            </Label>
                            <FormField 
                                control={form.control} 
                                name="courseName"
                                render={({field}) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Data Communication" 
                                                className={`col-span-3 ${form.formState.errors.courseName ? 'border-red-500' : ''}`}
                                                {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div
                            id="image-upload"
                            className="mt-4 h-[180px] min-w-[370px] cursor-pointer rounded-md border-2 border-dashed"
                        ></div>
                    </div>
                    <div id="container-right" className="w-full flex-col space-y-4">
                        <div id="course-desc-form" className="grid w-full gap-1.5">
                            <Label htmlFor="course-desc">Course Description</Label>
                            <FormField 
                                control={form.control} 
                                name="courseDes"
                                render={({field}) => (
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
                        <div className="flex gap-2">
                            <div
                                id="course-category-form"
                                className="grid w-3/5 gap-1.5"
                            >
                                <Label htmlFor="select-category" className="">
                                    Course Category <span className="text-red-500">*</span>
                                </Label>
                                <FormField 
                                    control={form.control} 
                                    name="courseCat"
                                    render={({field}) => (
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
                            <div
                                id="course-status-form"
                                className="grid w-full flex-1 gap-1.5"
                            >
                                <Label htmlFor="select-status" className="">
                                    Course Status <span className="text-red-500">*</span>
                                </Label>
                                <FormField 
                                    control={form.control} 
                                    name="status"
                                    render={({field}) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        <div id="course-price-form" className="grid w-full gap-1.5">
                            <Label htmlFor="course-price" className="">
                                Course Price <b>(THB)</b>{" "}
                                <span className="text-red-500">*</span>
                            </Label>
                            <FormField 
                                control={form.control} 
                                name="price"
                                render={({field}) => (
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
                                                    className={`col-span-3 pl-8 ${form.formState.errors.price ? 'border-red-500' : ''}`}
                                                    {...field}
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />  
                        </div>
                    </div>
                </div>
                <Button type="submit" className="mt-4 w-full">
                    {course ? 'Save Changes' : 'Create New Course'}
                </Button>
            </form>
        </Form>
    )
}

export default ManageCourseForm;