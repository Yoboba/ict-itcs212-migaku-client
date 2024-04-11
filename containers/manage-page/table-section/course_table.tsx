"use client";
import CourseCard from "./course_card";
import TableSearchBar from "./table_search_bar";
import { Button } from "../../../components/ui/button";
import { IconPlus, IconSortAscending2 } from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ManageCourseForm from "./manage_course_form";
import { useState, useEffect } from "react";
import getCookie from "@/util/getCookie";
import CourseCardSkeleton from "./course_card_skeleton";

const CourseTable = () => {
  const [courseData, setCourseData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const userId = document.cookie.split("; ")[0].split("=")[1];
  useEffect(() => {
    console.log(userId);
    fetch(
      `http://localhost:3001/api/course?courseId=&searchKey=&courseCat=All&teacherName=`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `${userId}`,
        },
      }
    ).then((res) => {
      if (res.status !== 200) {
        res.text().then((json) => {
          const resJSON = JSON.parse(json);
          console.log(resJSON);
        });
      } else {
        res.text().then((json) => {
          const resJSON = JSON.parse(json);
          setCourseData(resJSON);
          console.log(resJSON);
          setTimeout(() => {
            setIsLoading(false);
          }, 500);
        });
      }
    });
  }, []);
  return (
    <div id="table" className="mt-4 rounded-md border p-4">
      <div id="table-container w-full flex-col items-center">
        <div
          id="table-header"
          className="flex items-center justify-between space-x-2"
        >
          <div id="header-left" className="flex h-full space-x-4">
            <TableSearchBar />
            <Button className="h-full" variant={"secondary"}>
              <IconSortAscending2 size={20} className="" />
            </Button>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-full">
                <IconPlus size={16} className="mr-0 md:mr-2" />
                <div className="hidden md:block">Add Course</div>
              </Button>
            </DialogTrigger>
            <DialogContent className="nowrap:max-w-[800px] ">
              <DialogHeader>
                <DialogTitle>Course initialization</DialogTitle>
                <DialogDescription>
                  Please fill in the required information marked with an
                  asterisk (<span className="text-red-500">*</span>).
                </DialogDescription>
              </DialogHeader>
              <ManageCourseForm />
            </DialogContent>
          </Dialog>
        </div>
        <div
          id="course-data"
          className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {!isLoading
            ? courseData.map((item, index: number) => (
                <CourseCard variant="manage" key={index} course={item} />
              ))
            : Array.from({ length: 7 }, (_, index) => (
                <CourseCardSkeleton key={index} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default CourseTable;
