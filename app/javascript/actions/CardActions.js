import apiClient from "../lib/ApiClient";
import * as types from "../constants/ActionTypes";

export function createCardSuccess(card) {
  return { type: types.CREATE_CARD_SUCCESS, card: card };
}

export function createCard(list_id, title, callback) {
  const payload = {
    list_id,
    card: {
      title
    }
  };

  return function(dispatch) {
    // NOTE: newCard=> {...} is a callback
    apiClient.createCard(payload, newCard => {
      dispatch(createCardSuccess(newCard));

      if (callback) {
        callback();
      }
    });
  };
}

export function fetchCardSuccess(card) {
  return { type: types.FETCH_CARD_SUCCESS, card };
}

export function fetchCard(id) {
  return function(dispatch) {
    apiClient.getCard(id, card => dispatch(fetchCardSuccess(card)));
  };
}

export function updateCardSuccess(card) {
  return { type: types.UPDATE_CARD_SUCCESS, card: card };
}

export function updateCardTitle(cardId, title, callback) {
  const payload = {
    card: {
      title
    }
  };

  return function(dispatch) {
    // NOTE: newCard => {...} is a callback
    apiClient.updateCard(cardId, payload, updatedCard => {
      dispatch(updateCardSuccess(updatedCard));

      if (callback) {
        callback();
      }
    });
  };
}

export function updateLabels(cardId, labels, callback) {
  const payload = {
    card: {
      labels
    }
  };

  return function(dispatch) {
    apiClient.updateCard(cardId, payload, updatedCard => {
      dispatch(updateCardSuccess(updatedCard));

      if (callback) {
        callback();
      }
    });
  };
}
