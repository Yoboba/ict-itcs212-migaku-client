import TableSearchBar from "./table_search_bar"
import { Button } from "../../../components/ui/button"
import { IconUserPlus } from '@tabler/icons-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table"
import UserList from "./user_list"
import { userData } from "../constants/mockdata"

const UserTable = () => {
    return (
        <div id="table" className="mt-4 border rounded-md">
              <div id="table-container w-full flex-col items-center">
                <div id="table-header" className="flex space-x-2 items-center justify-between p-4">
                  <TableSearchBar/>
                  <Button className="h-full">
                    <IconUserPlus size={16} className="mr-2"/>
                    Add User
                  </Button>
                </div>
                <div id="table-subhead" className="flex space-x-4 justify-left px-4 pb-4">
                    <Tabs defaultValue="all">
                        <TabsList className=''>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="admin">Admin</TabsTrigger>
                            <TabsTrigger value="user">User</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div id="user-table" className="flex space-x-4 justify-left px-4 pb-4">
                    <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[10%]">User ID</TableHead>
                            <TableHead className="w-[35%]">Name</TableHead>
                            <TableHead className="w-[35%]">Username</TableHead>
                            <TableHead className="w-[10%]">Role</TableHead>
                            <TableHead className="w-[5%]"></TableHead>
                            <TableHead className="w-[5%]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {userData.map((item, index) => (
                            <UserList key={index} user={item} />
                        ))}
                    </TableBody>
                    </Table>
                </div>
              </div>
            </div>
    )
};

export default UserTable