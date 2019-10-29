const machine = {
  state: 'idle',
  transitions: {
    'idle': {
      run: function () { }
    },
    'fetching': {
      success: function () { },
      failure: function () { }
    },
    'error': {
      retry: function () { }
    }
  },
  dispatch(action, ...payload) {
    const action = this.transitions[this.state][actionName]
    if (action) {
      action.apply(machine, ...payload)
    }
  },
  changeStatusTo(newState) {
    this.state = newState
  }
}
