//-------Cau 1
const customCalc = (...args) => {
    const arrayInput = args;
    const result = {};
    result.max = args[0];
    result.min = args[0];

    result.sum = arrayInput.reduce((prev, curr) => {
        if (curr > result.max) {
            result.max = curr
        }
        if (curr < result.min) {
            result.min = curr
        }
        return prev + curr
    }, 0)
    result.avg = Number(result.sum / arrayInput.length).toFixed(2)

    return result;
}
//output array test
const arrayCustomCalc = customCalc(4, 7, 32, 6, 3, 6, 22, 44);
console.log(arrayCustomCalc)

//-------Cau 2
//function custom filter
const customFilter = (arrayInput, callback) => {
    const arrayResult = []
    for (let index = 0; index < arrayInput.length; index++) {
        if (callback(arrayInput[index], index)) {
            arrayResult.push(arrayInput[index])
        }
    }
    return arrayResult
}
//output array has value greater than 5
const arrayCustomFilter = customFilter([2, 7, 33, 64, 4], function (value, index) {
    return value > 5;
});
console.log(arrayCustomFilter)

//function filter even number
const filterEvenNumber = (arrayInput) => {
    return customFilter(arrayInput, (value) => {
        return value % 2 === 0
    })
}

//output array test
const arrayEventNumber = filterEvenNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(arrayEventNumber)

