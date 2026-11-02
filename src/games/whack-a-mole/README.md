# Whack-a-Mole

Pale moles rise from a grid of nine graves. Bash them back down before they sink.

## How to play

- A mole pops up from an empty hole and stays up for 1 second, then drops back down.
- Click a mole while it's up to whack it.
- Moles pop up every second at the start, speeding up steadily to every 0.35
  seconds by the end of the round.
- The round lasts 30 seconds.
- Click again on the game over screen to play another round.

## Scoring

Each whack scores 10 points. Clicking an empty hole or missing costs nothing.

Your final score is saved to the carnival's score board when the round ends.

## Files

- `game.ts`: the game logic (`createState`, `step`, `whack`, `popInterval`) and the
  `whackAMole` entry, the default export the midway finds.
- `game.test.ts`: tests for the game logic.
