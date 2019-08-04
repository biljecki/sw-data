
const timeToMiliseconds = time => {
  const [h,m] = time.split(':');

  const hourOffset = h * 60 * 60 * 1000;
  const minuteOffset = m * 60 * 1000;

  return hourOffset + minuteOffset;  
}

module.exports = timeToMiliseconds;
