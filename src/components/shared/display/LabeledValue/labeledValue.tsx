import { Box, Flex } from "@chakra-ui/react";
import { useThemeProvider } from "../../../../providers/Theme/useThemeProvider";

export const LabeledValue = ({
  label,
  children,
  customColor,
}: {
  label: string;
  children: React.ReactNode;
  customColor?: string;
}) => {
  const { textSecondary, textPrimary } = useThemeProvider();

  return (
    <Flex fontFamily="Inter" fontSize="12px" gap="4px">
      <Box color={textSecondary}>{label}:</Box>
      <Box color={customColor ?? textPrimary}>{children}</Box>
    </Flex>
  );
};
