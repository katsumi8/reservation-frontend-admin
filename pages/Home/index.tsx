import Head from "next/head";
import React from "react";
import CurrentTables from "./Contents";

const title = "Check reservations";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Editing the table layout" />
      </Head>
      <CurrentTables />
    </div>
  );
}
