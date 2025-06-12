import Case from "@/components/Case";
export default function Home() {
    // This is the Home component, which serves as the main landing page of the website.
    // It provides an introduction to the website and the developer behind it.
    return (
        <Case>
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-neutral-900 dark:text-neutral-200">
                    Hi fellow IT Enthusiasts, my name is Yustinus Margiyuna, and
                    thanks for visiting my website.
                </h1>
                <p className="text-sm tracking-wide leading-relaxed text-gray-700 dark:text-neutral-300 my-4">
                    I master several programming languages, such as PHP, .NET,
                    and ReactJS, and I am currently learning Vite React with
                    Tailwind CSS, Master SQL Server, MySQL, PostgreSQL, SQLite,
                    and Oracle databases. I also have experience in making REST
                    APIs, ETL, and DevOps deployment on CentOS servers via
                    GitLab/GitHub. Have been experienced since the end of 2014
                    until now. I have worked on various projects, including web
                    development, database management, and API integration.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-800 dark:text-neutral-300">
                    I'm a web developer passionate about building modern,
                    responsive, and user-friendly websites. I enjoy working with
                    the latest technologies to create clean and efficient
                    solutions for the web.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-800 dark:text-neutral-300">
                    Here, I showcase my skills and projects. My goal is to
                    deliver a seamless browsing experience with a focus on clean
                    design and easy navigation.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-800 dark:text-neutral-300">
                    I believe in the power of collaboration and continuous
                    learning. Whether you're a fellow developer, designer, or
                    just someone interested in web development, I'm always open
                    to new ideas and opportunities.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-800 dark:text-neutral-300">
                    I am always eager to learn new tools and frameworks, and I
                    enjoy collaborating with others to solve challenging
                    problems. Whether it's front-end or back-end development, I
                    strive to write clean, maintainable code and follow best
                    practices.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-800 dark:text-neutral-300">
                    In my free time, I love exploring new technologies, and
                    staying updated with the latest trends in web development. I
                    also enjoy playing games both mobile and PC, watching
                    movies, and spending time with friends and family.
                </p>
                <p className="text-sm tracking-wide leading-relaxed text-gray-800 dark:text-neutral-300">
                    Thank you for visiting my website! I hope you find it
                    informative and enjoyable. If you have any questions or
                    feedback, feel free to reach out to me through the contact
                    page. I'm always happy to connect with fellow developers and
                    enthusiasts.
                </p>
            </div>
        </Case>
    );
}
