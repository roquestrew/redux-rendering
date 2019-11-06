const initialState = [
  {
    radius: 50,
    color: '#FF00FF'
  },
  {
    radius: 30,
    color: '#FF99AA'
  },
  {
    radius: 60,
    color: '#0000FF'
  },
  {
    radius: 10,
    color: '#000000'
  }
]

function getRandomNumber (max) {
  return Number(Math.floor(Math.random() * Math.floor(max)))
}

function getRandomColor () {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const reducer = (state = initialState, action) => {
  // Handle actions here - make sure you don't mutate the state!
  const { type } = action

  // ACTION: Add a random circle
  if (type === 'NEW-CIRCLE') {
    console.log('new-circle')
    var newState = [
      ...state,
      {
        radius: getRandomNumber(100),
        color: getRandomColor()
      }
    ]
  }
  return newState
};
