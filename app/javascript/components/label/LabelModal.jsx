import React from "react";
import ClickableLabel from "./ClickableLabel";

const LabelModal = ({ activeLabels }) => {
  const ALL_LABELS = ["green", "yellow", "orange", "red", "purple", "blue"];

  const labelIsActive = label => {
    return activeLabels.includes(label);
  };

  const labels = ALL_LABELS.map(label => {
    return (
      <ClickableLabel label={label} active={labelIsActive(label)} key={label} />
    );
  });
  console.log(labels);
  return (
    <div className="popover labels">
      <div id="add-options-labels-dropdown">
        <header>
          <span>Labels</span>
          <a href="#" className="icon-sm icon-close"></a>
        </header>
        <div className="content">
          <input
            className="dropdown-input"
            placeholder="Search labels..."
            type="text"
          />
          <div className="labels-search-results">
            <ul className="label-list">{labels}</ul>
            <ul className="light-list">
              <li className="not-implemented">Create a new label</li>
              <hr />
              <li className="toggleColorblind">
                Enable color blind friendly mode.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabelModal;
