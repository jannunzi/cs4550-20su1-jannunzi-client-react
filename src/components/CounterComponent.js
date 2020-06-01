import React from "react";
import {connect} from "react-redux";

const CounterComponent = ({
  counterValue=123,
  increment, decrement, incValueChanged, incValue
}) =>
  <div>
    <h1>Counter: {counterValue}</h1>
    <input placeholder="INC" onChange={incValueChanged}/>
    {incValue}
    <button onClick={() => increment(incValue)}>
      Increment
    </button>
    <button onClick={() => decrement(20)}>
      Decrement
    </button>
  </div>

const stateToPropertyMapper = (state) => ({
  counterValue: state.counter,
  incValue: state.incValue
})

const dispatchToPropertyMapper = (dispatch) => {
  return {
    increment: (incValue) => {dispatch({type: 'INCREMENT', valueInc: incValue})},
    decrement: (decValue) => dispatch({type: 'DECREMENT', valueDec: decValue}),
    incValueChanged: (event) => dispatch({type: 'INC_CHANGED', value: event.target.value})
  }
}

export default connect(
  stateToPropertyMapper,
  dispatchToPropertyMapper
)(CounterComponent)


// export default CounterComponent
