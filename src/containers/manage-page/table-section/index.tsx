import React from 'react'
import TableSearchBar from './table_search_bar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '../../../components/ui/button'
import { IconUserPlus } from '@tabler/icons-react'
import CourseTable from './course_table'
import UserTable from './user_table'


export default function TableSection() {
  return (
    <Tabs defaultValue="course" className="w-full mt-4">
        <TabsList className=''>
            <TabsTrigger value="course">Course</TabsTrigger>
            <TabsTrigger value="user">Users</TabsTrigger>
        </TabsList>
        <TabsContent value="course">
            <CourseTable/>
        </TabsContent>
        <TabsContent value="user">
            <UserTable/>
        </TabsContent>
    </Tabs>
  )
}
