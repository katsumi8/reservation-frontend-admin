import TableLayoutWithReservations from "@src/components/TableLayoutWithReservations";
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
      <TableLayoutWithReservations />
    </div>
  );
}

export default Home;
