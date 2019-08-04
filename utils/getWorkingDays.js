const moment = require("moment");

const getWorkingDays = (start, end) => {
  
  const current = moment(start);
  const dates = [];

  while (current.isSameOrBefore(moment(end))) {
    if (current.day()) dates.push(current.format('YYYY-MM-DD'));    
    current.add(1, 'days');
  }
  return dates;
}

module.exports = getWorkingDays;