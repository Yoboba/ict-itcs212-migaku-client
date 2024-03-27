import CourseCard from "./course_card";
import TableSearchBar from "./table_search_bar";
import { Button } from "../../../components/ui/button";
import {
	IconPlus,
	IconSortAscending2,
} from "@tabler/icons-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import ManageCourseForm from "./manage_course_form";
import { mockData } from "../constants/mockdata";

const CourseTable = () => {
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
							<ManageCourseForm/>
						</DialogContent>
					</Dialog>
				</div>
				<div
					id="course-data"
					className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
				>
					{mockData.map((item, index) => (
						<CourseCard variant="manage" key={index} course={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CourseTable;
