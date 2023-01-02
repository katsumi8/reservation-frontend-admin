import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../../styles/global.css";

const client = new ApolloClient({
  uri: "https://reservation-system.onrender.com/",
  // uri: process.env.NEXT_PUBLIC_BACKEND_URL as string,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
