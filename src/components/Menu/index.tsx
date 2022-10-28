import { FC } from 'react';
import { IconType } from '../Icons';
import Item from './Item';

interface OwnProps {
  isMenuOpen: boolean;
  onClick: () => void;
}

type Props = OwnProps;

interface RouteType {
  title: string;
  icon: IconType;
  to?: string;
  children?: RoutesMapType;
}

type RoutesMapType = RouteType[];

const routesMap: RoutesMapType = [
  {
    title: 'Главная',
    icon: 'house',
    to: '/',
  },
  { title: 'Поиск адресов', icon: 'magnifying_glass', to: '/address' },
  { title: 'Таблицы', icon: 'tables', to: '/tables' },
  { title: 'Календарь', icon: 'calender', to: '/calender' },
  { title: 'Карты', icon: 'map_point', to: '/maps' },
  { title: 'Виджеты', icon: 'tv', to: '/vidgets' },
  {
    title: 'Настройки',
    icon: 'cog_wheel',
    children: [
      { title: 'Настройки профиля', icon: 'person', to: '/profile-settings' },
      { title: 'Управление финансами', icon: 'telephone', to: '/finaces-control' },
    ],
  },
];

const Menu: FC<Props> = ({ isMenuOpen, onClick }) => {
  const mapRoutes = (routesMap: RoutesMapType) =>
    routesMap.map((route) => {
      const { title, icon, to, children } = route;

      if (!children)
        return <Item key={title} title={title} icon={icon} to={to} onClick={onClick} />;

      return (
        <Item key={title} title={title} icon={icon} to={to} onClick={onClick}>
          {mapRoutes(children)}
        </Item>
      );
    });

  return (
    <menu className={`menu ${isMenuOpen ? 'active' : ''}`}>
      <h3 className='menu__header'>Меню</h3>

      {mapRoutes(routesMap)}
      <Item title='Выход' icon='exit' onClick={onClick} />
    </menu>
  );
};

export default Menu;

/* <Item title='Главная' icon='house' to='/' />
      <Item title='Поиск адресов' icon='magnifying_glass' to='/address' />
      <Item title='Таблицы' icon='tables' />
      <Item title='Календарь' icon='calender' />
      <Item title='Карты' icon='map_point' />
      <Item title='Виджеты' icon='tv' />
      <Item title='Настройки' icon='cog_wheel'>
        <Item title='Настройки профиля' icon='person' />
        <Item title='Управление финансами' icon='telephone' />
      </Item> */
