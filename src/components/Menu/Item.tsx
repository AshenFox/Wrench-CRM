import { FC, ReactNode, useState, MouseEventHandler } from 'react';
import Icons, { IconType } from '../Icons';
import { Link, useLocation } from 'react-router-dom';
import { useActions } from '../../store/hooks';

interface OwnProps {
  icon: IconType;
  title: string;
  to?: string;
  children?: ReactNode;
}

type Props = OwnProps;

const Item: FC<Props> = ({ children, icon, title, to = '#' }) => {
  const Icon = Icons[icon];

  const { set_is_menu_open } = useActions();

  const { pathname } = useLocation();

  const isActive = to === pathname;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const onItemClick: MouseEventHandler<HTMLDivElement> = (e) => {
    if (children) {
      setIsSubMenuOpen(!isSubMenuOpen);
    } else {
      set_is_menu_open(false);
    }
  };

  return (
    <div className={`menu__item ${isSubMenuOpen ? 'is-open' : ''}`}>
      <Link to={to}>
        <div
          className={`menu__item-inner ${isActive ? 'active' : ''}`}
          onClick={onItemClick}
        >
          <div className='menu__item-icon'>
            <Icon />
          </div>
          <span className='menu__item-title'>{title}</span>
          {children && (
            <div className='menu__sub-arrow'>
              <Icons.triangle />
            </div>
          )}
        </div>
      </Link>
      <div className='menu__sub'>{children}</div>
    </div>
  );
};

export default Item;
