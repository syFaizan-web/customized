"use client";

import { useState, type ImgHTMLAttributes } from "react";

type ImageWithFallbackProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string;
};

export function ImageWithFallback({
  fallbackLabel = "Faiz Studio",
  alt = "",
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${props.className ?? ""} flex items-center justify-center bg-[#ead8c5] text-center text-sm font-medium text-[#705548]`}
      >
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      {...props}
      alt={alt}
      onError={(event) => {
        setHasError(true);
        onError?.(event);
      }}
    />
  );
}
