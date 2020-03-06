import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/CardActions";
import EditLabelModal from "./EditLabelModal";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateLabels: (labels, callback) => {
      dispatch(actions.updateLabels(ownProps.cardId, labels, callback));
    }
  };
};

const ALL_LABELS = ["green", "yellow", "orange", "red", "purple", "blue"];

class EditableLabelModalContainer extends React.Component {
  state = {
    labels: []
  };

  componentDidMount = () => {
    const labels = ALL_LABELS.map(label => {
      return {
        color: label,
        active: this.props.activeLabels.includes(label)
      };
    });
    this.setState({ labels: labels });
  };

  handleToggleLabel = toggledLabel => {
    const labels = this.state.labels.map(label => {
      if (label.color === toggledLabel) {
        label.active = !label.active;
        return label;
      }
      return label;
    });

    this.props.onUpdateLabels(labels, () => {
      this.setState({ labels: labels });
    });
  };

  handleSubmit = (title, callback) => {
    this.props.onUpdateCardTitle(title, callback);
  };

  render() {
    return (
      <EditLabelModal
        labels={this.state.labels}
        cardId={this.props.cardId}
        onCloseClick={this.props.onCloseClick}
        onToggleClick={this.handleToggleLabel}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(EditableLabelModalContainer);
