import { onMounted, onBeforeUnmount, watch } from "vue";

export function useHeightRef(source, target, breakpoint) {
  let resizeObserver = null;

  const updateHeight = (entries) => {
    const windowWidth = window.innerWidth;

    if (!target.value) return;

    if (windowWidth < breakpoint) {
      target.value.style.height = "auto";
      return;
    }

    const newHeight = entries?.[0]?.contentRect?.height;
    if (newHeight) {
      target.value.style.height = newHeight + "px";
    }
  };

  onMounted(() => {
    if (!source.value || !target.value) return;

    // Первичное выставление (без observer)
    updateHeight([{ contentRect: source.value.getBoundingClientRect() }]);

    resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(source.value);
  });

  onBeforeUnmount(() => {
    if (resizeObserver) resizeObserver.disconnect();
  });
}
