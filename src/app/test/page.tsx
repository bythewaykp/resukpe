"use client";
import Add from "@/components/Left/Links/Add/page";
import data from "../data";

import Title from "@/components/Left/Links/Add/Provider/page";
import Item from "@/components/Left/Links/Items/Item/page";

import { useState } from "react";

export default () => {
    const [obj, setObj] = useState(data);
    return (
        <div className="w-1/2 items-start justify-start flex flex-col h-full gap-4">
            {/* <Add obj={obj} setObj={setObj} /> */}
            {/* <Title items={items} /> */}
            <div className="grid grid-cols-2 gap-4">
                <Item items={items} />
            </div>
            {/* <div className="absolute w-fit bg-purple-400">
                <input type="text" />
                <div className="grid grid-cols-4 ">
                    {items.map((i) => (
                        <button className="flex bg-slate-300 px-4 py-2 rounded-[30px] hover:bg-slate-700 hover:text-white">
                            {i}
                        </button>
                    ))}
                </div>
            </div> */}
        </div>
    );
};
// import Image from "next/image";
// import profile from "../../lib/images/profile.png";
// import { useState } from "react";
// export default function Home() {
//     const [data, setData] = useState({});
//     return (
//         <>
//             <div className="w-5/6 mx-auto bg-[#2b343d] p-16 rounded-[30px] flex flex-row">
//                 <div id="mainleft">
//                     <input
//                         type="text"
//                         value="Hridya V"
//                         placeholder="Enter Name"
//                         id="name"
//                         className="font-poppins font-extrabold text-3xl outline-none bg-inherit text-white"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Position"
//                         value="Software Engineer Intern"
//                         id="position"
//                         className="font-poppins flex font-extrabold text-xl outline-none bg-inherit text-[#FF5E53]"
//                     />
//                     {/* <textarea
//                     id="about"
//                     // type="text"
//                     placeholder="About you"
//                     className="font-zona bg-inherit outline-none text-[#CAC2C2]"
//                     value=" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
//                 /> */}
//                     <span
//                         id="about2"
//                         role="textbox"
//                         contentEditable
//                         className="w-2/3"
//                         // content="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
//                     >
//                         "is simply dummy text of the printing and typesetting
//                         industry. Lorem Ipsum has been the industry's standard
//                         dummy text ever since the 1500s, when an unknown printer
//                         took a galley of type and scrambled it to make a type
//                         specimen book. It has survived not only five centuries,
//                         but also the leap into electronic typesetting, remaining
//                         essentially unchanged. It was popularised in the 1960s
//                         with the release of Letraset sheets containing Lorem
//                         Ipsum passages, and more recently with desktop
//                         publishing software like Aldus PageMaker including
//                         versions of Lorem Ipsum"
//                     </span>
//                 </div>
//                 <div
//                     id="mainright"
//                     className="justify-end flex w-full items-center"
//                 >
//                     <div className="border-red-500">
//                         <Image
//                             src={profile}
//                             width={0}
//                             height={0}
//                             className=""
//                             id="profile"
//                             alt="profile image"
//                         ></Image>
//                     </div>
//                     {/* <svg height="100" width="100">
//                         <circle
//                             cx="50"
//                             cy="50"
//                             r="40"
//                             stroke="red"
//                             stroke-width="3"
//                             fill="red"
//                         />

//                     </svg> */}
//                 </div>
//             </div>
//         </>
//     );
// }
