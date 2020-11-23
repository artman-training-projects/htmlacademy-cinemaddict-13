export function getRandomNumber(max, min = 0) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

export function getTrueFalse() {
  return !!Math.round(Math.random());
}

export function getFormattedRunTime(minutes) {
  const time = [];

  if (minutes / 60 >= 1) {
    time.push(`${Math.floor(minutes / 60)}h`);
  }

  if (minutes % 60) {
    time.push(`${minutes % 60}m`);
  }

  return time.join(` `);
}
