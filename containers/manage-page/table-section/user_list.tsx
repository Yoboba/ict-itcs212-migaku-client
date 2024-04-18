import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import ManageUserForm from "./manage_user_form";
import fetchCookie from "@/utils/fetchCookie";
import { toast } from "@/components/ui/use-toast";

type UserList = {
    user: {
        userId: number
        firstName: string
        lastName: string
        email: string
        username: string
        password: string
        role: string
    },
    onDone: () => void
}

const UserList = ({user, onDone}: UserList) => {
    function onDelete()
    {
        fetchCookie().then(async (cookie) => {
            if (!cookie.userRole || !cookie.userId || cookie.userRole != "Teacher") {
                toast({
                    title: "Error",
                    description: "You are not authorized to perform this action.",
                })
                return
            } else {
                const delRes = await fetch(`http://localhost:3001/api/user?userId=${user.userId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    authorization: cookie.userId
                }
                })
                if(delRes.status === 200)
                {
                    toast({
                        title: "User Deleted",
                        description: `Server responded with: ${delRes.statusText}`,
                    })
                    onDone();
                }
                else
                {
                    toast({
                        title: "Error",
                        description: `Server responded with: ${delRes.statusText}`,
                    })
                }
            }
        })
    }
    const editDialog = (
        <>
            <DialogHeader>
            <DialogTitle>Edit</DialogTitle>
                <DialogDescription>
                    Please make changes to the user data as you seem appropriate.
                </DialogDescription>
            </DialogHeader>
            <ManageUserForm user={user} method="put" onDone={onDone}/>
        </>
    )
    const deleteDialog = (
        <>
            <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. This will permanently delete this user
                    and remove the data from our servers.
                </DialogDescription>
            </DialogHeader>
            <Button variant="destructive" onClick={onDelete}>Delete</Button>
        </>
    );
    
    return (
        <TableRow>
            <TableCell className="text-center">{user.userId}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell className="text-center">{user.role}</TableCell>
            <Dialog>
                <TableCell>
                    <DialogTrigger asChild>
                        <IconEdit size={20} className="cursor-pointer"/>
                    </DialogTrigger>
                </TableCell>
                <DialogContent>
                    {editDialog}
                </DialogContent>
            </Dialog>
            <Dialog>
                <TableCell>
                    <DialogTrigger asChild>
                        <IconTrash size={20} className="cursor-pointer text-red-500"/>
                    </DialogTrigger>
                </TableCell>
                <DialogContent>
                    {deleteDialog}
                </DialogContent>
            </Dialog>
        </TableRow>
    )
};

export default UserList