import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      layouts: { lg: [] }
    };
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onNewLayout = this.onNewLayout.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  onLayoutChange(layout, layouts) {
    console.log("onLayoutChanged", layout, layouts);
    this.setState({
      layouts: { lg: layout }
    });
  }

  onNewLayout() {
    this.setState({
      layouts: { lg: generateLayout() }
    });
  }

  onDrop(layouts, layoutItem, _event) {
    console.log("Dropped element", layoutItem, layouts);
    this.setState({
      layouts: { lg: [...layouts] }
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.onNewLayout}>Generate New Layout</button>
        <div
          className="droppable-element"
          style={{
            background: "red",
            width: 100,
            height: 100
          }}
          draggable={true}
          unselectable="on"
          onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
        >
          Droppable Element (Drag me!)
        </div>
        <ResponsiveReactGridLayout
          layouts={this.state.layouts}
          onLayoutChange={this.onLayoutChange}
          isDroppable
          onDrop={this.onDrop}
        >
          {this.state.layouts.lg.map(function (l, i) {
            return <div key={i}>{<span className="text">{i}</span>}</div>;
          })}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

ShowcaseLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
};

ShowcaseLayout.defaultProps = {
  className: "layout",
  onLayoutChange: function () {}
};

function generateLayout() {
  return _.map(_.range(0, 1), function (item, i) {
    var y = Math.ceil(Math.random() * 1) + 1;
    return {
      x: (_.random(0, 1) * 2) % 12,
      y: Math.floor(i / 1) * y,
      w: 1,
      h: 1,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  });
}
