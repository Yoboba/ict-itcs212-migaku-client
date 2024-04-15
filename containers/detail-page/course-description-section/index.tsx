/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

interface CourseDescriptionProps {
  courseId: number;
}
export default function CourseDescriptionSection(
  props: CourseDescriptionProps
) {
  const [course, setCourse] = useState({
    courseId: 0,
    courseCode: "",
    courseCat: "",
    courseName: "",
    courseDes: "",
    courseDuration: 0,
    price: 0,
    teacherName: "",
    rating: 0,
    status: 0,
  });

  useEffect(() => {
    async function fetchCourseDescription() {
      const response = await fetch(
        `/browse/api?courseId=${props.courseId}&searchKey=&courseCat=&teacherName=`
      );
      const data = await response.json();
      console.log(data);
      setCourse(data.data[0]);
    }
    // use function
    fetchCourseDescription();
  }, []);

  return (
    <div className="flex h-full  flex-col gap-4 p-6 sm:flex-row sm:gap-10 sm:p-10">
      <div className="sm:text-md flex size-full flex-col items-start justify-center rounded-xl bg-white p-5 text-sm drop-shadow-lg sm:w-1/3">
        <p>Course Code : {course.courseCode}</p>
        <p>Duration : {course.courseDuration}</p>
        <p>No. of videos : 120</p>
        <p>Recommend for : Olympic Swimmer </p>
      </div>
      <Tabs defaultValue="about" className="size-full sm:w-2/3">
        <TabsList className=" h-8 w-fit gap-2 bg-transparent">
          <TabsTrigger value="about" className="py-[2px] focus:border-2">
            About
          </TabsTrigger>
          <TabsTrigger value="outcome" className="py-[2px] focus:border-2">
            Outcome
          </TabsTrigger>
          <TabsTrigger value="course" className="py-[2px] focus:border-2">
            Course
          </TabsTrigger>
        </TabsList>
        <div className="mt-2 h-px w-full bg-c0" />
        <TabsContent value="about" className="sm:text-md text-justify text-xs">
          {course.courseDes}
        </TabsContent>
        <TabsContent
          value="outcome"
          className="sm:text-md text-justify text-xs"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which look even slightly believable. If
          you are going to use a passage of Lorem Ipsum, you need to be sure
          there anything embarrassing hidden in the middle of text. All the
          Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </TabsContent>
        <TabsContent value="course" className="sm:text-md text-justify text-xs">
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from de
          Finibus Bonorum et by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </TabsContent>
      </Tabs>
    </div>
  );
}
