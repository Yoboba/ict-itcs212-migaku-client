'use client';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { FormControl } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { SliderRange } from "@/components/ui/slider-range"
import { mockData } from "@/containers/manage-page/constants/mockdata";
import CourseCard from "@/containers/manage-page/table-section/course_card";
import { Label } from "@radix-ui/react-dropdown-menu";
import { IconFilterFilled, IconSearch, IconStarFilled } from "@tabler/icons-react"

export default function Browse() {
    return (
        <div className="grid grid-cols-12 w-full h-full mt-24 mx-4 gap-2">
                <div id="filter" className="col-span-3">
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle className="text-2xl font-semibold flex">Filter <IconFilterFilled size={25} className="text-black mt-1 ml-2"/></CardTitle>
                        </CardHeader>
                        <CardContent className="border-b-2 border-gray-200 mx-4">
                            <div className="text-xl font-semibold">Price Range</div>
                            <SliderRange className="mt-4" defaultValue={[1000,9000]} min={0} max={10000}/>
                        </CardContent>
                        <CardContent className="mt-4 mx-4">
                            <div className="text-xl font-semibold">User Rating</div>
                            <div className="flex space-x-2">
                                <Checkbox className="mt-4" defaultChecked/>
                                <div className="text-lg font-semibold mt-2">{'> 4'}</div>
                                <div className="flex space-x-2 mt-3">
                                    {Array(4).fill(<IconStarFilled size={20} className="text-c7" />)}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <Checkbox className="mt-4" defaultChecked/>
                                <div className="text-lg font-semibold mt-2">{'> 3'}</div>
                                <div className="flex space-x-2 mt-3">
                                    {Array(3).fill(<IconStarFilled size={20} className="text-c7" />)}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <Checkbox className="mt-4" defaultChecked/>
                                <div className="text-lg font-semibold mt-2">{'> 2'}</div>
                                <div className="flex space-x-2 mt-3">
                                    {Array(2).fill(<IconStarFilled size={20} className="text-c7" />)}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <Checkbox className="mt-4" defaultChecked/>
                                <div className="text-lg font-semibold mt-2">{'> 1'}</div>
                                <div className="flex space-x-2 mt-3">
                                    <IconStarFilled size={20} className="text-c7" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div id="browsing" className="col-span-9">
                    <div className="grid grid-cols-12 gap-4 mt-4 mx-4">
                        <div className="col-span-11">
                            <Input placeholder="Search"/>
                        </div>
                        <div className="col-span-1">
                            <Button className="w-full bg-[#ff7a7a] hover:bg-red-500"><IconSearch size={20} className="text-white font-bold" /></Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 mt-4 mx-4">
                        <div className="col-span-3">
                            <Label className="mb-2">Course Category:</Label>
                            <Select defaultValue="ALL">
                                <SelectTrigger className="w-full mt-0">
                                    <SelectValue placeholder="Course Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ALL">All</SelectItem>
                                    <SelectItem value="IT">Information Technology</SelectItem>
                                    <SelectItem value="MA">Mathematics</SelectItem>
                                    <SelectItem value="SC">Science</SelectItem>
                                    <SelectItem value="LG">Languages</SelectItem>
                                    <SelectItem value="SO">Social Sciences</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="col-span-3">
                            <Label className="mb-2">Instructor Name:</Label>
                            <Input placeholder="ex. Albus Dumbledore"></Input>
                        </div>
                    </div>
                    <div id="course-results" className="p-4 rounded-md border h-auto mt-4 mx-4">
                    <div
					id="course-data"
					className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
				>
					{mockData.map((item, index) => (
						<CourseCard key={index} course={item} />
					))}
				</div>
                    </div>
                </div>
            </div>
    )
}