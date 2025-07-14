import { ref, watch, Ref } from "vue";

interface ObserverOptions {
  root: Ref<Element | null>;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(target: Ref<Element | null>, callback: () => void, options: ObserverOptions) {
  const observer = ref<IntersectionObserver | null>(null);

  const stop = () => {
    if (observer.value) {
      observer.value.disconnect();
    }
  };

  // watch both the target and the root container for changes
  watch(
    [target, options.root],
    ([newTarget, newRoot]) => {
      stop();

      if (newTarget && newRoot) {
        const observerOptions = { ...options, root: newRoot };
        observer.value = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            callback();
          }
        }, observerOptions);
        observer.value.observe(newTarget);
      }
    },
    { flush: "post" }
  );

  return { stop };
}
