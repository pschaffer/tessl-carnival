import { theme } from '../carnival';

const { colors } = theme;

/**
 * The midway map's palette, after dark and long after closing time. Tent
 * blood reds, bone whites and rust come from the carnival theme; the bruised
 * sky, dead grass, mud paths and other scenery shades only the map uses live
 * here.
 */
export const palette = {
  sky: '#3a0f12',
  skyHigh: '#0a0506',
  cloud: '#2a2224',
  cloudShade: '#1c1517',
  haze: '#1e1a17',

  grass: '#3d3b26',
  grassDark: '#2f2d1c',
  grassEdge: '#242214',
  grassLight: '#4a4630',
  path: '#4b3a2c',
  pathShade: '#3a2c21',
  hedge: '#1f2418',
  hedgeDark: '#151a10',
  hedgeLight: '#2b3220',
  shadow: 'rgba(0, 0, 0, 0.5)',

  red: colors.stripeA,
  redShade: '#3a050a',
  cream: colors.stripeB,
  creamShade: '#9c927b',
  gold: colors.accent,
  goldShade: '#6e0a10',
  blue: '#2c3340',
  blueShade: '#1b2029',
  sky2: colors.water,
  pink: '#6b4a4e',
  pinkShade: '#4d3336',
  wood: colors.wood,
  woodDark: '#22170f',
  woodLight: '#54402f',
  board: '#4a3a2c',
  metal: '#6e6a66',
  metalShade: '#47433f',
  ink: colors.background,
  opening: '#050303',
  closed: '#3a3436',
  closedShade: '#26211f',
  white: '#e8e2d4',
  puff: '#5d6b3a',
  puffShade: '#434e28',

  skins: ['#b8b8a8', '#9aa391', '#8c8478', '#c4bfb0', '#7f8a7a'],
  hairs: ['#1a1414', '#0b0708', '#3a2a22', '#8f8a80', '#22170f'],
  shirts: [colors.water, '#2b2e24', '#3a2c3e', colors.danger, '#2c3340', colors.stripeB],
  pants: ['#16151a', '#221a1f', '#2a2018'],
  bunting: [colors.stripeA, colors.accent, '#2c3340', colors.stripeB],
  balloons: [colors.stripeA, colors.accent, '#2c3340', colors.water, '#4d3336'],
} as const;
