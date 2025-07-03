import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useNavScrollTriggers(refMap, setIsActive) {
  useEffect(() => {
    const entries = Object.entries(refMap);

    const triggers = entries.map(([id, ref], index) => {
      const backId = index > 0 ? entries[index - 1][0] : id;

      return gsap.fromTo(
        ref.current,
        {},
        {
          scrollTrigger: {
            trigger: ref.current,
            start: "top center",
            toggleActions: "play none none reverse",
            onEnter: () => setIsActive(id),
            onLeaveBack: () => setIsActive(backId),
          },
        }
      );
    });

    return () => {
      triggers.forEach(trigger => trigger.scrollTrigger?.kill());
    };
  }, [refMap, setIsActive]);
}
