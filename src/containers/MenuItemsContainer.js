import { connect } from 'react-redux';
import { MenuItems } from '../components/MenuItems';

// In this we are taking things from the redux store mapping them to the state that object expects in the connect.
const mapStateToProps = (state) => {
  return {
    items: state.items
  };
};

// Here we are passing the props to the MenuItems component.
export const MenuItemsContainer = connect(mapStateToProps)(MenuItems);
