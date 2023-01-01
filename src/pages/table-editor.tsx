import Head from "next/head";
import React from "react";
import TableEditor from "@src/components/TableEditor";

const title = "Edit the table layout";

export default function TableEditorPage() {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Editing the table layout" />
      </Head>
      <TableEditor />
    </div>
  );
}
