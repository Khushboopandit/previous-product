import { combineReducers } from 'redux'
import cardReducer from './cardReducer'

export default combineReducers({
  cards:cardReducer
})
// import {
//     ADD_CARDS
//   } from './actions'

//   function cardsDetails(state = [], action) {
//     switch (action.type) {
//       case ADD_CARDS:
//         return [
//           ...state,
//           {
//             text: action.text,
//             completed: false
//           }
//         ]
//       default:
//         return state
//     }
//   }
  

