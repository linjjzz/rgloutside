import React, { useState } from "react";

import { Responsive, WidthProvider } from "react-grid-layout";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const GridLayout = () => {
  const [layouts, setLayouts] = useState({
    lg: []
  });

  const onLayoutChange = (newLayouts) => {
    console.log("onLayoutChange called", newLayouts);
    setLayouts({
      lg: newLayouts
    });
  };

  const onDrop = (params) => {
    console.log("onLayoutChange called", params);
    setLayouts({
      lg: params
    });
  };

  return (
    <div style={{ background: "white" }}>
      <div
        className="droppable-element"
        draggable={true}
        style={{
          background: "red",
          width: 100,
          height: 100
        }}
        unselectable="on"
        // this is a hack for firefox
        // Firefox requires some kind of initialization
        // which we can do by adding this attribute
        // @see https://bugzilla.mozilla.org/show_bug.cgi?id=568313
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        Draggable with lots of issues
      </div>
      <ResponsiveReactGridLayout
        layouts={layouts}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        isDroppable
      >
        {layouts.lg.map((layout) => {
          return (
            <div key={layout.i}>
              <div className="dragHandle">Move</div>
              {layout.i}
            </div>
          );
        })}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default GridLayout;
