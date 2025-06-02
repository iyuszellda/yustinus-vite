import React from "react";
import Case from "../components/Case";
export default function Home() {
    return (
        <Case>
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-neutral-900 dark:text-neutral-200">
                    Hi, my name is Yustinus Margiyuna, i'm a web developer, and
                    welcome to my website.
                </h1>
                <p className="text-sm tracking-wide leading-relaxed text-gray-700 dark:text-neutral-300">
                    I'm building this website that uses a JavaScript library for
                    interfaces.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-700 dark:text-neutral-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Tes git push and deploy
                    on vercel.
                </p>
            </div>
        </Case>
    );
}
