import React from "react";
import Case from "../components/Case";
export default function Gallery() {
    return (
        <Case>
            <div className="w-[90%] max-w-3xl mx-auto mt-10 flex flex-col gap-8">
                <h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
                    All my Work.
                </h4>
                <p className="text-sm tracking-wide leading-relaxed text-gray-700 dark:text-neutral-300">
                    In cursus purus libero, vel dapibus arcu accumsan a. Quisque
                    quis lectus sed ex rhoncus porttitor. Integer ornare
                    suscipit nibh sit amet consequat. Pellentesque tincidunt
                    diam tellus, quis tincidunt turpis vestibulum nec. Nulla
                    fermentum, justo ac blandit rutrum, massa sem tempus tellus,
                    ac vulputate libero nulla in leo. Ut consectetur sapien id
                    odio volutpat vulputate. Ut at eleifend neque. Vestibulum
                    non rhoncus urna, et condimentum nisl. Mauris sit amet
                    ullamcorper est. Integer hendrerit venenatis posuere. Nam
                    tempus ac ipsum sed finibus. Suspendisse potenti. Aliquam eu
                    nisl neque. Mauris ut dolor metus.
                </p>
            </div>
        </Case>
    );
}
