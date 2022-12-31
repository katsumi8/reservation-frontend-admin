import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../../styles/global.css";

const client = new ApolloClient({
  // uri: "http://localhost:4000/%E3%81%A7%E3%82%B5%E3%83%BC%E3%83%90%E3%83%BC%E3%82%92%E8%B5%B7%E5%8B%95%E4%B8%AD%E3%83%BB%E3%83%BB%E3%83%BB",
  uri: "https://reservation-system.onrender.com/",
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
