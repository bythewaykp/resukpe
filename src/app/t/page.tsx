"use client";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import dropdown from "lib/icons/dropdown.svg";
import dropup from "lib/icons/dropup.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronDown,
    faCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

const items = ["abhiram", "bishmilla", "catherine", "doggie"];

export default () => {
    let flipClick = () => {
        setClicked(!clicked);
    };
    const [temp, setTemp] = useState("");
    const [search, setSearch] = useState("");
    const [clicked, setClicked] = useState(false);
    const [hoverMain, setHoverMain] = useState(false);
    const [hoverSub, setHoverSub] = useState(false);

    return (
        <>
            <div className="flex flex-row bg-[#708090] w-fit p-4 focus-within:outline focus-within:outline-4 focus-within:outline-red-500 rounded-[30px] relative">
                <input
                    type="text"
                    className="focus:outline-none bg-inherit pl-4"
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                />
                <button
                    className="absolute right-12"
                    onClick={() => setTemp("")}
                    onMouseEnter={() => setHoverMain(true)}
                    onMouseLeave={() => setHoverMain(false)}
                >
                    <FontAwesomeIcon
                        icon={faCircleMinus}
                        color={hoverMain ? "rgb(248 113 113)" : "#000"}
                        size="lg"
                    />
                </button>
                <div
                    className="relative"
                    onMouseEnter={flipClick}
                    onMouseLeave={flipClick}
                >
                    <button className="z-10 absolute right-0">
                        <FontAwesomeIcon
                            icon={faCircleChevronDown}
                            size="lg"
                            rotation={clicked ? 180 : undefined}
                            color={clicked ? "#ff9" : "#000"}
                        />
                    </button>
                    {clicked && (
                        <div className="absolute py-8 px-6 bg-slate-100 rounded-[30px] text-xs -left-2 top-2 z-0">
                            <div className="flex py-2 pl-6 pr-4 flex-row  rounded-[30px] mb-4 bg-slate-500">
                                <input
                                    type="text"
                                    className=" focus:outline-none bg-inherit"
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="filter by name"
                                    value={search}
                                />
                                <button
                                    className="z-0"
                                    onClick={() => setSearch("")}
                                    onMouseEnter={() => setHoverSub(true)}
                                    onMouseLeave={() => setHoverSub(false)}
                                >
                                    <FontAwesomeIcon
                                        icon={faCircleMinus}
                                        size="lg"
                                        color={
                                            hoverSub
                                                ? "rgb(248 113 113)"
                                                : "#000"
                                        }
                                    />
                                </button>
                            </div>
                            <div className="flex flex-col gap-4">
                                {items
                                    .filter((i) => i.includes(search))
                                    .map((i) => (
                                        <button
                                            onClick={() => {
                                                setTemp(i);
                                                setSearch("");
                                                setClicked(false);
                                            }}
                                            className="flex bg-slate-300 w-fit px-4 py-2 rounded-[30px] hover:bg-slate-700 hover:text-white"
                                        >
                                            {i}
                                        </button>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* <div className="flex flex-row w-fit pr-4 pl-10 py-3 bg-white rounded-[30px] focus-within:outline focus-within:outline-4 focus-within:outline-[#FF5E53]">
                <input
                    type="text"
                    name=""
                    id=""
                    value={temp}
                    onChange={(e) => {
                        setTemp(e.target.value);
                    }}
                    className="border-none flex-grow-2 focus:outline-none selection:bg-yellow-500"
                />
                <button
                    onClick={() => {
                        setTemp("");
                    }}
                    className="px-4 py-1 bg-[#FF5E53]  rounded-[30px]"
                >
                    clear
                </button>
            </div>
            <div className="text-white">{temp}</div> */}
        </>
    );
};
