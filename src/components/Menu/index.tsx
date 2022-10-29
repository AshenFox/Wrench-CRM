import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { IconType } from '../Icons';
import Item from './Item';

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

interface OwnProps {}

type Props = OwnProps;

const Menu: FC<Props> = () => {
  const { is_menu_open } = useAppSelector(({ main }) => main);

  const mapRoutes = (routesMap: RoutesMapType) =>
    routesMap.map((route) => {
      const { title, icon, to, children } = route;

      if (!children) return <Item key={title} title={title} icon={icon} to={to} />;

      return (
        <Item key={title} title={title} icon={icon} to={to}>
          {mapRoutes(children)}
        </Item>
      );
    });

  return (
    <menu className={`menu ${is_menu_open ? 'active' : ''}`}>
      <h3 className='menu__header'>Меню</h3>
      {mapRoutes(routesMap)}
      <Item title='Выход' icon='exit' />
    </menu>
  );
};

export default Menu;
