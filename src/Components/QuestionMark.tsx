import React from "react";

const QuestionMark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      // fill={props.color}
      fillRule="evenodd"
      d="M9.112 7.822C9.448 6.837 10.555 6 12 6c1.787 0 3 1.24 3 2.5S13.787 11 12 11a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-1.092c2.203-.408 4-2.137 4-4.408C17 5.893 14.632 4 12 4 9.821 4 7.867 5.272 7.219 7.178a1 1 0 0 0 1.893.644ZM12 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      clipRule="evenodd"
      className="fill-[#213547] dark:fill-white"
    />
  </svg>
);
export default QuestionMark;
