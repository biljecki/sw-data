const fs = require("fs");

const getWorkingDays = require("./utils/getWorkingDays");
const generateDataForUnit = require("./dataGenerator");
const saveDataToLFS = require("./saveData/saveDataToLFS");

const config = require("./config.json");

//////////

const { startDate, endDate, macIds } = config;

//gets all dates that are not sunday between 2 dates
const workingDates = getWorkingDays(startDate, endDate);

const data = workingDates.map(date => {
  const dailyDataPerUnit = macIds.map(mac => generateDataForUnit(mac, date));

  //flat and sort:
  const dailyData = dailyDataPerUnit.reduce((arr, cur) => [...arr, ...cur]).sort((a,b) => a.start-b.start);

  return { dailyData, date }
});

saveDataToLFS(data);
