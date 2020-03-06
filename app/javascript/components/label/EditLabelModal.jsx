import React from "react";
import ClickableLabel from "./ClickableLabel";

const LabelModal = ({ labels, cardId, onCloseClick, onToggleClick }) => {
  const clickableLabels = labels.map(label => {
    return (
      <ClickableLabel
        label={label.color}
        active={label.active}
        key={label.color}
        onToggleClick={onToggleClick}
      />
    );
  });

  const handleCloseClick = e => {
    e.preventDefault();
    onCloseClick();
  };

  return (
    <div className="popover labels">
      <div id="add-options-labels-dropdown">
        <header>
          <span>Labels</span>
          <a
            href={`/cards/${cardId}`}
            className="icon-sm icon-close"
            onClick={handleCloseClick}
          ></a>
        </header>
        <div className="content">
          <input
            className="dropdown-input"
            placeholder="Search labels..."
            type="text"
          />
          <div className="labels-search-results">
            <ul className="label-list">{clickableLabels}</ul>
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
