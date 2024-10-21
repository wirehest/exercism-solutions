export function age(planet: string, seconds: number): number {
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
  return +(
    seconds /
    SECONDS_IN_YEAR /
    orbPeriods[planet as keyof typeof orbPeriods]
  ).toFixed(2);
}
