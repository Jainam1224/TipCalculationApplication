import { connect } from "react-redux";
import { Summary } from "../components/Summary";
import {
  selectSubtotal,
  selectTipAmount,
  selectTotal,
} from "../store/items/selectors";

const mapStateToProps = (state) => {
  // const items = state.items;
  //   let subtotal = 0;
  //   for (const item of items) {
  //     subtotal += item.quantity * item.price;
  //   }

  // const subtotal = items.reduce(
  //   (sum, item) => sum + item.quantity * item.price,
  //   0
  // );

  // const tipAmount = (subtotal * state.tipPercentage) / 100;

  // const total = subtotal + tipAmount;

  // Using createSelector logic =>
  const subtotal = selectSubtotal(state);
  const tipAmount = selectTipAmount(state);
  const total = selectTotal(state);

  return {
    subtotal,
    tipAmount,
    total,
  };
};

export const SummaryContainer = connect(mapStateToProps)(Summary);
