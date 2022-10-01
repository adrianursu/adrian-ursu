import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import GoogleAnalytics from "@bradgarropy/next-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics measurementId="G-5RX7LM6MXL" />
      <ThemeProvider enableSystem attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
