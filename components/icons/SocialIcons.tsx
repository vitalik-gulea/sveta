import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function TelegramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.05 3.58 2.9 10.58c-1.24.49-1.23 1.17-.23 1.47l4.65 1.45 10.77-6.79c.51-.31.98-.14.6.2l-8.72 7.87-.34 4.9c.49 0 .71-.22.98-.49l2.36-2.3 4.91 3.63c.9.5 1.55.24 1.77-.84l3.21-15.12c.33-1.32-.5-1.92-1.47-1.48Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 1.5A3 3 0 0 0 4.5 7.5v9a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-9Zm9.75 1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 8.25A3.75 3.75 0 1 1 8.25 12 3.75 3.75 0 0 1 12 8.25Zm0 1.5A2.25 2.25 0 1 0 14.25 12 2.25 2.25 0 0 0 12 9.75Z"
        fill="currentColor"
      />
    </svg>
  );
}
