import Image from "next/image"

type CourseProps = {
    course: {
        courseId: number,
        courseCode: string,
        courseCat: string,
        courseName: string,
        courseDes: string,
        imgSrc?: string,
    }
  }
const CourseCard = ({course}: CourseProps) => {
    if (!course.imgSrc) {
        course.imgSrc = "https://via.placeholder.com/180x180"
    }
  return (
    <div id="CardContainer" className='relative h-[180px] w-full bg-slate-200 rounded-md overflow-hidden flex-col items-center justify-center'>
        <div id="course-banner" className=''>
            <Image
                src={course.imgSrc}
                alt="Course Banner"
                layout="fill"
                objectFit="cover"
            />
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