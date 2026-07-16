"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MotionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const compactViewport = window.matchMedia(
      "(max-width: 840px)",
    );

    const applyMotionMode = () => {
      root.classList.toggle(
        "lite-motion",
        reducedMotion.matches || compactViewport.matches,
      );
    };

    applyMotionMode();

    reducedMotion.addEventListener("change", applyMotionMode);
    compactViewport.addEventListener("change", applyMotionMode);

    let observer: IntersectionObserver | null = null;

    /*
     * 等待新页面内容完成挂载，再查找 data-reveal 元素。
     */
    const frame = window.requestAnimationFrame(() => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]"),
      );

      if (
        reducedMotion.matches ||
        !("IntersectionObserver" in window)
      ) {
        elements.forEach((element) => {
          element.classList.add("is-visible");
        });

        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.08,
        },
      );

      elements.forEach((element) => {
        observer?.observe(element);
      });
    });

    const onVisibilityChange = () => {
      root.classList.toggle(
        "motion-paused",
        document.hidden,
      );
    };

    document.addEventListener(
      "visibilitychange",
      onVisibilityChange,
    );

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();

      reducedMotion.removeEventListener(
        "change",
        applyMotionMode,
      );

      compactViewport.removeEventListener(
        "change",
        applyMotionMode,
      );

      document.removeEventListener(
        "visibilitychange",
        onVisibilityChange,
      );
    };
  }, [pathname]);

  return null;
}