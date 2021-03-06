function randomTimeSeriesDataGenerator() {
  return {
    value: growingRandom(),
    date: futureDay(),
  }
}

function randomBetween(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let prevRandom = 0
function growingRandom() {
  const newRandom = randomBetween(prevRandom + 100, prevRandom + 110)
  prevRandom = newRandom
  return newRandom
}

let prevDay = new Date(`2020-01-01`)
function futureDay() {
  const daysToAdd = 1
  const newDay = new Date(prevDay.getTime())
  newDay.setDate(newDay.getDate() + daysToAdd)
  prevDay = newDay
  return newDay
}

export const randomData = Array.apply(null, { length: randomBetween(100, 360) }).map(
  Function.call,
  randomTimeSeriesDataGenerator,
)
// .sort(function(a,b){
//   if (a.date.getTime < b.date.getTime()) return -1;
//   else if (b.date.getTime() < a.date.getTime()) return 1;
//   else return 0;
// });
