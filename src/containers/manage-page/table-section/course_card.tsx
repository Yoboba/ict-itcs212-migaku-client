'use client'
import Image from "next/image"
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
    }
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

const CourseCard = ({course}: CourseProps) => {
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
    <div id="CardContainer" className='relative h-[180px] w-full bg-slate-200 rounded-md overflow-hidden flex-col items-center justify-center'>
        <div id="course-banner" className='w-full h-full relative'>
            <div id='dimmer' className="absolute bg-slate-900 w-full h-full"/>
            <Image
                src={course.imgSrc}
                alt="Course Banner"
                fill
                style={{
                    objectFit: 'cover'
                }}
                className="absolute opacity-70"
            />
        </div>
        <div id="course-category" className="absolute top-1 left-[4px] font-semibold text-sm px-2 bg-slate-600 text-white rounded-[4px] cursor-pointer">
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
                        <IconDotsVertical size={20}/>
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
        <div id="card-footer" className='bg-slate-50 w-full py-2 px-4 flex absolute bottom-0'>
            <div id="course-name">
                <div id="course-name" className='text-lg font-semibold'>{course.courseName}</div>
            </div>
        </div>
    </div>
  )
}



export default CourseCard