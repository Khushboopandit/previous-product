export const fetchCards=()=>dispatch=>{
//   console.log("action")
  dispatch({
    type:"initial_state",
    payload: {cards: [{
      date:"2/3/2019",
      pera:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      goal:"Clean water and sustainability ",
      goal_achieved: 70,
      doler:1200,
      good:20,
      bad:10,
      better:70,
  },
  {
      date:"3/5/2009",
      pera:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      goal:"Clean water and sustainability ",
      goal_achieved: 40,
      doler:1200,
      good:25,
      bad:35,
      better:40},
  {
      date:"30/6/2012",
      pera:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      goal:"Clean water and sustainability ",
      goal_achieved: 80,
      doler:1400,
      good:10,
      bad:10,
      better:80,
  }]}
  })
}