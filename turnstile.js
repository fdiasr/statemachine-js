export const states = {
  LOCKED: 0,
  UNLOCKED: 1
}

export const turnstile = {
  state: states.LOCKED,
  transitionFunction: 'run',
  transitions: {

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
  },

  dispatch() { 
    const action = this.transitions[this.state][this.transitionFunction]
    action.apply(turnstile)
    return this.state
  },

  changeStateTo(newState) { 
    this.state = newState
  }
}
