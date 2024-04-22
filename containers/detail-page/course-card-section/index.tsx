/* eslint-disable tailwindcss/no-custom-classname */
import CourseCard from "./course_card";

interface CourseCardProps {
  courseId: number;
}

export default function CourseCardSection(props: Readonly<CourseCardProps>) {
  return (
    <div className=" flex h-1/2 w-full items-center justify-center bg-c5 px-4 pb-6 pt-20 sm:px-16 sm:pb-16 sm:pt-32">
      <CourseCard courseId={props.courseId} />
    </div>
  );
}
