import { states, turnstileFactory } from '../turnstile';

test('turnstile returns state locked by default', () => {
    const turnstile = turnstileFactory.create('001')
    expect(turnstile.state).toBe(states.LOCKED)
})

test('turnstile returns state unlocked when dispatch is called first time', () => {
    const turnstile = turnstileFactory.create('002')
    turnstile.dispatch()
    expect(turnstile.state).toBe(states.UNLOCKED)
})

test('turnstile returns state locked when dispatch is called second time', () => {
    const turnstile = turnstileFactory.create('001')
    turnstile.dispatch()
    turnstile.dispatch()
    expect(turnstile.state).toBe(states.LOCKED)
})
