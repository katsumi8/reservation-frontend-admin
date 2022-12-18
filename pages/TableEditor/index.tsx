import Head from "next/head";
import React from "react";
import Header from "../../components/Header";
import Grid from "./Grid";

const title = "Edit the table layout";

export default function TableEditor() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Editing the table layout" />
      </Head>
      <Header
        rightBtnText={"Save"}
        rightBtnLink={"/Home"}
        leftBtnLink={"/Home"}
        leftBtnText="Cancel"
        pageTitle="Table Editing"
      />
      <Grid />
    </div>
  );
}
