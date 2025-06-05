// import React from "react";
import { Link } from "react-router-dom";

export default function NavLink({ href, children, onLoading }) {
    return (
        <Link
            onClick={() => onLoading(children)}
            aria-label="home"
            className="inline-flex w-full md:w-auto px-4 py-2 dark:hover:text-neutral-300 duration-300 text-neutral-800 dark:text-neutral-200"
            to={href}
        >
            {children}
        </Link>
    );
}
