'use client'
import { useState } from "react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { Button } from "../../../components/ui/button"
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import ManageCourseForm from "./manage_course_form"
import CourseImage from "./course_image"
import Link from "next/link"

type CourseProps = {
    course: {
        courseId: number,
        courseCode: string,
        courseCat: string,
        courseName: string,
        courseDes: string,
        price: number,
        status: string,
        imgSrc?: string,
    },
    variant: string, 
  }

type CategoryMap = {
    [key: string]: string;
}

const categoryMap: CategoryMap = {
    "IT": "Information Technology",
    "MA": "Mathematics",
    "SC": "Science",
    "LG": "Languages",
    "SO": "Social Sciences",
};

const CourseCard = ({course, variant}: CourseProps) => {
    const editDialog = (
        <>
            <DialogHeader>
                <DialogTitle>Edit</DialogTitle>
                <DialogDescription>
                    Please make changes to your course as you seem appropriate.
                </DialogDescription>
            </DialogHeader>
            <ManageCourseForm course={course}/> 
        </>
    )
    const deleteDialog = (
        <>
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete your course
                    and remove your data from our servers.
                </DialogDescription>
            </DialogHeader>
            <Button variant="destructive">Delete</Button>
        </>
    )
    const [dialogState, setDialogState] = useState('edit')

    if (!course.imgSrc) {
        course.imgSrc = "https://konachan.net/sample/950f7c702854f67d021882be1af2befd/Konachan.com%20-%20374218%20sample.jpg"
    }

  return (
    <>
        {
        variant === 'manage' ? 
        <div id="CardContainer" className='relative h-[180px] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-200'>
        <div id="course-banner" className='relative size-full'>
            <div id='dimmer' className="absolute size-full bg-slate-900"/>
            <CourseImage src={course.imgSrc}/>
        </div>
        <div id="course-category" className="absolute left-[4px] top-1 cursor-pointer rounded-[4px] bg-slate-600 px-2 text-sm font-semibold text-white">
            <TooltipProvider delayDuration={100}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="">{course.courseCode}</div>
                    </TooltipTrigger>
                    <TooltipContent>
                        {categoryMap[course.courseCat]}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>         
        </div>
        <div id="more-options" className="absolute right-[6px] top-[12px]">
            <Dialog>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <IconDotsVertical size={20} className=" text-white"/>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="">
                        <DialogTrigger asChild onClick={() => {setDialogState('edit')}}>
                            <DropdownMenuItem className="relative">
                                Edit
                                <IconEdit size={20} className="absolute right-2"/>
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogTrigger asChild onClick={() => {setDialogState('delete')}}>
                            <DropdownMenuItem>
                                Delete
                                <IconTrash size={20} className="absolute right-2"/>
                            </DropdownMenuItem>
                        </DialogTrigger>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent className={`${dialogState === 'edit' ? 'nowrap:max-w-[800px]' : ''}`}>
                    {dialogState === 'edit' ? editDialog : deleteDialog}
                </DialogContent>
            </Dialog>
        </div>
        <div id="card-footer" className='absolute bottom-0 flex w-full bg-slate-50 px-4 py-2'>
            <div id="course-name">
                <div id="course-name" className='text-lg font-semibold'>{course.courseName}</div>
            </div>
        </div>
    </div> 
    :   
        <Link href={`/details/${course.courseId}`}>
            <div id="CardContainer" className='relative h-[180px] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-200'>
                <div id="course-banner" className='relative size-full'>
                    <div id='dimmer' className="absolute size-full bg-slate-900"/>
                    <CourseImage src={course.imgSrc}/>
                </div>
                <div id="course-category" className="absolute left-[4px] top-1 cursor-pointer rounded-[4px] bg-slate-600 px-2 text-sm font-semibold text-white">
                    <TooltipProvider delayDuration={100}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="">{course.courseCode}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                                {categoryMap[course.courseCat]}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>         
                </div>
                <div id="card-footer" className='absolute bottom-0 flex w-full bg-slate-50 px-4 py-2'>
                    <div id="course-name">
                        <div id="course-name" className='text-lg font-semibold'>{course.courseName}</div>
                    </div>
                </div>
            </div>
        </Link>
        
    }
    </>
  )
}



export default CourseCard