import Image from "next/image";
// import profile from "lib/images/profile.png";

export default ({ obj }) => {
    return (
        <div id="right-main" className="flex flex-row px-10 pt-10">
            {/* LEFT */}
            <div id="right-main-left" className="flex flex-col w-3/4">
                <div
                    id="name"
                    className="font-poppins text-3xl font-semibold text-white flex"
                >
                    {obj.name}
                </div>
                <div
                    id="title"
                    className="font-poppins flex font-extrabold text-xl outline-none bg-inherit text-[#FF5E53]"
                >
                    {obj.title}
                </div>
                <div
                    id="about"
                    className="font-zona text-2xs text-[#CAC2C2] max-w-[90%]"
                >
                    {obj.about}
                </div>
            </div>
            {/* RIGHT */}
            <div
                id="right-main-right"
                className="flex w-full flex-col items-center justify-center"
            >
                <div className="border-red-500 align-middle flex">
                    {/* <Image
                        src={profile}
                        width={0}
                        height={0}
                        className=""
                        id="profile"
                        alt="profile image"
                    ></Image> */}
                </div>
            </div>
        </div>
    );
};
