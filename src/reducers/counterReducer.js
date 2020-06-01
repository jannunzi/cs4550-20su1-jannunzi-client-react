const counterReducer = (state, action) => {
  if(action.type === 'INCREMENT') {
    return {
      counter: state.counter + action.valueInc
    }
  } else if(action.type === 'DECREMENT') {
    return {
      counter: state.counter - action.valueDec
    }
  } else if(action.type === 'INC_CHANGED') {
    console.log(action.value)
    return {
      ...state,
      incValue: parseInt(action.value)
    }
  }
  else {
    return {
      counter: 4321
    }
  }
}

export default counterReducer
