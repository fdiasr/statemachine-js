import { states, turnstile } from '../turnstile';

test('turnstile returns state locked by default', () => {
    expect(turnstile.state).toBe(states.LOCKED)
})

test('turnstile returns state unlock when dispatch is called first time', () => {
    expect(turnstile.dispatch()).toBe(states.UNLOCKED)
})
