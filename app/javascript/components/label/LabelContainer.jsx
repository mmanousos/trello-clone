import React from "react";
import EditLabelModalContainer from "./EditLabelModalContainer";

class LabelContainer extends React.Component {
  state = {
    editing: false
  };

  handleCloseClick = e => {
    this.setState({ editing: false });
  };

  handleOpenClick = e => {
    this.setState({ editing: true });
  };

  render() {
    const labels = this.props.labels.map(label => (
      <div className="member-container" key={label}>
        <div className={`${label} label colorblindable`}></div>
      </div>
    ));

    return (
      <li className="labels-section">
        <h3>Labels</h3>
        {labels}
        <div className="member-container" onClick={this.handleOpenClick}>
          <i className="plus-icon sm-icon"></i>
        </div>
        {this.state.editing ? (
          <EditLabelModalContainer
            activeLabels={this.props.labels}
            cardId={this.props.cardId}
            onCloseClick={this.handleCloseClick}
          />
        ) : (
          ""
        )}
      </li>
    );
  }
}

export default LabelContainer;
