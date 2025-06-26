import { useEffect, useState } from "react";

export default function useIsAtBottom(offset = 100, debounceDelay = 150) {
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        let timeout = null;

        const handleScroll = () => {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                const atBottom =
                    window.innerHeight + window.scrollY >=
                    document.body.offsetHeight - offset;
                setIsAtBottom(atBottom);
            }, debounceDelay);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (timeout) clearTimeout(timeout);
        };
    }, [offset, debounceDelay]);

    return isAtBottom;
}
