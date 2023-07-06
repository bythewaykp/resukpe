"use client";
// import { useState } from "react";
import { v4 as uuid } from "uuid";
// import Image from "next/image";
// // import profile from "lib/images/profile.png";

// export default ({ obj, setObj }) => {
//     const [clicked, setClicked] = useState(false);
//     return (
//         <div>
//             <button
//                 className="bg-white p-4"
//                 onClick={() => setClicked(!clicked)}
//             >
//                 +
//             </button>
//             {clicked && <div>hi</div>}
//         </div>
//     );
// };

import { useState } from "react";
// import profile from "lib/images/profile.png";
// import gh from "lib/images/github.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleChevronDown,
    faCircleMinus,
    faLink,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const items = [
    "behance",
    "dribble",
    "email",
    "facebook",
    "github",
    "instagram",
    "linkedin",
    "twitter",
    "whatsapp",
    "youtube",
];
export default ({ obj, setObj }) => {
    let flipClick = () => {
        setClicked(!clicked);
    };
    const [click, setClick] = useState(false);
    const [temp, setTemp] = useState("");
    const [search, setSearch] = useState("");
    const [clicked, setClicked] = useState(false);
    const [hoverMain, setHoverMain] = useState(false);
    const [hoverSub, setHoverSub] = useState(false);
    const [isURL, setIsURL] = useState(false);
    const [url, setUrl] = useState("");
    const [isFile, setIsFile] = useState(false);
    const [file, setFile] = useState("");

    return (
        <>
            <button
                className="bg-white rounded-[30px] w-8 h-8 flex justify-center items-center mt-4 mb-8"
                onClick={() => setClick(!click)}
            >
                {click ? "*" : "+"}
            </button>
            {click && (
                <div className="group flex flex-row bg-[#708090] w-fit p-4 focus-within:outline focus-within:outline-4 focus-within:outline-red-500 rounded-[30px] items-center gap-4">
                    {/* URL  */}
                    <div
                        className="relative invisible group-hover:visible cursor-pointer"
                        onMouseEnter={() => setIsURL(true)}
                        onMouseLeave={() => setIsURL(false)}
                    >
                        <div className="bg-black rounded-full h-6 w-6 flex items-center justify-center">
                            <button>
                                <FontAwesomeIcon
                                    icon={faLink}
                                    color={isURL ? "#ff9" : "#708090"}
                                    size="2xs"
                                />
                            </button>
                        </div>
                        {isURL && (
                            <div className="flex flex-col absolute -top-2 left-2 ">
                                <div className="w-20 h-20"></div>
                                <div className="flex py-2 pl-10 pr-4 flex-row  rounded-[30px] mb-4 bg-slate-500">
                                    <input
                                        type="text"
                                        className=" focus:outline-none bg-inherit selection:bg-[#ff9] "
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder="Enter url"
                                        value={url}
                                    />
                                    <button
                                        className="z-0 flex justify-center"
                                        onClick={() => setUrl("")}
                                        onMouseEnter={() => setHoverSub(true)}
                                        onMouseLeave={() => setHoverSub(false)}
                                    >
                                        <FontAwesomeIcon
                                            icon={faCircleMinus}
                                            size="1x"
                                            color={
                                                hoverSub
                                                    ? "rgb(248 113 113)"
                                                    : "#000"
                                            }
                                        />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* ICON  */}
                    <div
                        className="cursor-pointer"
                        onMouseEnter={() => setIsFile(true)}
                        onMouseLeave={() => setIsFile(false)}
                    >
                        <div className="w-5 flex justify-center">
                            <Image
                                className="w-full h-auto"
                                // className={`w-full h-auto ${file && "clip-icon"}`}
                                src={
                                    file == ""
                                        ? items.includes(temp)
                                            ? `/images/${temp}.svg`
                                            : `/images/defaulticon.svg`
                                        : file
                                }
                                width={0}
                                height={0}
                                alt="icon"
                            />
                        </div>
                        {isFile && (
                            <div className="absolute">
                                <div className="h-10 w-20"></div>
                                <div className=" flex flex-row bg-slate-400 p-6 gap-10 rounded-[30px]">
                                    <div className="w-20 flex justify-center">
                                        <Image
                                            className="w-full h-auto"
                                            src={
                                                file == ""
                                                    ? items.includes(temp)
                                                        ? `/images/${temp}.svg`
                                                        : `/images/defaulticon.svg`
                                                    : file
                                            }
                                            width={0}
                                            height={0}
                                            alt="icon"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-6 items-center justify-center">
                                        <form>
                                            <label
                                                for="fileUpload"
                                                className="px-4 py-2 bg-slate-600 cursor-pointer rounded-[30px]"
                                            >
                                                Change icon
                                            </label>
                                            <input
                                                id="fileUpload"
                                                className="hidden"
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) =>
                                                    e.target.files &&
                                                    setFile(
                                                        URL.createObjectURL(
                                                            e.target.files[0]
                                                        )
                                                    )
                                                }
                                            />
                                        </form>
                                        {file && (
                                            <button
                                                className="py-2 px-4 bg-slate-600 w-fit rounded-[30px]"
                                                onClick={() => setFile("")}
                                            >
                                                remove
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* INPUT  */}
                    <input
                        type="text"
                        className="focus:outline-none bg-inherit pl-4 selection:bg-[#ff9] caret-slate-100 w-28"
                        value={temp}
                        onChange={(e) => setTemp(e.target.value)}
                        placeholder="platform"
                    />

                    {/* DROPDOWN  */}
                    <div
                        // className="relative"
                        onMouseEnter={flipClick}
                        onMouseLeave={flipClick}
                        className="invisible group-hover:visible"
                    >
                        <button className="z-10 flex justify-center">
                            <FontAwesomeIcon
                                icon={faCircleChevronDown}
                                size="lg"
                                rotation={clicked ? 180 : undefined}
                                color={clicked ? "#ff9" : "#000"}
                            />
                        </button>

                        {clicked && (
                            <div className="absolute">
                                <div className="w-20 h-2"></div>
                                <div className=" py-8 px-6 bg-slate-100 rounded-[30px] text-xs max-w-full">
                                    <div className="flex py-2 pl-6 pr-4 flex-row rounded-[30px] mb-4 bg-slate-500">
                                        <input
                                            type="text"
                                            className=" focus:outline-none bg-inherit selection:bg-[#ff9] grow"
                                            onChange={(e) =>
                                                setSearch(e.target.value)
                                            }
                                            placeholder="filter by name"
                                            value={search}
                                        />
                                        <button
                                            className="z-0"
                                            onClick={() => setSearch("")}
                                            onMouseEnter={() =>
                                                setHoverSub(true)
                                            }
                                            onMouseLeave={() =>
                                                setHoverSub(false)
                                            }
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
                                    <div className="grid grid-cols-4 gap-x-4 gap-y-4">
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
                            </div>
                        )}
                    </div>
                    {/* CLEAR  */}
                    <button
                        className="flex justify-center invisible group-hover:visible"
                        onClick={(e) => {
                            setTemp("");
                        }}
                        onMouseEnter={() => setHoverMain(true)}
                        onMouseLeave={() => setHoverMain(false)}
                    >
                        <FontAwesomeIcon
                            icon={faCircleMinus}
                            color={hoverMain ? "rgb(248 113 113)" : "#000"}
                            size="lg"
                        />
                    </button>
                    <button
                        onClick={() => {
                            let newLinks = structuredClone(obj.links);
                            newLinks.push({
                                id: uuid(),
                                provider: temp,
                                url: url,
                            });
                            setObj({ ...obj, links: newLinks });
                            setClick(false)
                            setTemp("")
                        }}
                    >
                        done
                    </button>
                </div>
            )}
        </>
    );
};
