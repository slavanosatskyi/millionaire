import { MenuItemStatus } from 'types';

function getMenuItemStatus(currentQuestionIndex: number, menuItemIndex: number) {
  if (currentQuestionIndex === menuItemIndex) {
    return MenuItemStatus.ACTIVE;
  }

  if (currentQuestionIndex > menuItemIndex) {
    return MenuItemStatus.ANSWERED;
  }

  return MenuItemStatus.NOT_ANSWERED;
}

export default getMenuItemStatus;
