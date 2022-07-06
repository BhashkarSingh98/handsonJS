// Find Sum
// You are given an integer N, and your task is to find the sum of all the even integers starting from 1 upto N (N inclusive).

// Note: You have to complete findSum function. No need to take any input.

const findSum = (n) => {
    let sum = 0;
 for (let i = 2; i<=n; i=i+2)
 {
   sum =sum + i;
 }
 console.log(sum);

};
findSum(6);
