import React from 'react';
import { connect } from 'react-redux';
import { Button } from '../Home';
import { increment, decrement } from '../action/counter-action/counter';

// tslint:disable-next-line: interface-name
interface IProps {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

const Counter = (props: IProps) => {
  return (
    <div>
      <div>Counter: {props.counter}</div>
      <Button onClick={props.increment}>+</Button>
      <Button onClick={props.decrement}>-</Button>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  counter: state.counter.counter
});

export default connect(
  mapStateToProps,
  { increment, decrement }
)(Counter);
