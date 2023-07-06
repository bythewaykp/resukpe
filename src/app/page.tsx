"use client";

import data from "./data";
import Left from "@/components/Left/page";
import Right from "@/components/Right/page";
// import { signal } from "@preact/signals-react";

import { useState } from "react";

export default () => {
    const [obj, setObj] = useState(data);

    return (
        <>
            <div className="flex flex-row w-5/6 mx-auto">
                <Left obj={obj} setObj={setObj} />
                <Right obj={obj} />
            </div>
        </>
    );
};
