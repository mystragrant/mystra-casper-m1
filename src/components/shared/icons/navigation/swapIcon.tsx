import { useColorMode } from "@chakra-ui/core";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { IconColors } from "../iconColors";

export const SwapIcon = ({
  customColor,
  customSize,
}: {
  customColor?: string;
  customSize?: number;
}) => {
  const color = useColorModeValue(IconColors.LIGHT, IconColors.DARK);

  return (
    <svg
      width={customSize ?? "18"}
      height={customSize ?? "18"}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1342_34966"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
      >
        <path d="M18 0H0V18H18V0Z" fill={customColor ?? color} />
      </mask>
      <g>
        <path
          d="M15.9805 4.39453H2.65234M1.5 13.6406H15.3477M12.1133 17.5078L15.9805 13.6406L12.1133 9.77344M5.88672 8.26172L2.01953 4.39453L5.88672 0.527344"
          stroke={customColor ?? color}
          strokeWidth="1.6"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
};
