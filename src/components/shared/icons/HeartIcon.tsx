import { useColorMode } from "@chakra-ui/core";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { IconColors } from "./iconColors";

export const HeartIcon = ({
  customColor,
  on = false,
  customSize,
}: {
  customColor?: string;
  on?: boolean;
  customSize?: number;
}) => {
  const color = useColorModeValue(IconColors.LIGHT, IconColors.DARK);

  return (
    <svg
      width={customSize ?? "13"}
      height={customSize ?? "13"}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1451_17210)">
        <path
          d="M13.948 3.98568C13.6075 3.64502 13.2032 3.37478 12.7583 3.19041C12.3133 3.00603 11.8363 2.91113 11.3547 2.91113C10.873 2.91113 10.3961 3.00603 9.95111 3.19041C9.50614 3.37478 9.10186 3.64502 8.76135 3.98568L8.05468 4.69235L7.34802 3.98568C6.66022 3.29789 5.72737 2.91149 4.75468 2.91149C3.782 2.91149 2.84915 3.29789 2.16135 3.98568C1.47356 4.67348 1.08716 5.60633 1.08716 6.57902C1.08716 7.55171 1.47356 8.48456 2.16135 9.17235L2.86802 9.87902L8.05468 15.0657L13.2414 9.87902L13.948 9.17235C14.2887 8.83185 14.5589 8.42756 14.7433 7.98259C14.9277 7.53761 15.0226 7.06067 15.0226 6.57902C15.0226 6.09736 14.9277 5.62042 14.7433 5.17545C14.5589 4.73047 14.2887 4.32619 13.948 3.98568V3.98568Z"
          stroke={customColor ?? "white"}
          fill={on ? customColor ?? "white" : "none"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1451_17210">
          <rect
            width="16"
            height="16"
            fill={customColor ?? "red"}
            transform="translate(0.0546875 0.912109)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
