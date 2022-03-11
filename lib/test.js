// let nums = [14,70,53,83,49,91,36,80,92,51,66,70]
// const findMaximumXOR = function(nums) {
//     let xorMax=0
//     let tempMax1
//     let tempMax2
//     for (let i=0; i< nums.length; i++) {
//         let temp1= nums[i]
//         for (let j=i+1; j<nums.length ; j++) {
//             let temp2 = nums[j]
//             let tempXorMax = temp1 ^ temp2
//             if(tempXorMax > xorMax) {
//                 xorMax= tempXorMax
//                 tempMax1=temp1
//                 tempMax2=temp2
//             }
//         }
//     }
//     return `${xorMax} ${tempMax1} ${tempMax2}`
// }
//
//  let nums = [-1,0,1,2,-1,-4]
//
// const threeSum = function(nums) {
//     let arr= []
//     for (let i=0; i<nums.legnth ; i++) {
//         let temp1 = nums[i]
//         console.log('//////////////////////////////')
//         for (let j=i+1; j<nums.length ; j++) {
//             let temp2= nums[j]
//             console.log('//////////////////////////////')
//             for (let k=j+1; k<nums.length; k++) {
//                 let temp3= nums[k]
//                 console.log('//////////////////////////////')
//                 console.log( `${temp1} ${temp2} ${temp3}`)
//                 if (temp1+ temp2 + temp3===0){
//                     arr.push([temp1, temp2, temp3])
//                 }
//             }
//         }
//     }
//     return arr
// }
// console.log(threeSum(nums))
//
// let arr1 = [[-1,-1,2],[-1,0,1],[-1,0,1], 1]
// console.log(arr1.includes([-1, 0, 1]))

const permute = function (nums) {
    const result = []
    let temp
    const dfs = (i, nums) => {
        if (i === nums.length) {
            console.log(nums)
            result.push(nums.slice())
            return
        }

        for (let j = i; j < nums.length; j++) {

            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp

            dfs(i + 1, nums)

            temp = nums[i]
            nums[i] = nums[j]
            nums[j] = temp
        }
    }

    dfs(0, nums)
    return result
}

permute([1, 2, 3])