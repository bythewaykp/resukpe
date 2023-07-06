import "./globals.scss";

export const metadata = {
    title: "Resukpe",
    description: "An open project by bythewaykp",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div
                    className="titlemain font-outfit text-5xl font-extrabold mx-auto w-fit py-12 text-white select-none"
                    id="title"
                >
                    Resu
                    <span className="text-yellow-300">kp</span>
                    {/* <span className="text-[#FF5E53]"></span> */}
                    e.
                </div>
                {children}
            </body>
        </html>
    );
}
