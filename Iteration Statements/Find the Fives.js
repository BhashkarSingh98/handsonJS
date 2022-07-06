// Find the Fives.
// Among all the digits from 0−9, PrepBuddy likes number 5. He has a number and wants you to find out the number of times 5 occurred in the given number.

// Note: You have to complete Find_Five. No need to take any input.

const Find_Five = (N) => 
{
	 let count = 0;
    while (N > 0) {
        num = N % 10;
        N = parseInt(N / 10);
        if (num == 5) {
            count++;
        }
    }
    console.log(count);
};
Find_Five(345654);

