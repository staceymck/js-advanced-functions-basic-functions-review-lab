function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
  return function(adj = "special") {
    return `You are ${flair + adj + flair}!`;
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  divide: function(a, b) {
    return a / b;
  }
}

arrayOfTransforms = [
  function(a){ return a * 2 },
  function(a){ return a + 1000},
  function(a){ return a % 7 }
]

function actionApplyer(startInt, actions) {
  for (let i=0; i < actions.length; i++) {
    startInt = actions[i](startInt);
  }
  return startInt;
}