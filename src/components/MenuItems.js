import { Stack } from '@twilio-paste/stack';
// import MenuItem from './MenuItem';
import { MenuItemContainer } from '../containers/MenuItemContainer';

export const MenuItems = ({ items }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      {items.map((item) => (
        // <MenuItem {...item} key={item.uuid} />
        <MenuItemContainer {...item} key={item.uuid} />
      ))}
    </Stack>
  );
};
