import { factory, colors, timer } from '../traffic-lights.js';

const tl = factory()

describe('Traffic Lights Test', () => {
    it('returns Red light by default', () => {
        expect(tl.color).toBe(colors.RED)
        expect(tl.timer).toBe(timer.RED)
    })
    it('returns Green light after first state change', () => {
        tl.change()
        expect(tl.color).toBe(colors.GREEN)
        expect(tl.timer).toBe(timer.GREEN)
    })
    it('returns Yellow light after second state change', () => {
        tl.change()
        expect(tl.color).toBe(colors.YELLOW)
        expect(tl.timer).toBe(timer.YELLOW)
    })
})
