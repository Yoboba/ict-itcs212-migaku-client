/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import Profile from "@/components/my-ui/profile";
import StarRating from "@/components/my-ui/star_rating";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AddToFavorite from "./add_to_favorite";
import { useEffect, useState } from "react";

interface CourseCardProps {
interface CourseCardProps {
  courseId: number;
}

export default function CourseCard(props: CourseCardProps) {
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
    fetchCourse();
  }, []);

  async function fetchCourse() {
    const response = await fetch(
      `/browse/api?courseId=${props.courseId}&searchKey=&courseCat=&teacherName=`
    );
    const data = await response.json();
    console.log(data);
    setCourse(data.data[0]);
  }
  return (
    <main className="flex flex-col items-center justify-center gap-5 rounded-xl bg-white p-10 drop-shadow-xl sm:gap-10 md:flex-col lg:flex-row ">
      <Image
        src={"/images/snow_miku.jpg"}
        alt={"Course Image"}
        height={350}
        width={350}
        className=" size-[200px] rounded-xl sm:size-[350px]"
      />
      <div className="flex flex-col items-center justify-between gap-10 sm:items-start">
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-start">
          <div className="flex flex-col">
            <h1 className=" text-3xl font-bold sm:text-5xl">
              {course.courseName}
            </h1>
            <p className="hidden sm:flex sm:text-lg">{course.courseDes}</p>
          </div>
          <AddToFavorite />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:items-end sm:gap-0">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <h2 className=" text-xl font-semibold">Instructor</h2>
            <Profile
              name={course.teacherName}
              role={"CTO at NOT FOR CHARITY,.Co.Ltd"}
              avatar={"https://github.com/shadcn.png"}
            />
          </div>
          <div className="flex flex-col items-center  gap-2">
            <div className=" flex gap-2">
              <p className=" text-sm text-c7 sm:text-xl">{course.rating}</p>
              <StarRating rating={course.rating} />
            </div>
            <h1 className=" text-xl sm:text-3xl">{course.price} THB</h1>
            <Button
              className=" w-30 h-10 bg-c0 text-lg font-semibold hover:bg-c6 sm:h-20 sm:w-60  sm:text-2xl"
              size="lg"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
