import React from "react";

const RefreshIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.062 13A8 8 0 0 1 18.2 6.944M19.938 11A8 8 0 0 1 6 17.292M9 17H6v.292M18.2 4v2.944m0 0V7h-3M6 20v-2.708"
      className="stroke-[#213547] dark:stroke-white"
    />
  </svg>
);
export default RefreshIcon;
