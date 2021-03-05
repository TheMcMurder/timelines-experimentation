import { schemeCategory10 } from 'd3'

const casualtyEventsSorted = [
  {
    name: 'Gulf War',
    dead: 1143,
    hidePoint: 128650,
  },
  {
    name: 'Mexican-American War',
    dead: 17435,
    hidePoint: 50000,
  },
  {
    name: 'War of 1812',
    dead: 20000,
    hidePoint: 50000,
  },
  {
    name: 'War on Terror (Afghanistan)',
    dead: 22266,
  },
  {
    name: 'War on Terror (Iraq)',
    dead: 36710,
  },
  {
    name: 'Revolutionary War',
    dead: 50000,
  },
  {
    name: 'Korean War',
    dead: 128650,
  },
  {
    name: 'Vietnam War',
    dead: 211454,
  },
  {
    name: 'World War 1',
    dead: 320518,
  },
  {
    name: 'World War 2',
    dead: 1076245,
  },
].map((event, index) => ({ ...event, color: schemeCategory10[index] }))

export function getIndexOfNextLargerEvent(value) {
  const lastIndex = casualtyEventsSorted.length - 1
  if (value <= casualtyEventsSorted[0].dead || value == undefined) {
    return 0
  } else if (value < casualtyEventsSorted[lastIndex].dead) {
    for (let i = 0; i < casualtyEventsSorted.length; i++) {
      const current = casualtyEventsSorted[i]
      if (value < current.dead) {
        return i
      }
    }
  } else {
    return lastIndex
  }
}

export function getAllEventsSmallerAndNextLarger(value) {
  const nextLarger = getIndexOfNextLargerEvent(value) + 1
  return casualtyEventsSorted.slice(0, nextLarger)
}

export function getClosestLargerEventData(value) {
  const relevent = getAllEventsSmallerAndNextLarger(value)
  return relevent[relevent.length - 1].name
}

// console.log('0', getClosestLargerWarData(0)) // gulf war
// console.log('1000', getClosestLargerWarData(1000)) // gw
// console.log('2000', getClosestLargerWarData(2000)) // MX
// console.log('5000', getClosestLargerWarData(5000)) // MX
// console.log('8000', getClosestLargerWarData(8000)) // MX
// console.log('18000', getClosestLargerWarData(18000)) // 1812
// console.log('20000', getClosestLargerWarData(20000)) // AFG
// console.log('25000', getClosestLargerWarData(25000)) // IRQ
// console.log('35000', getClosestLargerWarData(35000)) // IRQ
// console.log('40000', getClosestLargerWarData(40000)) // REV
// console.log('45000', getClosestLargerWarData(45000)) // REV
// console.log('55000', getClosestLargerWarData(55000)) // KOR
// console.log('60000', getClosestLargerWarData(60000)) // KOR
// console.log('80000', getClosestLargerWarData(80000)) // KOR
// console.log('100000', getClosestLargerWarData(100000)) // KOR
// console.log('150000', getClosestLargerWarData(150000)) // VET
// console.log('230000', getClosestLargerWarData(230000)) // WWI
// console.log('350000', getClosestLargerWarData(350000)) // WWII
// console.log('18000000', getClosestLargerWarData(18000000)) // WWII
