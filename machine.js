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
  }
}
