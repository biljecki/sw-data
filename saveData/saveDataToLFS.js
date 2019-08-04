var fs = require('fs').promises;


const saveFile = async ({dailyData, date}, root) => {
  const filePath = `${root}/${date}.json`;
  await fs.writeFile(filePath, JSON.stringify(dailyData, null, 4));
  console.log(`SAVED ${filePath} with ${dailyData.length} records.`);
}


const saveDataToLFS = async (data) => {

  let total = 0;

  const now = new Date(); 
  
  const root = `./data/${now.getTime()}`;

  await fs.mkdir(root);


  const promisesForAllFileSaves = data.map(day => {
    total+= day.dailyData.length;
    return saveFile(day, root);
  })

  await Promise.all(promisesForAllFileSaves);
  console.log(`\n\nALL DONE - ${total} records in total \n\n`);

}

module.exports = saveDataToLFS;
