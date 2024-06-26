"use client";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../../../components/ui/button";
import { IconDotsVertical, IconEdit, IconTrash } from "@tabler/icons-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ManageCourseForm from "./manage_course_form";
import CourseImage from "./course_image";
import Link from "next/link";
import ITImg from "@/public/courseimages/369588.jpg";
import MAImg from "@/public/courseimages/370112.jpg";
import SCImg from "@/public/courseimages/372560.jpg";
import LGImg from "@/public/courseimages/373678.jpg";
import SOImg from "@/public/courseimages/373935.jpg";
import fetchCookie from "@/utils/fetchCookie";
import { toast } from "@/components/ui/use-toast";

type CourseProps = {
  course: {
    courseId: number;
    courseCode: string;
    courseCat: string;
    courseName: string;
    courseDes: string;
    price: number;
    status: {
      data: number[];
      type: string;
    };
    rating: number;
    courseDuration: number;
    imgSrc?: string;
  };
  variant: string;
  onDone: () => void;
};

type CategoryMap = {
  [key: string]: string;
};

type ImageMap = {
  [key: string]: string;
};

const categoryMap: CategoryMap = {
  IT: "Information Technology",
  MA: "Mathematics",
  SC: "Science",
  LG: "Languages",
  SO: "Social Sciences",
};

const imageMap: ImageMap = {
  IT: ITImg.src,
  MA: MAImg.src,
  SC: SCImg.src,
  LG: LGImg.src,
  SO: SOImg.src,
};

const CourseCard = ({ course, variant, onDone }: CourseProps) => {
  const axios = require("axios").default;
  const [isProcessing, setIsProcessing] = useState(false);
  const [dialogState, setDialogState] = useState("");
  async function onDeleteSubmit() {
    const cookie = await fetchCookie();
    axios
      .delete("http://localhost:3001/api/course", {
        headers: {
          authorization: cookie.userId,
        },
        params: {
          courseId: course.courseId,
        },
      })
      .then(async (res: any) => {
        console.log(res);
        if (res.status !== 200) {
          toast({
            variant: "destructive",
            title: "Failed to delete course.",
            description: `Server responded with: ${res.data.Message}`,
          });
        } else {
          toast({
            title: "Course Deleted.",
            description: `Server responded with: ${res.data.Message}`,
          });
          setIsProcessing(false);
          onDone();
        }
      })
      .catch((error: any) => {
        toast({
          variant: "destructive",
          title: "Unexpected Error",
          description: `Server responded with: ${error}`,
        });
        setIsProcessing(false);
      });
  }
  const editDialog = (
    <>
      <DialogHeader>
        <DialogTitle>Edit</DialogTitle>
        <DialogDescription>
          Please make changes to your course as you seem appropriate.
        </DialogDescription>
      </DialogHeader>
      <ManageCourseForm method="put" course={course} onDone={onDone} />
    </>
  );
  const deleteDialog = (
    <>
      <DialogHeader>
        <DialogTitle>Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your course
          and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>
      <Button
        variant="destructive"
        onClick={onDeleteSubmit}
        disabled={isProcessing}
      >
        Delete
      </Button>
    </>
  );

  let imgSrc = imageMap[course.courseCat];

  if (course.imgSrc) {
    imgSrc = course.imgSrc;
  }

  return (
    <>
      {variant === "manage" ? (
        <div
          id="CardContainer"
          className="relative h-[180px] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-200"
        >
          <div id="course-banner" className="relative size-full">
            <div id="dimmer" className="absolute size-full bg-slate-200" />
            <CourseImage src={imgSrc} />
          </div>
          <div
            id="course-category"
            className="absolute left-[4px] top-1 cursor-pointer rounded-[4px] bg-slate-600 px-2 text-sm font-semibold text-white"
          >
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="">{course.courseCode}</div>
                </TooltipTrigger>
                <TooltipContent>{categoryMap[course.courseCat]}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div id="more-options" className="absolute right-[6px] top-[12px]">
            <Dialog>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <IconDotsVertical size={20} className=" text-white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="">
                  <DialogTrigger
                    asChild
                    onClick={() => {
                      setDialogState("edit");
                    }}
                  >
                    <DropdownMenuItem className="relative">
                      Edit
                      <IconEdit size={20} className="absolute right-2" />
                    </DropdownMenuItem>
                  </DialogTrigger>
                  <DialogTrigger
                    asChild
                    onClick={() => {
                      setDialogState("delete");
                    }}
                  >
                    <DropdownMenuItem>
                      Delete
                      <IconTrash size={20} className="absolute right-2" />
                    </DropdownMenuItem>
                  </DialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>
              <DialogContent
                className={`${dialogState === "edit" ? "nowrap:max-w-[800px]" : ""}`}
              >
                {dialogState === "edit" ? editDialog : deleteDialog}
              </DialogContent>
            </Dialog>
          </div>
          <div
            id="card-footer"
            className="absolute bottom-0 flex w-full bg-slate-50 px-4 py-2"
          >
            <div id="course-name">
              <div id="course-name" className="text-lg font-semibold">
                {course.courseName}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Link href={`/browse/${course.courseId}`}>
          <div
            id="CardContainer"
            className="relative h-[180px] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-slate-200"
          >
            <div id="course-banner" className="relative size-full">
              <div id="dimmer" className="absolute size-full bg-slate-900" />
              <CourseImage src={imgSrc} />
            </div>
            <div
              id="course-category"
              className="absolute left-[4px] top-1 cursor-pointer rounded-[4px] bg-slate-600 px-2 text-sm font-semibold text-white"
            >
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
            <div
              id="card-footer"
              className="absolute bottom-0 flex w-full bg-slate-50 px-4 py-2"
            >
              <div id="course-name">
                <div id="course-name" className="text-lg font-semibold">
                  {course.courseName}
                </div>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default CourseCard;
