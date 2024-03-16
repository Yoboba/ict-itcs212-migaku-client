import CourseCard from "./course_card";
import TableSearchBar from "./table_search_bar";
import { Button } from "../ui/button";
import {
	IconPlus,
	IconSortAscending2,
} from "@tabler/icons-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import AddCourseForm from "./add_course_form";

let mock_data = [
	{
		courseId: 1,
		courseCode: "ITCS212",
		courseCat: "IT",
		courseName: "Introduction to Web Programming",
		courseDes:
			"Learn the fundamentals of web programming including HTML, CSS, and JavaScript.",
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
		courseDes:
			"Basic concepts of physics including mechanics, thermodynamics, and electromagnetism.",
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
	},
];
const CourseTable = () => {
	return (
		<div id="table" className="mt-4 border rounded-md p-4">
			<div id="table-container w-full flex-col items-center">
				<div
					id="table-header"
					className="flex space-x-2 items-center justify-between"
				>
					<div id="header-left" className="h-full flex space-x-4">
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
							<AddCourseForm/>
						</DialogContent>
					</Dialog>
				</div>
				<div
					id="course-data"
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-4"
				>
					{mock_data.map((item, index) => (
						<CourseCard key={index} course={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CourseTable;
