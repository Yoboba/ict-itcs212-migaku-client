/* eslint-disable tailwindcss/no-custom-classname */
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "../../../components/ui/button"
import fetchCookie from "@/utils/fetchCookie"

type UserForm = {
    user: {
        userId: number
        firstName: string
        lastName: string
        email: string
        username: string
        password: string
        role: string
    },
    method: string,
    onDone: () => void
}

const formSchema = z.object({
    firstName: z.string().min(1, {
        message: "First name cannot be blank."
    }).max(100, {
        message: "First name must not exceed 100 characters.",
    }),
    lastName: z.string().min(1, {
        message: "Last name cannot be blank."
    }).max(100, {
        message: "Last name must not exceed 100 characters.",
    }),
    email: z.string().min(1, {
        message: "Email cannot be blank."
    }).max(100, {
        message: "Email must not exceed 100 characters.",
    }),
    username: z.string().min(1, {
        message: "Username cannot be blank."
    }).max(100, {
        message: "Username must not exceed 100 characters.",
    }),
    password: z.string().min(1, {
        message: "Password cannot be blank."
    }),
    role: z.string()
})

const ManageUserForm = ({user, method, onDone}: UserForm) => {

    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: `${user? user.firstName : ''}`,
            lastName: `${user? user.lastName : ''}`,
            email: `${user? user.email : ''}`,
            username: `${user? user.username : ''}`,
            password: `${user? user.password : ''}`,
            role: `${user? user.role : 'User'}`
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const data = {
        ...values}
        
        fetchCookie().then(async (cookie) => {
            if (!cookie.userRole || !cookie.userId || cookie.userRole != "Teacher") {
                toast({
                    title: "Error",
                    description: "You are not authorized to perform this action.",
                })
                return
            } else {
                if(method === "post")
                    {
                        const postRes = await fetch("http://localhost:3001/api/user", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: cookie.userId
                            },
                            body: JSON.stringify(data)
                        })
                        if(postRes.status === 201)
                        {
                            toast({
                                title: "User Created",
                                description: `Server responded with: ${postRes.statusText}`,
                            })
                            onDone();
                        }
                        else
                        {
                            toast({
                                title: "Error",
                                description: `Server responded with: ${postRes.statusText}`,
                            })
                        }
                    }
                    else if(method === "put")
                    {
                        const putRes = await fetch(`http://localhost:3001/api/user?userId=${user?.userId}`, {
                            method: "PUT",
                            headers: {
                                "Content-Type": "application/json",
                                authorization: cookie.userId
                            },
                            body: JSON.stringify(data)
                        })
                        if(putRes.status === 200)
                        {
                            toast({
                                title: "User Updated",
                                description: `Server responded with: ${putRes.statusText}`,
                            })
                            onDone();
                        }
                        else
                        {
                            toast({
                                title: "Error",
                                description: `Server responded with: ${putRes.statusText}`,
                            })
                        } 
                    }
            }
        })
        //console.log(data)
        // toast({
        //     title: "Form data has been sent.",
        //     description: `${JSON.stringify(data, null, 2)}`,
        // })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-flow-col grid-rows-4 gap-4">
                    <div className="grid-col-2 grid grid-flow-col gap-4">
                        <div>
                        <Label htmlFor="name" className="">
                            First Name <span className="text-red-500">*</span>
                        </Label>
                        <FormField 
                            control={form.control} 
                            name="firstName"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="John" 
                                            className={`col-span-3 ${form.formState.errors.firstName ? 'border-red-500' : ''}`}
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                        <div>
                        <Label htmlFor="name" className="">
                            Last Name <span className="text-red-500">*</span>
                        </Label>
                        <FormField 
                            control={form.control} 
                            name="lastName"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Wick" 
                                            className={`col-span-3 ${form.formState.errors.lastName ? 'border-red-500' : ''}`}
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                    </div>
                    <div className="grid-col-3 grid grid-flow-col gap-4">
                        <div className="col-span-2">
                        <Label htmlFor="name" className="">
                            Email <span className="text-red-500">*</span>
                        </Label>
                        <FormField 
                            control={form.control} 
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="example@ex.com" 
                                            className={`col-span-3 ${form.formState.errors.email ? 'border-red-500' : ''}`}
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                        <div>
                        <Label htmlFor="select-category" className="">
                                    Role <span className="text-red-500">*</span>
                                </Label>
                                <FormField 
                                    control={form.control} 
                                    name="role"
                                    render={({field}) => (
                                        <FormItem>
                                            <Select 
                                                onValueChange={field.onChange} 
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger className="mt-0 w-full">
                                                        <SelectValue placeholder="Role" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Teacher">Teacher</SelectItem>
                                                    <SelectItem value="User">User</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />  
                        </div>
                    </div>
                    <div className="grid-col-2 grid grid-flow-col gap-4">
                        <div>
                        <Label htmlFor="name" className="">
                            Username <span className="text-red-500">*</span>
                        </Label>
                        <FormField 
                            control={form.control} 
                            name="username"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="John_007" 
                                            className={`col-span-3 ${form.formState.errors.username ? 'border-red-500' : ''}`}
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                        <div>
                        <Label htmlFor="name" className="">
                            Password <span className="text-red-500">*</span>
                        </Label>
                        <FormField 
                            control={form.control} 
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="a@1xCb" 
                                            className={`col-span-3 ${form.formState.errors.password ? 'border-red-500' : ''}`}
                                            {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        </div>
                    </div>
                    <div>
                        <Button type="submit" className="mt-4 w-full">
                            {user.userId === 0 ? 'Create New User' : 'Save Changes'}
                        </Button>
                    </div>
                </div>
            </form>
        </Form>
    )
}

export default ManageUserForm;