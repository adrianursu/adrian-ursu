import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
