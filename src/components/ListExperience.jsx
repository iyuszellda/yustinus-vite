import ExperienceApi from "@/lib/json/experience.json";
export default function ListExperience() {
    return (
        <>
            {ExperienceApi.map((experience, index) => (
                <div
                    key={index}
                    className="group relative grid pb-1 transition-transform sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                >
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-300/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                    <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label={`${experience.period}`}
                        title={experience.period}
                    >
                        {experience.period}
                    </header>
                    <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                            <a
                                className="inline-flex items-baseline font-medium leading-tight text-neutral-800 dark:text-neutral-300 hover:text-teal-700 dark:hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href={experience.link}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                            >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                    {experience.title}-
                                    <span className="ml-2 inline-block">
                                        {experience.company}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </span>
                                </span>
                            </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-neutral-800 dark:text-neutral-300">
                            {experience.description}
                        </p>
                        <ul
                            className="mt-2 flex flex-wrap text-teal-900 dark:text-teal-300"
                            aria-label="Technologies used"
                        >
                            {experience.technologies.map((tech, idx) => (
                                <li key={idx} className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-800/10 px-3 py-1 text-xs font-medium leading-5">
                                        {tech}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
}
