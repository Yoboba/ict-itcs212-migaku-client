import React from 'react'
import CourseCard from './course_card'
import TableSearchBar from './table_search_bar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '../ui/button'
import { IconCurrencyBaht, IconPlus, IconSortAscending2, IconUserPlus } from '@tabler/icons-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

let mock_data = [
    {
        courseId: 1,
        courseCode: "ITCS212",
        courseCat: "IT",
        courseName: "Introduction to Web Programming",
        courseDes: "Learn the fundamentals of web programming including HTML, CSS, and JavaScript.",
    },
    {
        courseId: 2,
        courseCode: "MA123",
        courseCat: "MA",
        courseName: "Advanced Calculus",
        courseDes: "Study of advanced mathematical concepts in calculus.",
    },
    {
        courseId: 3,
        courseCode: "SC101",
        courseCat: "SC",
        courseName: "Introduction to Physics",
        courseDes: "Basic concepts of physics including mechanics, thermodynamics, and electromagnetism.",
    },
    {
        courseId: 4,
        courseCode: "LG200",
        courseCat: "LG",
        courseName: "Spanish Language and Culture",
        courseDes: "Introduction to Spanish language and Hispanic culture.",
    },
    {
        courseId: 5,
        courseCode: "SO305",
        courseCat: "SO",
        courseName: "Introduction to Sociology",
        courseDes: "Basic concepts and theories in sociology.",
    }
];


export default function TableTabs() {
  return (
    <Tabs defaultValue="course" className="w-full mt-4">
        <TabsList className=''>
            <TabsTrigger value="course">Course</TabsTrigger>
            <TabsTrigger value="user">Users</TabsTrigger>
        </TabsList>
        <TabsContent value="course">
            <div id="table" className="mt-4 border rounded-md p-4"> 
              <div id="table-container w-full flex-col items-center">
                <div id="table-header" className="flex space-x-2 items-center justify-between">
                  <div id="header-left" className='h-full flex space-x-4'>
                    <TableSearchBar/>
                    <Button className="h-full" variant={"secondary"}>
                      <IconSortAscending2 size={20} className=""/>
                    </Button>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="h-full">
                        <IconPlus size={16} className="mr-0 md:mr-2"/>
                        <div className='hidden md:block'>Add Course</div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="nowrap:max-w-[800px] ">
                      <DialogHeader>
                        <DialogTitle>Course initialization</DialogTitle>
                        <DialogDescription>
                          Please fill in the required information marked with an asterisk (<span className='text-red-500'>*</span>).
                        </DialogDescription>
                      </DialogHeader>
                      <div id="dialog-content" className='flex gap-6 flex-col nowrap:flex-row'>
                        <div id="container-left" className='flex-col space-y-4'>
                          <div id="course-name-form" className="grid w-full gap-1.5">
                            <Label htmlFor="name" className="">Course Name <span className='text-red-500'>*</span></Label>
                            <Input id="name" placeholder='' className="col-span-3" />
                          </div>
                          <div id="image-upload" className='min-w-[370px] h-[180px] border-[2px] border-dashed rounded-md mt-4 cursor-pointer'>
                          </div>
                        </div>
                        <div id="container-right" className='flex-col w-full space-y-4'>
                          <div id="course-desc-form" className="grid w-full gap-1.5">
                            <Label htmlFor="course-desc">Course Description</Label>
                            <Textarea placeholder="Type your course description here. (Maximum 500 characters)" id="course-desc" />
                          </div>
                          <div className='flex gap-2'>
                            <div id="course-category-form" className="grid gap-1.5 w-[60%]">
                              <Label htmlFor="select-category" className="">Course Category <span className='text-red-500'>*</span></Label>
                              <Select>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Course Category" />
                                </SelectTrigger>
                                <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="IT">IT</SelectItem>
                                  <SelectItem value="MA">Mathematics</SelectItem>
                                  <SelectItem value="SC">Science</SelectItem>
                                  <SelectItem value="LG">Languages</SelectItem>
                                  <SelectItem value="SO">Social Sciences</SelectItem>
                                </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                            <div id="course-status-form" className="grid w-full gap-1.5 flex-1">
                              <Label htmlFor="select-status" className="">Course Status <span className='text-red-500'>*</span></Label>
                              <Select>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="0">Inactive</SelectItem>
                                    <SelectItem value="1">Active</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <div id="course-price-form" className="grid w-full gap-1.5">
                            <Label htmlFor="course-price" className="">Course Price <b>(THB)</b> <span className='text-red-500'>*</span></Label>
                            <div className='relative'>
                              <IconCurrencyBaht size={24} className='absolute left-1 top-2'/>
                              <Input id="price" placeholder='' className="col-span-3 pl-8"/>
                            </div>      
                          </div>
                        </div>
                      </div>
                      <DialogFooter className='mt-2'>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>

                </div>
                <div id="course-data" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4'>
                    {mock_data.map((item, index) => (
                        <CourseCard key={index} course={item} />
                    ))}
                </div>
              </div>
            </div>
        </TabsContent>
        <TabsContent value="user">
            <div id="table" className="mt-4 border rounded-md"> 
              <div id="table-container w-full flex-col items-center">
                <div id="table-header" className="flex space-x-2 items-center justify-between p-4">
                  <TableSearchBar/>
                  <Button className="h-full">
                    <IconUserPlus size={16} className="mr-2"/>
                    Add User
                  </Button>
                </div>
              </div>
            </div>
        </TabsContent>
    </Tabs>
  )
}
