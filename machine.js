const machine = {
  'idle': {
    run: function() {}
  },
  'fetching': {
    success: function () {},
    failure: function () {}
  },
  'error': {
    retry: function() {}
  }
}
