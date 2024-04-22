/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import { useEffect, useState } from "react";
import TableSearchBar from "./table_search_bar";
import { Button } from "../../../components/ui/button";
import { IconUserPlus } from "@tabler/icons-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import UserList from "./user_list";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ManageUserForm from "./manage_user_form";
import { useRouter } from "next/navigation";
import fetchCookie from "@/utils/fetchCookie";

const UserTable = () => {
  const router = useRouter();
  const [viewState, setViewState] = useState("all");
  const [userData, setUserData] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  const toggleRefetch = () => {
    setReFetch((prevState) => !prevState);
    console.log("called toggleRefetch");
  };

  useEffect(() => {
    fetchCookie().then(async (cookie) => {
      if (!cookie.userRole || !cookie.userId || cookie.userRole !== "Teacher") {
        router.replace("/unauthorized");
        router.refresh();
      } else {
        const userResponse = await fetch("http://localhost:3001/api/user", {
          headers: {
            "Content-Type": "application/json",
            authorization: cookie.userId,
          },
          method: "GET",
        });
        const data = await userResponse.json();
        console.log(data);
        setUserData(data);
      }
    });
  }, [reFetch, router]);

  function renderUserList() {
    if (viewState === "all") {
      return userData;
    } else if (viewState === "teacher") {
      return userData.filter((user: any) => user.role === "Teacher");
    } else if (viewState === "user") {
      return userData.filter((user: any) => user.role === "User");
    }
  }

  return (
    <div id="table" className="my-4 rounded-md border">
      <div id="table-container w-full flex-col items-center">
        <div
          id="table-header"
          className="flex items-center justify-between space-x-2 p-4"
        >
          <TableSearchBar />
          <Dialog>
            <DialogTrigger asChild>
              <Button className="h-full">
                <IconUserPlus size={16} className="mr-2" />
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
              <ManageUserForm
                user={{
                  userId: 0,
                  firstName: "",
                  lastName: "",
                  email: "",
                  username: "",
                  password: "",
                  role: "",
                }}
                method="post"
                onDone={toggleRefetch}
              />
            </DialogContent>
          </Dialog>
        </div>
        <div
          id="table-subhead"
          className="justify-left flex space-x-4 px-4 pb-4"
        >
          <Tabs defaultValue="all">
            <TabsList className="">
              <TabsTrigger value="all" onClick={() => setViewState("all")}>
                All
              </TabsTrigger>
              <TabsTrigger
                value="admin"
                onClick={() => setViewState("teacher")}
              >
                Teacher
              </TabsTrigger>
              <TabsTrigger value="user" onClick={() => setViewState("user")}>
                User
              </TabsTrigger>
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
                <UserList key={index} user={item} onDone={toggleRefetch} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
