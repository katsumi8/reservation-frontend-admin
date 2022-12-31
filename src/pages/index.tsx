import TableLayout from "@src/components/TableLayout";
import Head from "next/head";
import React from "react";

const title = "Check reservations";

function Home() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Editing the table layout" />
      </Head>
      <TableLayout />
    </div>
  );
}

export default Home;
