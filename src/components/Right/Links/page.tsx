import Image from "next/image";
import Link from "next/link";
// import github from "lib/images/github.png";
import linkedin from "lib/images/linkedin.png";

export default ({ obj }) => {
    return (
        <div
            id="links"
            className="grid grid-cols-4 bg-[#1d2528] px-10 py-4 gap-y-2"
        >
            {obj.links.map((i) => {
                return (
                    <>
                        <div className="link flex flex-row gap-2 items-center">
                            <Image
                                // src="/../../../lib/images/profile.png"
                                src={`/images/${i.provider}.svg`}
                                width={20}
                                height={20}
                                alt="github icon"
                            />
                            <Link href={i.url} className="text-white text-3xs">
                                {i.provider}
                            </Link>
                        </div>
                    </>
                );
            })}
        </div>
    );
};
