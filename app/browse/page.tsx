'use client';
import Browse from "@/containers/browse-page/browse-section";
import isLogin from "@/util/isLogin";

export default function BrowsePage() {
    //console.log(isLogin())
    return (
        <div className="flex size-full">
            <Browse/>
        </div>
    )
}