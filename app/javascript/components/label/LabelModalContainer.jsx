import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/CardActions";
import LabelModal from "./LabelModal";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateLabels: (labels, callback) => {
      dispatch(actions.onUpdateLabels(ownProps.cardId, labels, callback));
    }
  };
};

class LabelModalContainer extends React.Component {
  // handleSubmit = (labels, callback) => {
  //   this.props.onUpdateCardTitle(labels, callback);
  // };

  render() {
    return <LabelModal activeLabels={this.props.activeLabels} />;
  }
}

export default connect(null, mapDispatchToProps)(LabelModalContainer);
