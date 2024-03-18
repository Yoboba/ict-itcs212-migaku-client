import { Button } from "@/components/ui/button"
import { TableCell, TableRow } from "@/components/ui/table"
import { IconEdit, IconTrash } from "@tabler/icons-react"

type User = {
    user: {
        userId: number
        name: string
        username: string
        role: string
    }
}

const UserList = ({user}: User) => {
    return (
        <TableRow>
            <TableCell>{user.userId}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.role}</TableCell>
            <TableCell><IconEdit size={20} className="cursor-pointer"/></TableCell>
            <TableCell><IconTrash size={20} className="text-red-500 cursor-pointer"/></TableCell>
        </TableRow>
    )
};

export default UserList