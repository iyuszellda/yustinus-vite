export default function ListExperience() {
    const experiences = [
        {
            company: "ILCS",
            title: "Senior Fullstack Engineer, Dev Ops",
            link: "https://www.ilcs.co.id",
            period: "2020 — Present",
            description:
                "Build and maintain Pelindo's applications, across the whole product. Work closely with cross-functional teams, including developers, customers, and product managers for best practices in web accessibility. My role also includes DevOps responsibilities, ensuring smooth deployment and operation of applications.",
            technologies: [
                "JavaScript",
                "Codeigniter",
                "React",
                "Php",
                "MySQL",
                "Postgres",
                "Oracle",
            ],
        },
        {
            company: "Matahari",
            title: "Frontend Engineer",
            link: "https://matahari.com/",
            period: "2019 — 2020",
            description:
                "Build and maintain components used to construct Matahari’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
            technologies: ["JavaScript", "React", "NextJs", "Jira"],
        },
        {
            company: "Nawadata",
            title: "Fullstack Developer",
            link: "https://nawadata.com/",
            period: "2017 — 2019",
            description:
                "Build and maintain critical backend services such as ETLs and databases. Work closely with cross-functional teams, including developers, and product managers. The customers are banks that operate in Indonesia such as CIMB Niaga, Commonwealth, DBS, HSBC, PaninBank, etc.",
            technologies: [
                ".Net",
                "Ext JS",
                "SQL Server",
                "SQL Server Integration Services",
            ],
        },
        {
            company: "Indocode Technology",
            title: "Fullstack Developer",
            link: "https://www.icode.co.id/",
            period: "2014 — 2017",
            description:
                "Build and maintain critical backend applications, Work closely with cross-functional teams, including developers, designers, and product managers.  My responsibilities include ensuring smooth deployment and operation of applications. The customers are cellular companies that operate in Indonesia such as 3, Telkomsel, XL, Smartfren, etc.",
            technologies: ["Php", "Javascript"],
        },
    ];

    return (
        <>
            {experiences.map((experience, index) => (
                <div
                    key={index}
                    className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
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
                            <div>
                                <a
                                    className="inline-flex items-baseline font-medium leading-tight text-gray-800 dark:text-neutral-300 hover:text-teal-700 dark:hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                    href={experience.link}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    aria-label={`${experience.title} at ${experience.company} (opens in a new tab)`}
                                >
                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                    <span>
                                        {experience.title}
                                        -&nbsp;
                                        <span className="inline-block">
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
                            </div>
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
