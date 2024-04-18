import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CourseTable from "./course_table";
import UserTable from "./user_table";

export default function TableSection() {
  return (
    <Tabs defaultValue="course" className="mt-4 w-full">
      <TabsList className="">
        <TabsTrigger value="course">Course</TabsTrigger>
        <TabsTrigger value="user">Users</TabsTrigger>
      </TabsList>
      <TabsContent value="course">
        <CourseTable />
      </TabsContent>
      <TabsContent value="user">
        <UserTable />
      </TabsContent>
    </Tabs>
  );
}
