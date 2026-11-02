import { describe, expect, it } from 'vitest';
import {
  END_INTERVAL,
  POINTS_PER_WHACK,
  ROUND_TIME,
  START_INTERVAL,
  UP_TIME,
  createState,
  popInterval,
  step,
  whack,
} from './game';

describe('whack-a-mole', () => {
  it('starts a full round with no score and every hole empty', () => {
    const state = createState();
    expect(state.timeLeft).toBe(ROUND_TIME);
    expect(state.score).toBe(0);
    expect(state.phase).toBe('playing');
    expect(state.holes).toHaveLength(9);
    expect(state.holes.every((h) => h.up === 0)).toBe(true);
  });

  it('pops a mole up from an empty hole when the timer runs down', () => {
    const state = createState();
    step(state, START_INTERVAL, () => 0);
    expect(state.holes[0].up).toBe(UP_TIME);
    expect(state.holes.filter((h) => h.up > 0)).toHaveLength(1);
  });

  it('drops a mole back down once its time is up', () => {
    const state = createState();
    state.holes[4].up = UP_TIME;
    state.nextPop = 10;
    step(state, UP_TIME);
    expect(state.holes[4].up).toBe(0);
  });

  it('scores a whack on a mole that is up and sends it down', () => {
    const state = createState();
    const hole = state.holes[2];
    hole.up = UP_TIME;
    expect(whack(state, hole.x + 10, hole.y - 10)).toBe(true);
    expect(state.score).toBe(POINTS_PER_WHACK);
    expect(hole.up).toBe(0);
  });

  it('scores nothing for an empty hole or a miss', () => {
    const state = createState();
    const hole = state.holes[2];
    expect(whack(state, hole.x, hole.y)).toBe(false);
    hole.up = UP_TIME;
    expect(whack(state, hole.x + 200, hole.y + 200)).toBe(false);
    expect(state.score).toBe(0);
  });

  it('pops moles up faster as the round goes on', () => {
    expect(popInterval(ROUND_TIME)).toBe(START_INTERVAL);
    expect(popInterval(ROUND_TIME / 2)).toBeLessThan(START_INTERVAL);
    expect(popInterval(0)).toBeCloseTo(END_INTERVAL);
  });

  it('ends the round when the time runs out and clears the moles', () => {
    const state = createState();
    state.timeLeft = 0.1;
    state.holes[0].up = UP_TIME;
    step(state, 0.2);
    expect(state.phase).toBe('over');
    expect(state.holes.every((h) => h.up === 0)).toBe(true);
  });

  it('cannot whack once the round is over', () => {
    const state = createState();
    state.phase = 'over';
    const hole = state.holes[0];
    hole.up = UP_TIME;
    expect(whack(state, hole.x, hole.y)).toBe(false);
    expect(state.score).toBe(0);
  });
});
