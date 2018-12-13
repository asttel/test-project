/*const moment = require('moment')

const days = getPassedDays('+1', '2019-08-05')

console.info('passedDays: ', days)

function getPassedDays(UTCOffset, dueDate, lengthType) {
  const nowDate = moment
    .utc()
    .utcOffset(Number(UTCOffset) * 60)
    .startOf('day')

  console.info('nowDate: ', nowDate.format('YYYY-MM-DD HH:mm'))

  const dueDateDate = moment
    .utc(dueDate, 'YYYY-MM-DD')
    .utcOffset(Number(UTCOffset) * 60)
    .startOf('day')

  console.info('dueDateDate: ', dueDateDate.format('YYYY-MM-DD HH:mm'))

  const leftDays = moment.duration(dueDateDate.diff(nowDate)).asDays()

  console.info('leftDays: ', leftDays)

  var passedDays = Math.abs(280 - leftDays)

  if (lengthType === '39+6') {
    passedDays = passedDays - 1 < 0 ? 0 : passedDays - 1
  }

  return passedDays
}
*/

//1. using `.map()` create new array `[2, 3, 4]` from given `[1, 2, 3]`
const array1 = [1, 2, 3]
const map1 = array1.map(x =>x+1)

console.log('1. ', map1)

//2. using `.forEach()` log every item in given array `[1, 2, 3, 'John Doe`, { firstName: ‘John’ }]`

const array2 = [1, 2, 3, 'John Doe', { firstName: 'John' }]
array2.forEach(each =>
  console.log('2. ', each)
)

//3. using `.reduce()` get sum of all items in given array `[1, 3, 5, -6, 90]`
const array3 = [1, 3, 5, -6, 90]
const sum = array3.reduce((accumulatedValue, currentValue) => accumulatedValue + currentValue)
console.log('3. ', sum)

//4. using `.indexOf()` test if array `[1, 2, 3]` includes `4`
const array4 = [1, 2, 3]
const indexOfFour = array4.indexOf(4)
console.log('4. ', indexOfFour)

//5. do the same using `.includes()`
const array5 = [1, 2, 3]
const includesFour = array4.includes(4)
console.log('5. ', includesFour)

//6. using `.concat()` concat 3 arrays `[1, 2, 3]`, `[7, 3]`, `[8, 13]` in one
const array61 = [1, 2, 3]
const array62 = [7, 3]
const array63 = [8, 13]
const concatArray = array61.concat(array62.concat(array63))
console.log('6. ',concatArray)

//7. using `.push()` add new item in existing array
const array7 = [ 1, 2, 3, 7, 3, 8, 13 ]
array7.push(33)
console.log('7. ', array7)

//8. using `.join()` convert array to string
const joinedArray = concatArray.join()
console.log('8. ', joinedArray)

//9. using `.slice()` create a copy of given array
const slicedArray = concatArray.slice(0)
console.log('9. ', slicedArray)

//10. using `.slice()` create a new array with first half items of given
const halfArrayLength = (concatArray.length)/2
const slicedArrayInHalf = concatArray.slice(0, halfArrayLength)
console.log('10. ', slicedArrayInHalf)

// 11. using `.find()` get an item from given array `[{ name: 'Amanda', age: 29 }, { name: 'Patric', age: 29 }, { name: 'Janne', country: 'UK' }]`
//   - item with `name` equal to `Amanda`
//   - item with `age` equal to `29`
//   - item with `country` equal to `UK`
const array11 = [{ name: 'Amanda', age: 29 }, { name: 'Patric', age: 29 }, { name: 'Janne', country: 'UK' }]
const findAmanda = array11.find(people => people.name === 'Amanda' )
const findAge29 = array11.find(people => people.age === 29 )
const findCountryUK = array11.find(people => people.country === 'UK' )

console.log('11. ', findAmanda)
console.log('11. ', findAge29)
console.log('11. ', findCountryUK)

//12. using `.filter()` get a new array with odd numbers from given `[1, 3, 4, 5, 6, 11, 23, 34, 88]`
const array12 = [1, 3, 4, 5, 6, 11, 23, 34, 88]
const filterOddNumbers = array12.filter(number => number % 2)
console.log('12. ', filterOddNumbers)

// 13. using `.sort()` sort numbers in an array in descending order
const sortDesc = array12.sort((a, b) => b-a)
console.log('13. ', sortDesc)

// 14. using `.sort()` sort numbers in an array in ascending order
const sortAsc = sortDesc.sort((a, b) => a-b)
console.log('14. ', sortAsc)