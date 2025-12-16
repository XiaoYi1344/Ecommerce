"use client";

import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

type UseDotButtonType = {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
};

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      onButtonClick?.(emblaApi);
    },
    [emblaApi, onButtonClick]
  );

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const raf = requestAnimationFrame(() => {
      onInit(emblaApi);
      onSelect(emblaApi);
    });

    emblaApi.on("select", onSelect).on("reInit", onInit);

    return () => {
      cancelAnimationFrame(raf);
      emblaApi.off("select", onSelect).off("reInit", onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

type PropType = ComponentPropsWithRef<"button"> & {
  selected?: boolean;
};

/* --- DOT UI: đẹp như Swiper Pro --- */
export const DotButton: React.FC<PropType> = ({ selected, ...props }) => {
  return (
    <button
      type="button"
      {...props}
      style={{
        width: selected ? 26 : 12,
        height: 12,
        borderRadius: 999,
        background: selected ? "#3bb77e" : "#e4e4e4",
        opacity: selected ? 1 : 0.6,
        border: "none",
        cursor: "pointer",
        transition: "all 0.25s ease",
      }}
    />
  );
};
