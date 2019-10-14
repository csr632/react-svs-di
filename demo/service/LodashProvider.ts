import * as _ from 'lodash';
import { CustomToken, IValueProvider } from 'react-rxdi';

export const LodashToken = new CustomToken<typeof _>('@@lodash svs@@');

export const LodashProvider: IValueProvider = {
  provide: LodashToken,
  useValue: _,
};

export type LodashType = typeof _;
