import React from "react";
import { InfoItem, Wrapper } from "./lib";
import "./index.css";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <Wrapper>
      <InfoItem label="test1" info="test1" />
      <InfoItem label="test2" info="test2" />
      <InfoItem label="test3" info="test3" />
      <InfoItem label="test4" info="test4" />
      <InfoItem
        label="test5"
        info="test5-1"
        info2="test5-2"
        info3="test5-3"
        info4="test5-4"
        x2
      />
      <InfoItem
        label="test6"
        info="test6-1"
        info2="test6-2"
        info3="test6-3"
        info4="test6-4"
        x2
      />
      <InfoItem label="test7" info="test7" x3 />
      <InfoItem label="test8" info="test8" />
      <InfoItem
        label="test9"
        info="test9-1"
        info2="test9-2"
        info3="test9-3"
        info4="test9-4"
        x4
      />
    </Wrapper>
  );
};

const container = document.getElementById("root");
const app = createRoot(container);

app.render(<App tab="home" />);

// ReactDOM.render(<App />, document.getElementById("root"));
