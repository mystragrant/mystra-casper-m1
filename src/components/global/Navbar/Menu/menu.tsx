import { Box, Flex } from "@chakra-ui/react";
import { useThemeProvider } from "../../../../providers/Theme/useThemeProvider";
import { useUserProvider } from "../../../../providers/User/userProvider";
import { WrenchIcon } from "../../../shared/icons/navigation/WrenchIcon";
import { FiatIcon } from "../../../shared/icons/navigation/fiatIcon";
import { UserIcon } from "../../../shared/icons/navigation/userIcon";
import { MenuItem } from "./MenuItem/menuItem";

const Separator = ({
  label,
  menuOpen,
}: {
  label: string;
  menuOpen: boolean;
}) => {
  const { borderPrimary, textSecondary } = useThemeProvider();

  return (
    <Flex
      pt="20px"
      align="center"
      justify={menuOpen ? "flex-start" : "center"}
      lineHeight={"100%"}
      pl={menuOpen ? "20px" : "0px"}
      borderTop="1px solid"
      transition="none"
      color={textSecondary}
      fontFamily="Space Mono"
      mt="10px"
      pb="14px"
      borderColor={borderPrimary}
      fontSize="9px"
      textTransform={"uppercase"}
    >
      {label}
    </Flex>
  );
};

export const Menu = ({ menuOpen }: { menuOpen: boolean }) => {
  const { isLogged } = useUserProvider();

  return (
    <Box mt="10px">
      <MenuItem
        disabled={false}
        href={"/tools"}
        menuOpen={menuOpen}
        content="Crypto&nbsp;Tools"
        icon={<WrenchIcon />}
      />

      {isLogged && <Separator label={"USER"} menuOpen={menuOpen} />}
      {isLogged && (
        <MenuItem
          disabled={false}
          content="Account"
          href="/account/verification"
          menuOpen={menuOpen}
          icon={<UserIcon />}
        />
      )}

      <MenuItem
        disabled={false}
        menuOpen={menuOpen}
        content="Buy&nbsp;Crypto"
        href={"/fiat-gateway"}
        icon={<FiatIcon />}
      />

      {/* <MenuItem
        disabled={true}
        menuOpen={menuOpen}
        content="Dex"
        icon={<SwapIcon />}
      /> */}

      {/* <MenuItem
        disabled={true}
        content="Help"
        menuOpen={menuOpen}
        href="/help"
        icon={<HelpIcon />}
      /> */}
    </Box>
  );
};
