import Home from "./pages/home/home";
import "./app.css";
import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
