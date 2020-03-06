import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/CardActions";
import CardLabelModalContainer from "./LabelModalContainer";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateLabels: (labels, callback) => {
      dispatch(actions.onUpdateLabels(ownProps.cardId, labels, callback));
    }
  };
};

class CardLabelContainer extends React.Component {
  handleSubmit = (labels, callback) => {
    this.props.onUpdateCardTitle(labels, callback);
  };

  render() {
    return (
      <CardLabelModalContainer
        labels={this.props.labels}
        cardId={this.props.cardId}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(CardLabelContainer);
