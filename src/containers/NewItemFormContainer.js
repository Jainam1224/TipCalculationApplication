import { connect } from 'react-redux';
import NewItemForm from '../components/NewItemForm';
import { addNewItem } from '../store/items/actions';
// import { bindActionCreators } from 'redux';

// In this we are taking things from the redux store mapping them to the props that is useDispatch.
// const mapDispatchToProps = (dispatch) => {
//   // This approach is to use the dispatch we get from redux i.e. useDispatch()
//   //   return {
//   //     onSubmit: (name, price) => dispatch(addNewItem(name, price))
//   //   };

//   // Another approach is using bindActionCreators and pass the prop function and dispatch
//   return bindActionCreators(
//     {
//       onSubmit: (name, price) => addNewItem(name, price)
//     },
//     dispatch
//   );
// };

// redux connect have mapDispatchToProps which automatically returns and dispatches the function
// with the new syntax as:
const mapDispatchToProps = {
  onSubmit: (name, price) => addNewItem(name, price)
};

export const NewItemFormContainer = connect(
  null,
  mapDispatchToProps
)(NewItemForm);
