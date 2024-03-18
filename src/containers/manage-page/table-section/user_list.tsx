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

type User = {
    user: {
        userId: number
        name: string
        username: string
        role: string
    }
}

const UserList = ({user}: User) => {
    const editDialog = (
        <>
            <DialogHeader>
            </DialogHeader>
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
            <Button variant="destructive">Delete</Button>
        </>
    );
    
    return (
        <TableRow>
            <TableCell className="text-center">{user.userId}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell className="text-center">{user.role}</TableCell>
            <TableCell><IconEdit size={20} className="cursor-pointer"/></TableCell>
            <Dialog>
                <TableCell>
                <DialogTrigger asChild>
                    <IconTrash size={20} className="text-red-500 cursor-pointer"/>
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