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

type User = {
    user: {
        userId: number
        Firstname: string
        Lastname: string
        Email: string
        username: string
        password: string
        role: string
    }
}

const formSchema = z.object({
    Firstname: z.string().min(1, {
        message: "First name cannot be blank."
    }).max(100, {
        message: "First name must not exceed 100 characters.",
    }),
    Lastname: z.string().min(1, {
        message: "Last name cannot be blank."
    }).max(100, {
        message: "Last name must not exceed 100 characters.",
    }),
    Email: z.string().min(1, {
        message: "Email cannot be blank."
    }).max(100, {
        message: "Email must not exceed 100 characters.",
    }),
    Username: z.string().min(1, {
        message: "Username cannot be blank."
    }).max(100, {
        message: "Username must not exceed 100 characters.",
    }),
    Password: z.string().min(1, {
        message: "Password cannot be blank."
    }),
    Role: z.string()
})

const ManageUserForm = ({user}: User) => {

    const { toast } = useToast()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            Firstname: `${user? user.Firstname : ''}`,
            Lastname: `${user? user.Lastname : ''}`,
            Email: `${user? user.Email : ''}`,
            Username: `${user? user.username : ''}`,
            Password: `${user? user.password : ''}`,
            Role: `${user? user.role : 'User'}`
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const data = {
        ...values}
        
        console.log(data)

        toast({
            title: "Form data has been sent.",
            description: `${JSON.stringify(data, null, 2)}`,
        })
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
                            name="Firstname"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="John" 
                                            className={`col-span-3 ${form.formState.errors.Firstname ? 'border-red-500' : ''}`}
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
                            name="Lastname"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="Wick" 
                                            className={`col-span-3 ${form.formState.errors.Lastname ? 'border-red-500' : ''}`}
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
                            name="Email"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="example@ex.com" 
                                            className={`col-span-3 ${form.formState.errors.Email ? 'border-red-500' : ''}`}
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
                                    name="Role"
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
                                                    <SelectItem value="Admin">Admin</SelectItem>
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
                            name="Username"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="John_007" 
                                            className={`col-span-3 ${form.formState.errors.Username ? 'border-red-500' : ''}`}
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
                            name="Password"
                            render={({field}) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="a@1xCb" 
                                            className={`col-span-3 ${form.formState.errors.Password ? 'border-red-500' : ''}`}
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