import usePuntos from "../Hooks/usePuntos";

const style = {
  width: "100%",
  height: "100%",
  enableBackground: "new 0 0 400 400",
};

const Hangman = () => {
  const { puntos, over, won } = usePuntos();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 400 400"
      style={style}
    >
      <g id="Layer_2">
        <path
          d="M68.9 333.8h118.7M128.2 333.8V66.2h153.6V104M177.9 66.2 126.1 118"
          className={`st0 dark:stroke-white fill-none stroke-[#213547] stroke-[9pt] ${
            over && !won && "stroke-red-600 dark:stroke-red-600"
          }`}
        />
        <path
          d="M281.8 155.9v69.4"
          style={{
            fill: "none",
            strokeWidth: `${puntos <= 1 ? 0 : 12}`,
            strokeMiterlimit: 10,
          }}
          className={` dark:stroke-white fill-none stroke-[#213547] ${
            over && !won && "stroke-red-600 dark:stroke-red-600"
          }`}
        />
        <path
          d="m281.8 222.6 36.5 36.5"
          style={{
            fill: "none",
            strokeWidth: `${puntos <= 5 ? 0 : 12}`,
            strokeMiterlimit: 10,
          }}
          className={` dark:stroke-white fill-none stroke-[#213547] ${
            over && !won && "stroke-red-600 dark:stroke-red-600"
          }`}
        />
        <path
          d="m245.3 259.1 36.5-36.5"
          style={{
            fill: "none",
            strokeWidth: `${puntos <= 4 ? 0 : 12}`,
            strokeMiterlimit: 10,
          }}
          className={` dark:stroke-white fill-none stroke-[#213547] ${
            over && !won && "stroke-red-600 dark:stroke-red-600"
          }`}
        />
        <path
          d="m281.8 165.3 45.5 20.5"
          style={{
            fill: "none",
            strokeWidth: `${puntos <= 3 ? 0 : 12}`,
            strokeMiterlimit: 10,
          }}
          className={` dark:stroke-white fill-none stroke-[#213547] ${
            over && !won && "stroke-red-600 dark:stroke-red-600"
          }`}
        />
        <path
          d="m235.3 185.8 46.5-20.5"
          style={{
            fill: "none",
            strokeWidth: `${puntos <= 2 ? 0 : 12}`,
            strokeMiterlimit: 10,
          }}
          className={` dark:stroke-white fill-none stroke-[#213547] ${
            over && !won && "stroke-red-600 dark:stroke-red-600"
          }`}
        />
        <circle
          cx={281.8}
          cy={130.7}
          r={26.7}
          style={{
            fill: "none",
            strokeWidth: `${puntos <= 0 ? 0 : 12}`,
            strokeMiterlimit: 10,
          }}
          className={`st0 dark:stroke-white fill-none stroke-[#213547] stroke-[9pt] ${
            over && !won && "stroke-red-600 dark:stroke-red-600"
          }`}
        />
      </g>
    </svg>
  );
};
export default Hangman;
