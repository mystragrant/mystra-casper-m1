import { useColorModeValue } from "@chakra-ui/react";
import { IconColors } from "./iconColors";

export const GlobeIcon = ({ customColor }: { customColor?: string }) => {
  const color = useColorModeValue(IconColors.LIGHT, IconColors.DARK);

  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.50065 17.7601C13.8729 17.7601 17.4173 14.2157 17.4173 9.84342C17.4173 5.47117 13.8729 1.92676 9.50065 1.92676C5.1284 1.92676 1.58398 5.47117 1.58398 9.84342C1.58398 14.2157 5.1284 17.7601 9.50065 17.7601Z"
        stroke={color ?? customColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.58398 9.84375H17.4173"
        stroke={color ?? customColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.50065 1.92676C11.4808 4.09462 12.6062 6.90795 12.6673 9.84342C12.6062 12.7789 11.4808 15.5922 9.50065 17.7601C7.52047 15.5922 6.39514 12.7789 6.33398 9.84342C6.39514 6.90795 7.52047 4.09462 9.50065 1.92676V1.92676Z"
        stroke={color ?? customColor}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
