import { factory, timer, stateList, timerList } from '../traffic-lights.js';

jest.useFakeTimers()

describe('Traffic Lights Test', () => {
    it('returns Red light by default', () => {
        const tl = factory()
        expect(tl.state).toBe(stateList.RED)
        expect(tl.timer()).toBe(timerList.RED)
    })
    it('returns Green light after first state change', () => {
        const tl = factory()
        tl.change()
        expect(tl.state).toBe(stateList.GREEN)
        expect(tl.timer()).toBe(timerList.GREEN)
    })
    it('returns Yellow light after second state change', () => {
        const tl = factory()
        tl.change()
        tl.change()
        expect(tl.state).toBe(stateList.YELLOW)
        expect(tl.timer()).toBe(timerList.YELLOW)
    })

    it('returns Green light after timer interval reached and calls change function', () => {
        const tl = factory()
        timer(tl)
        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenLastCalledWith(tl.trigger, 30000);
        jest.clearAllTimers()
    })
})
