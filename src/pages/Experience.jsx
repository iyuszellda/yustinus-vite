import React from "react";
import Case from "../components/Case";
export default function Experience() {
    return (
        <Case>
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                <h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
                    My Experience.
                </h4>
                <p className="text-sm tracking-wide leading-relaxed text-gray-700 dark:text-neutral-300">
                    I master several programming languages, such as PHP, VB.NET,
                    and ReactJS, and I am currently learning Vite React with
                    Tailwind CSS, Master SQL Server, MySQL, PostgreSQL, SQLite,
                    and Oracle databases. I also have experience in making REST
                    APIs, ETL, and DevOps deployment on CentOS servers via
                    GitLab/GitHub. Have been experienced since the end of 2014
                    until now.
                </p>

                <div className="grid mb-8 border border-gray-200 rounded-lg shadow-xs dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Very easy this was to integrate
                            </h3>
                            <p className="my-4">
                                If you care for your time, I hands down would go
                                with this."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img
                                className="rounded-full w-9 h-9"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                                alt="profile picture"
                            ></img>{" "}
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>Bonnie Green</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 ">
                                    Developer at Open AI
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Solid foundation for any project
                            </h3>
                            <p className="my-4">
                                Designing with Figma components that can be
                                easily translated to the utility classes of
                                Tailwind CSS is a huge timesaver!"
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img
                                className="rounded-full w-9 h-9"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                                alt="profile picture"
                            ></img>{" "}
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>Roberta Casas</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Lead designer at Dropbox
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Mindblowing workflow
                            </h3>
                            <p className="my-4">
                                Aesthetically, the well designed components are
                                beautiful and will undoubtedly level up your
                                next application."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img
                                className="rounded-full w-9 h-9"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                                alt="profile picture"
                            ></img>
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>Jese Leos</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    Software Engineer at Facebook
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Efficient Collaborating
                            </h3>
                            <p className="my-4">
                                You have many examples that can be used to
                                create a fast prototype for your team."
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center ">
                            <img
                                className="rounded-full w-9 h-9"
                                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                                alt="profile picture"
                            ></img>
                            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                                <div>Joseph McFall</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                    CTO at Google
                                </div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </Case>
    );
}
