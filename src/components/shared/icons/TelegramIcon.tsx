import { useColorMode } from "@chakra-ui/core";
import { Icon, useColorModeValue } from "@chakra-ui/react";
import { IconColors } from "./iconColors";

export const TelegramIcon = ({ customColor }: { customColor?: string }) => {
  const color = useColorModeValue(IconColors.LIGHT, IconColors.DARK);

  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_46_7198)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM9.3225 6.64426C8.44712 7.00836 6.69759 7.76196 4.0739 8.90506C3.64786 9.07448 3.42468 9.24022 3.40436 9.40229C3.37002 9.67619 3.71302 9.78404 4.18009 9.93091C4.24362 9.95088 4.30945 9.97158 4.37694 9.99352C4.83646 10.1429 5.4546 10.3176 5.77595 10.3246C6.06744 10.3309 6.39278 10.2107 6.75197 9.96407C9.20335 8.30931 10.4688 7.47292 10.5482 7.45489C10.6043 7.44217 10.6819 7.42618 10.7346 7.47295C10.7872 7.51972 10.782 7.6083 10.7764 7.63207C10.7425 7.77692 9.39606 9.02865 8.69931 9.67641C8.48211 9.87834 8.32804 10.0216 8.29654 10.0543C8.22599 10.1276 8.15408 10.1969 8.08497 10.2635C7.65806 10.6751 7.33792 10.9837 8.1027 11.4877C8.47021 11.7298 8.76429 11.9301 9.05768 12.1299C9.3781 12.3481 9.69769 12.5658 10.1112 12.8368C10.2165 12.9059 10.3172 12.9776 10.4152 13.0475C10.788 13.3133 11.123 13.5521 11.5369 13.514C11.7774 13.4919 12.0258 13.2658 12.152 12.5913C12.4501 10.9974 13.0362 7.54391 13.1716 6.12079C13.1835 5.99611 13.1686 5.83654 13.1566 5.76649C13.1446 5.69645 13.1196 5.59665 13.0285 5.52276C12.9207 5.43527 12.7542 5.41682 12.6798 5.41813C12.3413 5.42409 11.8219 5.60468 9.3225 6.64426Z"
          fill={customColor ?? color}
        />
      </g>
      <defs>
        <clipPath id="clip0_46_7198">
          <rect width="18" height="18" fill={customColor ?? color} />
        </clipPath>
      </defs>
    </svg>
  );
};