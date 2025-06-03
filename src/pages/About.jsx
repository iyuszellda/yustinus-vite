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
                    I'm building this website that uses a JavaScript library for
                    interfaces.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-800 dark:text-neutral-300">
                    This website is built with Vite + React and styled using
                    Tailwind CSS. The Navbar and Footer use the Roboto font,
                    while the main sections use Poppins. The design is
                    responsive, ensuring a seamless experience across devices.
                    The website features a clean and modern layout, with a focus
                    on usability and accessibility. It includes a dark mode
                    toggle for enhanced user experience in different lighting
                    conditions.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-800 dark:text-neutral-300">
                    The content is structured to provide clear information about
                    the website's purpose and my background. The use of semantic
                    HTML elements enhances accessibility and SEO, making it
                    easier for search engines to index the content. The website
                    is optimized for performance, ensuring fast loading times
                    and smooth interactions. Overall, this website serves as a
                    portfolio to showcase my skills and projects, while also
                    providing a pleasant browsing experience for visitors.
                </p>
            </div>
        </Case>
    );
}
