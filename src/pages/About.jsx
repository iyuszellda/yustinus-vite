import React from "react";
import Case from "../components/Case";
export default function About() {
    return (
        <Case>
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                <h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
                    About this website.
                </h4>
                <p className="text-sm tracking-wide leading-relaxed text-gray-700 dark:text-neutral-300">
                    This website is using Vite + React with Tailwind CSS. The
                    Navbar and the Footer uses the Roboto font, while the main
                    sections use Poppins.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-700 dark:text-neutral-300">
                    In eu auctor arcu, in viverra purus. Quisque placerat ex ut
                    ultrices fringilla. Etiam et nisl odio. Morbi erat velit,
                    rutrum eu leo ut, posuere consectetur massa. Aenean justo
                    urna, interdum vel velit varius, placerat dictum elit.
                    Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Aliquam at tortor interdum, venenatis lorem et,
                    condimentum quam. Proin pharetra fermentum neque vel tempor.
                    Aenean a eros semper augue auctor pellentesque laoreet eu
                    augue. Suspendisse a scelerisque metus, et hendrerit purus.
                    Mauris dictum massa eget venenatis elementum. Ut fringilla
                    mauris ut rutrum interdum. Ut pretium augue quis nulla
                    tristique, at dignissim dolor interdum. Vestibulum
                    tincidunt, urna sed eleifend tincidunt, purus lectus
                    tristique tortor, eu pharetra diam ipsum eu lacus. Duis
                    euismod maximus elit non lobortis. Maecenas et odio vel
                    libero placerat hendrerit.
                </p>
            </div>
        </Case>
    );
}
