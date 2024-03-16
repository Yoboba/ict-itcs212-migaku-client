import React from 'react'
import TableSearchBar from './table_search_bar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '../ui/button'
import { IconUserPlus } from '@tabler/icons-react'
import CourseTable from './course_table'


export default function TableTabs() {
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
            <div id="table" className="mt-4 border rounded-md"> 
              <div id="table-container w-full flex-col items-center">
                <div id="table-header" className="flex space-x-2 items-center justify-between p-4">
                  <TableSearchBar/>
                  <Button className="h-full">
                    <IconUserPlus size={16} className="mr-2"/>
                    Add User
                  </Button>
                </div>
              </div>
            </div>
        </TabsContent>
    </Tabs>
  )
}
