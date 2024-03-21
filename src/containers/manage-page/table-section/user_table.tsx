'use client';
import { useState } from "react"
import TableSearchBar from "./table_search_bar"
import { Button } from "../../../components/ui/button"
import { IconUserPlus } from '@tabler/icons-react'
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableHeader, TableBody, TableHead, TableRow } from "@/components/ui/table"
import UserList from "./user_list"
import { userData } from "../constants/mockdata"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import ManageUserForm from "./manage_user_form";

const UserTable = () => {
    const [viewState, setViewState] = useState('all');

    function renderUserList() {
        if (viewState === 'all') {
            return userData;
        }else if (viewState === 'admin') {
            return userData.filter(user => user.role === 'Admin');
        }else if (viewState === 'user') {
            return userData.filter(user => user.role === 'User');
        }
    }

    return (
        <div id="table" className="mt-4 border rounded-md">
              <div id="table-container w-full flex-col items-center">
                <div id="table-header" className="flex space-x-2 items-center justify-between p-4">
                  <TableSearchBar/>
                  <Dialog>
                    <DialogTrigger asChild>
                        <Button className="h-full">
                            <IconUserPlus size={16} className="mr-2"/>
                            Add User
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Add User</DialogTitle>
                                <DialogDescription>
									Please fill in the required information marked with an
									asterisk (<span className="text-red-500">*</span>).
								</DialogDescription>
                        </DialogHeader>
                        <ManageUserForm user={{
                                userId: 0,
                                Firstname: "",
                                Lastname: "",
                                Email: "",
                                username: "",
                                password: "",
                                role: ""
                            }}/>
                    </DialogContent>
                  </Dialog>
                </div>
                <div id="table-subhead" className="flex space-x-4 justify-left px-4 pb-4">
                    <Tabs defaultValue="all">
                        <TabsList className=''>
                            <TabsTrigger value="all" onClick={() => setViewState('all')}>All</TabsTrigger>
                            <TabsTrigger value="admin" onClick={() => setViewState('admin')}>Admin</TabsTrigger>
                            <TabsTrigger value="user" onClick={() => setViewState('user')}>User</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div id="user-table" className="flex space-x-4 justify-left px-4 pb-4">
                    <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-center w-[10%]">User ID</TableHead>
                            <TableHead className="w-[25%]">Firstname</TableHead>
                            <TableHead className="w-[25%]">Lastname</TableHead>
                            <TableHead className="w-[20%]">Username</TableHead>
                            <TableHead className="text-center w-[10%]">Role</TableHead>
                            <TableHead className="w-[5%]"></TableHead>
                            <TableHead className="w-[5%]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {renderUserList()?.map((item, index) => (
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