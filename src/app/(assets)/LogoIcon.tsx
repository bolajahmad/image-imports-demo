import { SVGProps } from "react";

const SVGLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={props.width || "46"}
      height={props.height || "34"}
      viewBox="0 0 46 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M46.0006 33.621C45.637 33.621 33.7873 33.526 33.2752 33.621L28.4832 25.0441L14.7324 0.379089H26.0035L46.0006 33.621Z"
        className="fill-others-fill"
      />
      <path
        d="M13.8395 16.9865C19.2991 16.9865 23.7249 13.2688 23.7249 8.6828C23.7249 4.09679 19.2991 0.379089 13.8395 0.379089H0V16.9865H13.8395Z"
        className="fill-others-fill"
      />
      <path
        d="M13.8395 33.5939C19.2991 33.5939 23.7249 29.8762 23.7249 25.2902C23.7249 20.7042 19.2991 16.9865 13.8395 16.9865H0V33.5939H13.8395Z"
        className="fill-others-fill"
      />
      <path
        d="M12.6315 29.2845C14.8069 29.2845 16.5703 27.505 16.5703 25.3099C16.5703 23.1148 14.8069 21.3353 12.6315 21.3353H7.11719V29.2845H12.6315Z"
        className="fill-white dark:fill-[#042858]"
      />
      <path
        d="M12.6315 13.3871C14.8069 13.3871 16.5703 11.6077 16.5703 9.41256C16.5703 7.21746 14.8069 5.43799 12.6315 5.43799H7.11719V13.3871H12.6315Z"
        className="fill-white dark:fill-[#042858]"
      />
    </svg>
  );
};
export default SVGLogo;
