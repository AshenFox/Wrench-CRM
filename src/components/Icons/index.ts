import { FC } from 'react';
import { PartialRecord } from '../../types';
import Calender from './Calender';
import CogWheel from './CogWheel';
import Exit from './Exit';
import House from './House';
import MagnifyingGlass from './MagnifyingGlass';
import MapPoint from './MapPoint';
import Person from './Person';
import PersonFrame from './PersonFrame';
import Tables from './Tables';
import Telephone from './Telephone';
import Triangle from './Triangle';
import TV from './TV';
import Wrench from './Wrench';

export type IconType =
  | 'calender'
  | 'cog_wheel'
  | 'exit'
  | 'house'
  | 'magnifying_glass'
  | 'map_point'
  | 'person'
  | 'person_frame'
  | 'tables'
  | 'telephone'
  | 'triangle'
  | 'tv'
  | 'wrench';

type IconsType = Record<IconType, FC>;

const Icons: IconsType = {
  calender: Calender,
  cog_wheel: CogWheel,
  exit: Exit,
  house: House,
  magnifying_glass: MagnifyingGlass,
  map_point: MapPoint,
  person: Person,
  person_frame: PersonFrame,
  tables: Tables,
  telephone: Telephone,
  triangle: Triangle,
  tv: TV,
  wrench: Wrench,
};

export default Icons;
