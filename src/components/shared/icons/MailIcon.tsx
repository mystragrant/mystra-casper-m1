import { useColorModeValue } from "@chakra-ui/react";
import { IconColors } from "./iconColors";

export const MailIcon = ({ customColor }: { customColor?: string }) => {
  const color = useColorModeValue(IconColors.LIGHT, IconColors.DARK);

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 6C1 4.89543 1.89543 4 3 4H23C24.1046 4 25 4.89543 25 6V19C25 20.1046 24.1046 21 23 21H3C1.89543 21 1 20.1046 1 19V6Z"
        stroke={customColor ?? color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M2.42131 5.30287C1.91709 4.84067 2.24409 4 2.9281 4H23.0719C23.7559 4 24.0829 4.84067 23.5787 5.30287L15.0272 13.1418C13.8802 14.1931 12.1198 14.1931 10.9728 13.1418L2.42131 5.30287Z"
        stroke={customColor ?? color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
};
