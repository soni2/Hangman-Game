import * as React from "react";
const House = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className="stroke-[#213547] dark:stroke-white"
  >
    <path
      // className="stroke-black dark:stroke-white"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 22H2M2 11l8.126-6.5a3 3 0 0 1 3.748 0L22 11"
    />
    <path
      // className="stroke-black dark:stroke-white"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5"
    />
    <path
      // className="stroke-black dark:stroke-white"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 22V9.5M20 22V9.5"
    />
    <path
      // className="stroke-black dark:stroke-white"
      strokeWidth={1.5}
      d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
  </svg>
);
export default House;
