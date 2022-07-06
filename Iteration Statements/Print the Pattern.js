// Print the Pattern.
// Write a program which ask user for no of lines and print a pattern using an asterik .

// Note: You have to complete Print_pattern. No need to take any input.

const Print_pattern = (N) => 
{
for(var a = 0; a <= N; a++) {
        let pattern = '';
        for (var b = 0; b < a; b++) {
            pattern = pattern + "*";
        }
        console.log(pattern); 
    }
};
Print_pattern(5);


