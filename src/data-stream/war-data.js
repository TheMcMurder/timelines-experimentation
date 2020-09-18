import { last } from 'rxjs/operators'

const engagementsSorted = [
  {
    name: 'Gulf War',
    dead: 1143,
  },
  {
    name: 'Mexican-American War',
    dead: 17435,
  },
  {
    name: 'War of 1812',
    dead: 20000,
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
]

export function getClosestLargerWarData(value) {
  const lastIndex = engagementsSorted.length - 1
  if (value <= engagementsSorted[0].dead || value == undefined) {
    return engagementsSorted[0]
  } else if (value < engagementsSorted[lastIndex].dead) {
    for (let i = 0; i < engagementsSorted.length; i++) {
      const current = engagementsSorted[i]
      if (value < current.dead) {
        return current
      }
    }
  } else {
    return engagementsSorted[lastIndex]
  }
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
