/* eslint-disable tailwindcss/no-custom-classname */
import CourseCard from "./course_card";

export default function CourseCardSection() {
    return (
        <div className=" bg-c5 flex h-1/2 w-full items-center justify-center px-4 pb-6 pt-20 sm:px-16 sm:pb-16 sm:pt-32">
            <CourseCard/>
        </div>
    )
}