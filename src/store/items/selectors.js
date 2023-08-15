import { createSelector } from "reselect";

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

// If the data of selectItems is same as prevoius data then it won't compute the new value and won't update the state for other components.
export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPercentage) => (subtotal * tipPercentage) / 100
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);

// For calculating the individual item total price
export const selectItem = (state, props) => {
  return state.items.find((item) => item.uuid === props.uuid);
};

export const selectItemTotal = createSelector(
  [selectItem],
  (item) => item.price * item.quantity
);
