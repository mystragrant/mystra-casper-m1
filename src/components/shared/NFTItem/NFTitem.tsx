import { CheckCircleIcon, LockIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { useNavigate } from "react-router";
import { useThemeProvider } from "../../../providers/Theme/useThemeProvider";
import { chainIdToName } from "../../../utils/parser";
import { MultichainIcon } from "../display/MultichainIcon/multichainIcon";
import { TransferNFTModal } from "./TransferNFTModal/transferNFTModal";

const CreatorName = ({
  name,
  verified = false,
}: {
  name: string;
  verified?: boolean;
}) => {
  const borderColor = useColorModeValue(
    "borderColor.light",
    "borderColor.dark",
  );
  const background = useColorModeValue("background.light", "background.dark");
  const textPrimary = useColorModeValue(
    "textPrimary.light",
    "textPrimary.dark",
  );
  const textSecondary = useColorModeValue(
    "textSecondary.light",
    "textSecondary.dark",
  );

  return (
    <Flex gap="6px" align="center">
      <Box
        color={textSecondary}
        fontSize="12px"
        fontWeight="300"
        fontFamily="Inter"
      >
        {name}
      </Box>
      {verified && (
        <CheckCircleIcon boxSize="12px" color="brand.500" bg="transparent" />
      )}
    </Flex>
  );
};

export const NFTItem = ({
  loadNfts,
  data,
  hide,
  unhide,
  price = null,
  deleteNFT,
}: {
  loadNfts: () => any;
  data: any;
  hide: (id: string, chain: string, contract_hash: string) => void;
  unhide: (id: string, chain: string, contract_hash: string) => void;
  deleteNFT: (id: string, chain: string, contract_hash: string) => void;
  price?: number | null;
}) => {
  const borderColor = useColorModeValue(
    "borderColor.light",
    "borderColor.dark",
  );
  const background = useColorModeValue(
    "inputBackground.light",
    "inputBackground.dark",
  );
  const textPrimary = useColorModeValue(
    "textPrimary.light",
    "textPrimary.dark",
  );
  const textSecondary = useColorModeValue(
    "textSecondary.light",
    "textSecondary.dark",
  );

  const {
    backgroundTertiary,
    backgroundSecondary,
    backgroundPrimary,
    borderPrimary,
  } = useThemeProvider();

  const navigate = useNavigate();

  const {
    isOpen: isTransferOpen,
    onOpen: onTransferOpen,
    onClose: onTransferClose,
  } = useDisclosure();

  return (
    <Flex
      flexDir="column"
      role="group"
      gap="14px"
      padding="12px"
      cursor="default"
      boxShadow="0px 3.06767px 3.06767px rgba(0, 0, 0, 0.1)"
      border="1px solid"
      borderColor={borderColor}
      bg={background}
      _hover={{ bg: backgroundTertiary }}
      position="relative"
      borderRadius="8px"
    >
      <Flex pos="absolute" top="8px" left="8px" zIndex="1">
        <MultichainIcon white size={28} chain={data.chain_id} />
      </Flex>

      <Flex
        align="center"
        borderRadius="4px"
        w="100%"
        pb="100%"
        justify="center"
        overflow="hidden"
        pos="relative"
        onClick={() =>
          navigate(
            `/marketplace/${chainIdToName(data.chain_id)}/${
              data.contract_hash
            }/${data.token_id}`,
          )
        }
      >
        <Flex
          top="0"
          pos="absolute"
          _after={{ display: "block", content: '""', paddingBottom: "100%" }}
          cursor="pointer"
          pb="100%"
          transition=" 0.2s"
          left="0"
          right="0"
          bottom="0"
          margin="auto"
          padding="20px"
          bgImage={data.asset}
          bgPos="center"
          bgSize="cover"
          _groupHover={{ transform: "scale(1.1)" }}
        ></Flex>
      </Flex>
      <Flex
        flexDir="column"
        justify="space-between"
        role="group"
        padding="0px 0px 0px 0px"
      >
        <Flex flexDir="column">
          <Flex justify="space-between" maxW="100px" overflow="hidden">
            <CreatorName
              name={
                data.collection_name ??
                data.contract_hash.slice(0, 6) +
                  "..." +
                  data.contract_hash.slice(-6)
              }
            />
          </Flex>

          <Box
            lineHeight="20px"
            fontFamily="Inter"
            fontSize="14px"
            color={textPrimary}
          >
            {data.name}
          </Box>
        </Flex>

        {price == null && (
          <Grid
            alignItems="center"
            cursor="pointer"
            templateColumns="1fr auto"
            opacity="0"
            pos="absolute"
            w="calc(100% + 2px)"
            border="1px solid"
            borderColor={borderPrimary}
            borderTop="none"
            borderBottomRadius="8px"
            bottom="-1px"
            left="-1px"
            _groupHover={{ opacity: "1" }}
          >
            <Flex
              gap="10px"
              align="center"
              px="12px"
              fontFamily="Inter"
              cursor="default"
              _hover={{ color: textSecondary }}
              fontSize="14px"
              h="32px"
              color="white"
              borderBottomLeftRadius="8px"
              bg="#262626"
              onClick={() => {
                if (data.hidden == false) {
                } else {
                }
              }}
            >
              <Flex fontSize="12px" align="center" gap="6px">
                Place a listing <LockIcon />
              </Flex>
            </Flex>
            <Flex
              gap="10px"
              borderBottomRightRadius="8px"
              align="center"
              cursor="pointer"
              justify="center"
              fontFamily=""
              color="white"
              bg="#262626"
            >
              <Menu placement="top" offset={[-64, 12]}>
                <MenuButton display="flex" gap="2px" px="18px" h="32px">
                  <Flex flexDir="column" gap="2px">
                    <Box bg="white" borderRadius="50%" boxSize="3px" />
                    <Box bg="white" borderRadius="50%" boxSize="3px" />
                    <Box bg="white" borderRadius="50%" boxSize="3px" />
                  </Flex>
                </MenuButton>
                <MenuList
                  fontFamily="Inter"
                  fontSize="14px"
                  bg={backgroundSecondary}
                  borderColor={borderPrimary}
                  zIndex="1000"
                  right="0"
                  p={0}
                  minW="0px"
                  w="170px"
                >
                  <MenuItem onClick={onTransferOpen} icon={<LockIcon />}>
                    Transfer
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            {isTransferOpen && data.name != "" && (
              <TransferNFTModal
                name={data.name}
                type={data.contract_type}
                address={data.contract_hash}
                network={data.chain_id}
                tokenId={data.token_id.slice(0, 6)}
                collection={data.collection_name}
                image={data.asset}
                onClose={onTransferClose}
                onOpen={onTransferOpen}
                isOpen={isTransferOpen}
                onTransfer={() =>
                  deleteNFT(data.token_id, data.chain_id, data.contract_hash)
                }
              />
            )}
          </Grid>
        )}
        {price && (
          <Flex
            justify="space-between"
            align="flex-end"
            mt="14px"
            display={price != -1 ? "flex" : "none"}
          >
            <Flex align="center" gap="10px" fontFamily="Inter" fontSize="12px">
              <Image src="/assets/icons/clock.svg" /> 20m ago
            </Flex>
            <Flex flexDir="column" align="flex-end">
              <Box fontSize="12px" fontFamily="Inter" color={textSecondary}>
                Price
              </Box>
              <Flex align="center" gap="8px" justify="flex-end">
                <MultichainIcon size={20} chain={data.chain_id} />
                <Box
                  justifySelf="flex-end"
                  fontFamily="Space Mono"
                  fontSize="14px"
                >
                  {price}
                </Box>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
