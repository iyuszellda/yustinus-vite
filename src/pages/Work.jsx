import React from "react";
import Case from "../components/Case";
import ListWork from "../components/ListWork";
export default function Gallery() {
    return (
        <Case>
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                <h4 className="hidden md:block lg:block text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
                    All my Work.
                </h4>
                <ListWork />
            </div>
        </Case>
    );
}
