const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

/* let doubledAndSummed = [1, 2, 3].reduce( (total, element) => element * 2 + total, 0)

function declaration = array.reduce, i.e. invoking the reduce function
total, element = the total at each point as it iterates over the array, and each array element
element * 8, multiply the element by 2, + total, and add it to the total

returns 12

without the zero at the end it returns 11, because the first element isn't used in the element function?? something like that. brain no worky
*/

// const totalBatteries = (batches) => {
//     let result = batches.reduce((total, element) => element + total, 0)
//     return result 
// }
// NO look up dingus

const totalBatteries = batteryBatches.reduce( (total, element) => element + total, 0);