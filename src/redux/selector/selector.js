import { createSelector } from 'reselect';
import {initialState} from '../reducers/root-reducer';

 const selectStoreDomain = state =>
 state.selectStore || initialState;

const makeSelectStore = () =>
 createSelector(
   selectStoreDomain,
   substate => substate,
 );

export default makeSelectStore;
export { selectStoreDomain };
