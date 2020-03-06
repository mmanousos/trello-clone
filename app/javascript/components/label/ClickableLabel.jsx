import React from "react";

const ClickableLabel = ({ label, active, onToggleClick }) => {
  return (
    <li onClick={() => onToggleClick(label)}>
      <div className={label + " colorblindable"} data-id="1">
        {active ? <i className="check-icon sm-icon"></i> : null}
      </div>
      <div className={"label-background" + label}></div>
      <div className="label-background-overlay"></div>
      <i className="edit-icon icon not-implemented"></i>
    </li>
  );
};

export default ClickableLabel;
