import Head from "next/head";
import React from "react";
import Grid from "./Grid";

const title = "Edit the table layout";

export default function TableEditor() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Editing the table layout" />
      </Head>
      {/* <AllHeader title={title}> */}
      <Grid />
    </div>
  );
}
