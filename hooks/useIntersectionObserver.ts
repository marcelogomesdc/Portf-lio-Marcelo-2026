import { useState, useEffect, useRef, RefObject } from 'react';

interface ObserverOptions {
    threshold?: number | number[];
    root?: Element | null;
    rootMargin?: string;
    triggerOnce?: boolean;
}

export const useIntersectionObserver = (options: ObserverOptions = {}): [RefObject<HTMLDivElement>, boolean] => {
    const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = true } = options;
    const ref = useRef<HTMLDivElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIntersecting(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else {
                    if (!triggerOnce) {
                       setIntersecting(false);
                    }
                }
            },
            { threshold, root, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [ref, threshold, root, rootMargin, triggerOnce]);

    return [ref, isIntersecting];
};
