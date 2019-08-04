const randomBetween = (min, max) => Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1) + parseInt(min));

const randomRange = range => {
  let [min, max] = range.split`-`;
  return randomBetween(min, max);
}

const randomRangeFactory = (range, multiplier = 1000) => {
  return (r) => randomRange(range) * multiplier;
}

exports.randomBetween = randomBetween;
exports.randomRange = randomRange;
exports.randomRangeFactory = randomRangeFactory;
