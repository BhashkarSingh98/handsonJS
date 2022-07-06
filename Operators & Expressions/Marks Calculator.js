// Marks Calculator
// Shyam has got his marks in three subjects as A , B, and C (out of 100).Write a program to calculate his total marks and his average.

// Note: You have to complete Sum and Average functions. No need to take any input.



const Sum = (A, B, C) => 
      {
       console.log(A + B + C);
      };
      
      const Average = (A, B, C) => 
      {
        let total = A+B+C;
        let ave=total/3;
        
        console.log(ave ); 
      };
      Sum(90,75,85);
      Average(90,75,85);
