/* eslint-disable tailwindcss/no-custom-classname */
"use client"
import { useState } from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";

export default function AddToFavorite() {
    const [isFavorite, setIsFavorite] = useState(false);
    return (
        <div className="flex cursor-pointer gap-2 text-nowrap" onClick={() => setIsFavorite(!isFavorite)}>
            { isFavorite ? <IconStarFilled className=" text-c7"/> : <IconStar/>}
            <p>Add To Favorite</p>
        </div>
    )
}