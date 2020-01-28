const service = {
  getData() {
    return Promise.resolve('{"answer":42}');
  }
}

const machine = {
  state: 'idle',
  transitions: {
    'idle': {
      run: function () {
        this.changeStateTo('fetching');
        service.getData().then(
          data => {
            try {
              this.dispatch('success', JSON.parse(data));
            } catch (error) {
              this.dispatch('failure', error)
            }
          },
          error => this.dispatch('failure', error)
        );
      }
    },
    'fetching': {
      success: function () { 
        console.log('Sucess...');
        this.changeStateTo('idle');
      },
      failure: function () { 
        console.log('Failure...');
        this.changeStateTo('error');
      }
    },
    'error': {
      retry: function () {
        this.changeStateTo('idle');
        this.dispatch('run');
       }
    }
  },
  dispatch(actionName, ...payload) {
    const action = this.transitions[this.state][actionName]
    if (action) {
      action.apply(machine, ...payload)
    }
  },
  changeStateTo(newState) {
    this.state = newState
  }
}

machine.dispatch('run');