import { Box, Grid, useColorModeValue } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components/global/Navbar/navbar";
import { TopMenu } from "./components/global/TopMenu/topMenu";
import { MyProfilePage } from "./pages/account/myprofile";
import { SettingsPage } from "./pages/account/settings";
import { VerificationPage } from "./pages/account/verification";
import { FiatGatewayPage } from "./pages/fiat-gateway/fiatGatewayPage";
import { ForgotPasswordPage } from "./pages/forgotPassword/forgotPasswordPage";
import { ProfilePage } from "./pages/profile/profilePage";
import { ResetPasswordPage } from "./pages/resetPassword/resetPasswordPage";
import { CalculatorPage } from "./pages/staking/calculatorPage";
import { MyDelgationsPage } from "./pages/staking/myDelegationsPage";
import { StakingPage } from "./pages/staking/stakingPage";
import { StakingRankingPage } from "./pages/staking/stakingRankingPage";
import { ToolsPage } from "./pages/tools/home";
import { useUserProvider } from "./providers/User/userProvider";

export const AppWrapper = () => {
  const appBg = useColorModeValue("background.light", "background.dark");
  const { isLogged } = useUserProvider();

  return (
    <Router>
      <Grid
        fontFamily="Sora, sans-serif"
        templateColumns="66px auto"
        zIndex="0"
      >
        <Box />
        <Navbar />
        <Box overflowY="auto" h="100vh" bg={appBg}>
          <>
            <TopMenu />
            <Box padding="0px 0px" maxW="2000px" margin="0 auto">
              <Routes>
                <Route path="/account/settings" element={<SettingsPage />} />
                <Route path="/account">
                  <Route path="verification" element={<VerificationPage />} />
                </Route>

                <Route path="/account/me" element={<MyProfilePage />}></Route>

                <Route path="/staking" element={<StakingPage />} />
                <Route
                  path="/staking/calculator"
                  element={<CalculatorPage />}
                />
                <Route
                  path="/staking/ranking"
                  element={<StakingRankingPage />}
                />
                <Route
                  path="/staking/delegations"
                  element={<MyDelgationsPage />}
                />

                <Route path="/tools" element={<ToolsPage />} />

                <Route path="/" element={<FiatGatewayPage />}></Route>
                <Route path="/fiat-gateway" element={<FiatGatewayPage />} />

                <Route path="/users/:id" element={<ProfilePage />} />

                <Route
                  path="/forgot-password"
                  element={<ForgotPasswordPage />}
                ></Route>
                <Route
                  path="/reset-password"
                  element={<ResetPasswordPage />}
                ></Route>
              </Routes>
            </Box>
          </>
        </Box>
      </Grid>
    </Router>
  );
};
