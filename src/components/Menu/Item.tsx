import { FC, ReactNode, useState } from 'react';
import Icons, { IconType } from '../Icons';
import { Link, useLocation } from 'react-router-dom';

interface OwnProps {
  icon: IconType;
  title: string;
  to?: string;
  children?: ReactNode;
  onClick: () => void;
}

type Props = OwnProps;

const Item: FC<Props> = ({ children, icon, title, to = '#', onClick }) => {
  const Icon = Icons[icon];

  const { pathname } = useLocation();

  const isActive = to === pathname;

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const onItemClick = () => {
    if (children) {
      setIsSubMenuOpen(!isSubMenuOpen);
    } else {
      onClick();
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
