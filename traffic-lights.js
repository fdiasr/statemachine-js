const RED = 'RED'
const GREEN = 'GREEN'
const YELLOW = 'YELLOW'

const stateList = { RED, GREEN, YELLOW }

const timerList = {
    RED: 30,
    GREEN: 25,
    YELLOW: 5
}

const transition = {
    RED: GREEN,
    GREEN: YELLOW,
    YELLOW: RED
}

class TrafficLights {
    constructor(state = stateList.RED) {
        this.state = state
    }

    timer() {
        return timerList[this.state]
    }

    change() {
        // TODO verify and throw error if not found, and set RED as default fallback state
        const nextState = transition[this.state]
        this.state = nextState
    }

    trigger() {
        console.log('Changeing State')
        console.log('From: ', this.state())
        this.change()
        console.log('To: ', this.state())
        timer(this)
    }
}

const factory = () => new TrafficLights

const timer = tl => setTimeout(tl.trigger, tl.timer() * 1000)

export { factory, timer, stateList, timerList }
