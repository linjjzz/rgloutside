import React from "react";
import ReactDOM from "react-dom";
import ShowcaseLayout from "./ShowcaseLayout";
import GridLayout from "./GridLayout";

class ExampleLayout extends React.Component {
  render() {
    return (
      <div>
        <GridLayout />
        <hr />
        <hr />
        <hr />
        <ShowcaseLayout />
      </div>
    );
  }
}

const contentDiv = document.getElementById("root");
const gridProps = window.gridProps || {};
ReactDOM.render(React.createElement(ExampleLayout, gridProps), contentDiv);
