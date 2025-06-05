import Case from "../components/Case";
import ListExperience from "../components/ListExperience";

export default function Experience() {
    return (
        <Case>
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                <h4 className="hidden md:block lg:block text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
                    My experience.
                </h4>
                <ListExperience />
            </div>
        </Case>
    );
}
