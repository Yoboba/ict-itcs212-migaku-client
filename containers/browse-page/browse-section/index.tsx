'use client';
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
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
        <div className="lg2:grid mx-4 mt-16 size-full flex-col gap-2 p-4 md:grid-cols-12">
                <div id="filter" className="lg2:col-span-3">
                    <Card className="mt-4">
                        <CardHeader>
                            <CardTitle className="flex text-2xl font-semibold">Filter <IconFilterFilled size={25} className="ml-2 mt-1 text-black"/></CardTitle>
                        </CardHeader>
                        <CardContent className="mx-4 border-b-2 border-gray-200">
                            <div className="text-xl font-semibold">Price Range</div>
                            <SliderRange className="mt-4" defaultValue={[1000,9000]} min={0} max={10000}/>
                        </CardContent>
                        <CardContent className="mx-4 mt-4">
                            <div className="text-xl font-semibold">User Rating</div>
                            <div className="flex space-x-2"> 
                                <Checkbox className="mt-4" defaultChecked/>
                                <div className="mt-2 text-lg font-semibold">{'> 4'}</div>
                                <div className="mt-3 flex space-x-2">
                                    {Array(4).fill(<IconStarFilled key="4s" size={20} className="text-c7" />)}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <Checkbox className="mt-4" defaultChecked/>
                                <div className="mt-2 text-lg font-semibold">{'> 3'}</div>
                                <div className="mt-3 flex space-x-2">
                                    {Array(3).fill(<IconStarFilled key="3s" size={20}  className="text-c7" />)}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <Checkbox className="mt-4" defaultChecked/>
                                <div className="mt-2 text-lg font-semibold">{'> 2'}</div>
                                <div className="mt-3 flex space-x-2">
                                    {Array(2).fill(<IconStarFilled key="2s" size={20} className="text-c7" />)}
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <Checkbox className="mt-4" defaultChecked/>
                                <div className="mt-2 text-lg font-semibold">{'> 1'}</div>
                                <div className="mt-3 flex space-x-2">
                                    <IconStarFilled key="1s" size={20} className="text-c7" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div id="browsing" className="lg2:col-span-9">
                    <div className="mx-4 mt-4 grid grid-cols-12 gap-4">
                        <div className="col-span-10">
                            <Input placeholder="Search"/>
                        </div>
                        <div className="col-span-2">
                            <Button className="w-full bg-[#ff7a7a] hover:bg-red-500"><IconSearch size={20} className="font-bold text-white" /></Button>
                        </div>
                    </div>
                    <div className="mx-4 mt-4 grid grid-cols-12 gap-4">
                        <div className="col-span-6">
                            <Label className="mb-2">Course Category:</Label>
                            <Select defaultValue="ALL">
                                <SelectTrigger className="mt-0 w-full">
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
                        <div className="col-span-6">
                            <Label className="mb-2">Instructor Name:</Label>
                            <Input placeholder="ex. Albus Dumbledore"></Input>
                        </div>
                    </div>
                    <div id="course-results" className="mx-4 mt-4 h-auto flex-col rounded-md border p-4">
                        <div>
                        <Select>
                            <SelectTrigger className="w-full sm:w-[400px]">
                                <SelectValue placeholder="Sort By" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cs-name">Course Name</SelectItem>
                                <SelectItem value="cs-cat">Course Category</SelectItem>
                                <SelectItem value="usr-rating">User Rating</SelectItem>
                            </SelectContent>
                        </Select>
                        </div>
                        <div
                            id="course-data"
                            className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {mockData.map((item, index) => (
                                <CourseCard variant="browse" key={index} course={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
    )
}