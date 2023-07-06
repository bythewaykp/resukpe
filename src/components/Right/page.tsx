import Links from "@/components/Right/Links/page";
import Info from "@/components/Right/Info/page";
import Image from "next/image";
import Link from "next/link";

export default ({ obj }) => {
    return (
        <div
            id="right"
            className="bg-[#2B343D] w-1/2 flex flex-col rounded-[30px] cursor-default select-none"
        >
            <Info obj={obj} />
            <Links obj={obj} />
        </div>
    );
};
