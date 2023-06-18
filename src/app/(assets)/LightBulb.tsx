import { SVGProps } from "react";

const SVGLightBulb = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.2 20V20.8C15.4122 20.8 15.6157 20.7157 15.7657 20.5657C15.9157 20.4157 16 20.2122 16 20H15.2ZM8.8 20H8C8 20.2122 8.08429 20.4157 8.23431 20.5657C8.38434 20.7157 8.58783 20.8 8.8 20.8V20ZM9.6 24H14.4V22.4H9.6V24ZM5.728 10.24L5.712 10.352L7.296 10.576L7.3136 10.464L5.728 10.24ZM12 4.8C10.4748 4.79974 9.00069 5.34982 7.84849 6.34917C6.69629 7.34853 5.94336 8.73007 5.728 10.24L7.3136 10.464C7.47499 9.33577 8.03635 8.30362 8.89753 7.55707C9.7587 6.81052 10.8603 6.39969 12 6.4V4.8ZM18.272 10.24C18.0566 8.73007 17.3037 7.34853 16.1515 6.34917C14.9993 5.34982 13.5252 4.79974 12 4.8V6.4C13.1396 6.40002 14.241 6.81097 15.1021 7.55746C15.9632 8.30395 16.5263 9.33591 16.688 10.464L18.272 10.24ZM18.288 10.352L18.272 10.24L16.688 10.464L16.7024 10.576L18.288 10.352ZM17.024 15.1344C18.032 13.832 18.5408 12.136 18.288 10.352L16.704 10.5776C16.7956 11.2068 16.7593 11.848 16.597 12.4627C16.4348 13.0775 16.1501 13.6532 15.76 14.1552L17.024 15.1344ZM14.4 17.44V20H16V17.4416H14.4V17.44ZM15.2 19.2H8.8V20.8H15.2V19.2ZM9.6 20V17.4416H8V20H9.6ZM5.712 10.352C5.59037 11.1932 5.63963 12.0503 5.85681 12.872C6.07399 13.6937 6.45464 14.4632 6.976 15.1344L8.2416 14.1552C7.85148 13.6532 7.56518 13.0775 7.40296 12.4627C7.24075 11.848 7.20437 11.2052 7.296 10.576L5.712 10.352ZM9.6 17.44C9.6 16.1232 8.8992 15.0032 8.24 14.1536L6.976 15.1344C7.5888 15.9264 8 16.6816 8 17.44H9.6ZM15.76 14.1536C15.0992 15.0048 14.4 16.1232 14.4 17.44H16C16 16.6816 16.4112 15.9264 17.024 15.1344L15.76 14.1536ZM11.2 0V3.2H12.8V0H11.2ZM0 12.8H3.2V11.2H0V12.8ZM20.8 12.8H24V11.2H20.8V12.8ZM5.3664 5.8336L2.9664 3.4336L1.8336 4.5664L4.2336 6.9664L5.3664 5.8336ZM19.7664 6.9664L22.1664 4.5664L21.0336 3.4336L18.6336 5.8336L19.7664 6.9664Z"
        className="dark:fill-black fill-[#EEEEEE]"
      />
    </svg>
  );
};

export default SVGLightBulb;
