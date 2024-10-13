'use strict';

/** Converts age to years on the specified planet. */
export const age = (planet, age) => {
  const SECONDS_IN_YEAR = 31_557_600;
  const orbPeriods = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1.0,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };
  return +(age / SECONDS_IN_YEAR / orbPeriods[planet]).toFixed(2);
};
