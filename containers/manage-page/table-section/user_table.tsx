/* eslint-disable tailwindcss/no-custom-classname */
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
        <div id="table" className="mt-4 rounded-md border">
                <div id="table-container w-full flex-col items-center">
                    <div id="table-header" className="flex items-center justify-between space-x-2 p-4">
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
                <div id="table-subhead" className="justify-left flex space-x-4 px-4 pb-4">
                    <Tabs defaultValue="all">
                        <TabsList className=''>
                            <TabsTrigger value="all" onClick={() => setViewState('all')}>All</TabsTrigger>
                            <TabsTrigger value="admin" onClick={() => setViewState('admin')}>Admin</TabsTrigger>
                            <TabsTrigger value="user" onClick={() => setViewState('user')}>User</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
                <div id="user-table" className="justify-left flex space-x-4 px-4 pb-4">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[10%] text-center">User ID</TableHead>
                                <TableHead className="w-1/4">Firstname</TableHead>
                                <TableHead className="w-1/4">Lastname</TableHead>
                                <TableHead className="w-1/5">Username</TableHead>
                                <TableHead className="w-[10%] text-center">Role</TableHead>
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