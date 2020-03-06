import React from "react";
import LabelModalContainer from "./LabelModalContainer";

class LabelContainer extends React.Component {
  state = {
    editing: true
  };

  render() {
    const labels = this.props.labels.map(label => (
      <div className="member-container" key={label}>
        <div className={`${label} label colorblindable`}></div>
      </div>
    ));

    return (
      <div>
        {labels}
        {this.state.editing ? (
          <LabelModalContainer
            activeLabels={this.props.labels}
            cardId={this.props.cardId}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default LabelContainer;
