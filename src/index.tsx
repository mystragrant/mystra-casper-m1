import { ColorModeScript } from "@chakra-ui/react";
import "@fontsource/inter";
import "@fontsource/inter/700.css"; // Specify weight
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { theme } from "./theme/theme";

import "@fontsource/space-mono";
import {
  CategoryScale,
  Chart,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import "./App.css";
import "./i18n";

Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </React.StrictMode>,
);
