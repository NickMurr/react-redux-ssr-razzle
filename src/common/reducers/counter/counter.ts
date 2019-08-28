import {
  SET_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../../action/counter-action/counter';
const initialState = {
  counter: 0
};

export default function(state = initialState, action: any) {
  const { payload, type } = action;

  switch (action.type) {
    case SET_COUNTER:
      return {
        counter: payload
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
