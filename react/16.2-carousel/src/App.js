import React, { useState } from "react";
import TreeView from "./stam/TreeView";

const data = {
  lorem: {
    ipsum: "dolor sit",
    amet: {
      consectetur: "adipiscing",
      elit: [
        "duis",
        "vitae",
        {
          semper: "orci",
        },
        {
          est: "sed ornare",
        },
        "etiam",
        ["laoreet", "tincidunt"],
        ["vestibulum", "ante"],
      ],
    },
    ipsum: "primis",
  },
};

function App() {
  return (
    <>
      <TreeView data={data} name="data" />
    </>
  );
}

export default App;
