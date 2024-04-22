"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseCard from "@/containers/manage-page/table-section/course_card";
import { Label } from "@radix-ui/react-dropdown-menu";
import { IconFilterFilled, IconSearch, IconSkull } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export default function Browse() {
  const [courses, setCourses] = useState([]);
  const [rate1, setRate1] = useState(true);
  const [rate2, setRate2] = useState(true);
  const [rate3, setRate3] = useState(true);
  const [rate4, setRate4] = useState(true);
  const [searchKey, setSearchKey] = useState("");
  const [courseCat, setCourseCat] = useState("All");
  const [teacherName, setTeacherName] = useState("");

  async function fetchAllCourses() {
    const response = await fetch(
      `/api/course?courseId=&searchKey=${searchKey}&courseCat=${courseCat}&teacherName=${teacherName}`
    );
    const data = await response.json();
    console.log(data);
    setCourses(data.data);
  }

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <div className="mx-4 mt-16 size-full flex-col gap-2 p-4 md:grid-cols-12 lg2:grid">
      <div id="filter" className="lg2:col-span-3">
        <Card className="mt-4">
          <CardHeader>
            <CardTitle className="flex text-2xl font-semibold">
              Filter{" "}
              <IconFilterFilled size={25} className="ml-2 mt-1 text-black" />
            </CardTitle>
          </CardHeader>
          <CardContent className="mx-4 border-t-2 border-gray-200">
            <div className="mt-4 text-xl font-semibold">Difficulty Rating</div>
            <div className="flex space-x-2">
              <Checkbox
                className="mt-4"
                disabled
                onClick={() => setRate4(!rate4)}
                defaultChecked
              />
              <div className="mt-2 text-lg font-semibold">{"> 4"}</div>
              <div className="mt-3 flex space-x-2">
                {Array(4).fill(<IconSkull stroke={2} />)}
              </div>
            </div>
            <div className="flex space-x-2">
              <Checkbox
                className="mt-4"
                disabled
                onClick={() => setRate3(!rate3)}
                defaultChecked
              />
              <div className="mt-2 text-lg font-semibold">{"> 3"}</div>
              <div className="mt-3 flex space-x-2">
                {Array(3).fill(<IconSkull stroke={2} />)}
              </div>
            </div>
            <div className="flex space-x-2">
              <Checkbox
                className="mt-4"
                disabled
                onClick={() => setRate2(!rate2)}
                defaultChecked
              />
              <div className="mt-2 text-lg font-semibold">{"> 2"}</div>
              <div className="mt-3 flex space-x-2">
                {Array(2).fill(<IconSkull stroke={2} />)}
              </div>
            </div>
            <div className="flex space-x-2">
              <Checkbox
                className="mt-4"
                disabled
                onClick={() => setRate1(!rate1)}
                defaultChecked
              />
              <div className="mt-2 text-lg font-semibold">{"> 1"}</div>
              <div className="mt-3 flex space-x-2">
                <IconSkull stroke={2} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div id="browsing" className="lg2:col-span-9">
        <div className="mx-4 mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-10">
            <Input
              placeholder="Search"
              onInput={(e) => setSearchKey(e.currentTarget.value)}
            />
          </div>
          <div className="col-span-2">
            <Button
              className="w-full bg-[#ff7a7a] hover:bg-red-500"
              onClick={() => fetchAllCourses()}
            >
              <IconSearch size={20} className="font-bold text-white" />
            </Button>
          </div>
        </div>
        <div className="mx-4 mt-4 grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <Label className="mb-2">Course Category:</Label>
            <Select defaultValue="All" onValueChange={(e) => setCourseCat(e)}>
              <SelectTrigger className="mt-0 w-full">
                <SelectValue placeholder="Course Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="IT">Information Technology</SelectItem>
                <SelectItem value="MA">Mathematics</SelectItem>
                <SelectItem value="SC">Science</SelectItem>
                <SelectItem value="LG">Languages</SelectItem>
                <SelectItem value="SO">Social Sciences</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="col-span-6">
            <Label className="mb-2">Instructor Name:</Label>
            <Input
              placeholder="ex. Albus Dumbledore"
              onInput={(e) => setTeacherName(e.currentTarget.value)}
            ></Input>
          </div>
        </div>
        <div
          id="course-results"
          className="mx-4 mt-4 h-auto flex-col rounded-md border p-4"
        >
          <div
            id="course-data"
            className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {courses
              .filter((c: any) => c.status.data[0] === 1)
              ?.map((item, index) => (
                <CourseCard
                  variant="browse"
                  key={index}
                  course={item}
                  onDone={() => {}}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
