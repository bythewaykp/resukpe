import { useState } from "react";
import Info from "@/components/Left/Info/page";
import Links from "@/components/Left/Links/page";

export default ({ obj, setObj }) => {
    return (
        <div
            id="left"
            className="w-1/2 items-start justify-start flex flex-col h-full gap-4"
        >
            <Info obj={obj} setObj={setObj} />
            <Links obj={obj} setObj={setObj} />
        </div>
    );
};
