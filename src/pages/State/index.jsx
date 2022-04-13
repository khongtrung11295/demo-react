import React, { useState } from "react";
import { data } from "../../assests/data/mockData";

/**
 * hoisting, so sánh let / const /var. IFFE, Closure, HOCS, Promise, Async Await
 * sự khác nhau DOM, Virtual DOM, State, Props, useState, thuật toán diffin
 */
const State = (props) => {
  const [visibleDropdown, setVisibleDropdown] = useState(false);
  const [active, setActive] = useState(0);

  const handleClickItem = (index) => {
    props.handleClickItem(index);
    setActive(index);
    setVisibleDropdown(false)
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p onClick={() => setVisibleDropdown(!visibleDropdown)}>{data[active].title}</p>
      {visibleDropdown && (
        <>
          {data.map((item, index) => (
            <p key={index} onClick={() => handleClickItem(index)}>
              {item.title}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default State;
