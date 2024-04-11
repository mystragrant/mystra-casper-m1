import { Box, ChakraProvider } from "@chakra-ui/react";
import "@elastic/eui/dist/eui_theme_dark.css";
import "@elastic/eui/dist/eui_theme_light.css";
import { AppWrapper } from "./AppWrapper";
import { CasperWalletProvider } from "./providers/CasperWalletProvider/casperWalletProvider";
import { MultiWalletProvider } from "./providers/MultiWalletProvider/multiWalletProvider";
import { ThemeProvider } from "./providers/Theme/useThemeProvider";
import { UserProvider } from "./providers/User/userProvider";
import { theme } from "./theme/theme";
import "./theme/toastify/scss/toastify.scss";

import {
  CasperDashConnector,
  CasperProvider,
  CasperSignerConnector,
  createClient,
} from "@casperdash/usewallet";
import "@fontsource/plus-jakarta-sans";
import { ChainFilterProvider } from "./providers/ChainFilter/useChainFilter";
import { DashboardProvider } from "./providers/Dashboard/useDashboard";
import { TxQueueProvider } from "./providers/useTxQueue/useTxQueue";

const client = createClient({
  connectors: [new CasperSignerConnector(), new CasperDashConnector()],
  autoConnect: false,
});

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <ThemeProvider>
        <ChainFilterProvider>
          <CasperProvider client={client}>
            <CasperWalletProvider>
              <MultiWalletProvider>
                <DashboardProvider>
                  <UserProvider>
                    <TxQueueProvider>
                      <Box display={{ base: "none", md: "block" }}>
                        <AppWrapper />
                      </Box>
                    </TxQueueProvider>
                  </UserProvider>
                </DashboardProvider>
              </MultiWalletProvider>
            </CasperWalletProvider>
          </CasperProvider>
        </ChainFilterProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}
