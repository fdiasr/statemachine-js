const colors = {
    RED: 'red',
    GREEN: 'greeb',
    YELLOW: 'yellow'
}

const timer = {
    RED: 30,
    GREEN: 25,
    YELLOW: 5
}

class TrafficLights {
    constructor(color = colors.RED) {
        this.color = color
        this.timer = timer[color.toUpperCase()]
    }

    current() {
        return this.color
    }

    change() {
        if (this.color === colors.RED) {
            this.color = colors.GREEN
            this.timer = timer.GREEN
            return
        }
        if (this.color === colors.GREEN) {
            this.color = colors.YELLOW
            this.timer = timer.YELLOW
            return
        }
        if (this.color === colors.YELLOW) {
            this.color = colors.RED
            this.timer = timer.RED
            return
        }
        throw Error;
    }
}


const factory = () => {
    return new TrafficLights
}

export { factory, colors, timer }
