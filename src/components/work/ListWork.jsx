import { Link } from "react-router-dom";
import WorksApi from "../../lib/json/works.json";
export default function ListWork() {
    return (
        <>
            {WorksApi.map((work, index) => (
                <div
                    key={index}
                    className="hover:text-teal-800 dark:hover:text-teal-300 focus-visible:text-teal-300 group/link text-base leading-tight text-neutral-800 dark:text-neutral-200 rounded-2xl p-4 hover:bg-slate-300 dark:hover:bg-slate-800/50 transition-all duration-300 hover:shadow-lg group relative lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
                >
                    <h3 className="font-semibold">{work.company}</h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-400">
                        {work.role} · {work.duration}
                    </p>
                    <p className="text-sm mt-2 text-neutral-800 dark:text-neutral-300">
                        {work.description}
                    </p>
                    {work.applications && (
                        <ul className="font-semibold text-xs mt-2 list-disc list-inside">
                            {work.applications.map((app, i) => (
                                <li
                                    key={i}
                                    className="mb-2 text-teal-950 dark:text-teal-300 hover:text-teal-700 dark:hover:text-teal-400 transition-colors duration-200"
                                    aria-label={`Application: ${app.name}`}
                                >
                                    {app.link && (
                                        <a
                                            href={app.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${app.name} (opens in a new tab)`}
                                        >
                                            {app.name}
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
                                        </a>
                                    )}
                                    {!app.link && <span>{app.name}</span>}
                                    <Link
                                        to={`/work/gallery/${work.id}/${app.id}`}
                                        className="font-semibold text-sky-700 dark:text-sky-300 ml-2 items-center rounded-full bg-teal-500/10 px-3 py-1 text-xs leading-5"
                                    >
                                        See Gallery
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    );
}
