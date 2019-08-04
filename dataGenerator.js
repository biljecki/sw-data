
const timeToMiliseconds = require("./utils/timeToMiliseconds");
const { randomRangeFactory } = require("./utils/random")

const config = require("./config.json");

const { durationRange, idleRange, initialStartOffsetRange, startTime, endTime } = config;

const durationGenerator = randomRangeFactory(durationRange);
const idleGenerator = randomRangeFactory(idleRange);
const startOffsetGenerator = randomRangeFactory(initialStartOffsetRange);

const startTimeOffset = timeToMiliseconds(startTime);
const endTimeOffset = timeToMiliseconds(endTime);

const generateDataForUnit = (id_mac, date) => {

  let dayTimestamp = new Date(date).getTime();
  
  const startTimestamp = dayTimestamp + startTimeOffset;
  const endTimestamp = dayTimestamp + endTimeOffset;

  const data = [];
  
  let start = startTimestamp + startOffsetGenerator();

  while (start < endTimestamp) {
    duration = durationGenerator();
    data.push({ id_mac, start, stop: start + duration, duration: duration/1000 })
    start += duration + idleGenerator() ;
  }

  return data;

}

module.exports = generateDataForUnit;
