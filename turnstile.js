export const states = {
  LOCKED: 0,
  UNLOCKED: 1
}

const transitions = {
  [states.LOCKED]: {
    run: function() {
      this.changeStateTo(states.UNLOCKED)
    }
  },

  [states.UNLOCKED]: {
    run: function() {
      this.changeStateTo(states.LOCKED)
    }
  }
}

export const turnstileConst = {
  state: states.LOCKED,
  transitionFunction: 'run',
  transitions: transitions,

  dispatch() { 
    const action = this.transitions[this.state][this.transitionFunction]
    action.apply(turnstileConst)
    return this.state
  },

  changeStateTo(newState) { 
    this.state = newState
  }
}

export const turnstileFactory = {
  create(id) {
    return new Turnstile({id})
  }
}

class Turnstile {
  constructor(props) {
    this.id = props.id
    this.state = states.LOCKED
    this.transitionFunction = 'run'
  }

  dispatch() { 
    const action = transitions[this.state][this.transitionFunction]
    action.apply(this)
    return this.state
  }

  changeStateTo(newState) { 
    this.state = newState
  }
}
