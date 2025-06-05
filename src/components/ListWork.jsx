export default function ListWork() {
    const works = [
        {
            company: "ILCS",
            role: "Fullstack Engineer, DevOps",
            duration: "Oct 2020 - Present",
            description: `Developed and maintained CI/CD pipelines, automated testing, and deployment processes. Also built and maintained Pelindo's applications, ensuring high availability and performance across the product suite.`,
            applications: [
                {
                    name: "Dashboard IPC TPK",
                    link: "https://dashboard.ipctpk.co.id",
                },
                {
                    name: "CPC TPK",
                    link: "https://cpctpk.ilcs.co.id",
                },
                {
                    name: "MDM",
                    link: "https://mdm.pelindo.co.id/",
                },
                {
                    name: "P-Connect",
                    link: "https://p-connect.pelindo.co.id",
                },
                {
                    name: "Cartos Patimban",
                },
                {
                    name: "Dashboard Gate Pass",
                },
                {
                    name: "SRKO - Operation Indonesia Port",
                },
                {
                    name: "SIMON TKBM",
                    link: "https://simtkbm.pelindo.co.id",
                },
                {
                    name: "Single Truck Identification Data Priok",
                    link: "http://stid.priokport.co.id",
                },
                {
                    name: "Single Truck Identification Data Nasional",
                    link: "https://stid.pelindo.co.id",
                },
            ],
        },
        {
            company: "Matahari Department Store",
            role: "Frontend Engineer",
            duration: "Jul 2019 - May 2020",
            description: `Built and maintained reusable components for Matahari's frontend applications, ensuring high performance and accessibility standards. Collaborated with cross-functional teams to implement best practices in web development.`,
            applications: [
                {
                    name: "Matahari E-commerce",
                    link: "https://matahari.com",
                },
            ],
        },
        {
            company: "Nawadata Solutions",
            role: "Fullstack Developer",
            duration: "Jan 2017 - Jul 2019",
            description: `Developed and maintained critical backend services such as ETLs and databases. Worked closely with cross-functional teams, including developers and product managers, to deliver solutions for major banks in Indonesia.`,
            applications: [
                {
                    name: "BI Debts/Liabilities and Receivables CIMB Niaga",
                },
                {
                    name: "Backend CRM Commonwealth",
                },
            ],
        },
        {
            company: "Indocode Technology",
            role: "Fullstack Developer",
            duration: "Nov 2014 - Jan 2017",
            description: `Built and maintained critical backend applications, ensuring smooth deployment and operation. Collaborated with cross-functional teams, including developers, designers, and product managers, to deliver high-quality software solutions for cellular companies in Indonesia.`,
            applications: [
                {
                    name: "BBT - Bintan",
                },
                {
                    name: "Telin - Telkomsel",
                },
                {
                    name: "Nokia SDP - Tri Indonesia",
                },
                {
                    name: "CMP - Telkomsel",
                },
            ],
        },
        {
            company: "Freelance",
            role: "Fullstack Developer",
            duration: "Jul 2020 - Sep 2020",
            description: `Delivered responsive websites and web apps for various clients across e-commerce, blogs, and portfolios.`,
            applications: [
                {
                    name: "Surat Online Bareskrim",
                },
            ],
        },
    ];

    return (
        <>
            {works.map((work, index) => (
                <div
                    key={index}
                    className="rounded-2xl p-4 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-all duration-300 hover:shadow-md mb-6"
                >
                    <h3 className="text-neutral-800 dark:text-neutral-200 text-xl font-semibold">
                        {work.company}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-400">
                        {work.role} · {work.duration}
                    </p>
                    <p className="text-sm mt-2 text-neutral-800 dark:text-neutral-300">
                        {work.description}
                    </p>
                    {work.applications && (
                        <ul className="text-xs mt-2 list-disc list-inside text-blue-700 dark:text-sky-200">
                            {work.applications.map((app, i) => (
                                <li key={i}>
                                    <a
                                        href={app.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        {app.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    );
}
