const initialState = {
  number: 0
}

export default contacts = (state = initialState, action) => {
  switch (action.type) {
    case 'INC_NUMBER':
      const newValue = {
        number: action.payload
      }
      return newValue

    case 'DEC_NUMBER':
      return action.payload
  
    default:
      return state;
  }
}