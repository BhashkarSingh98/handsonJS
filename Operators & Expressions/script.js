/// Question - 1 ///
//Add two Numbers
// You are provided with two numbers A and B. Your task is to add these two numbers.

// Note: You have to complete AddTwoNumbers function. No need to take any input.

const AddTwoNumbers = (a,b) => {
    console.log(a+b);
      
  };
  AddTwoNumbers(2,3);
  


/// Question - 2 ///
// Find if the conditions are obeyed or not?
// You are given two number first as Aand second as Band check if both conditions (A<10 and A>B) are satisfied or not with the help of operators.

// Note: You have to complete Is_Valid function. No need to take any input.

const Is_Valid = (a,b) =>
{
  
        if(a<10 && a>b) 
            {
               console.log("true");
            }
            else{
                console.log("false");

            }

  
};
Is_Valid(5,3);


/// Question - 3 ///
//Check the conditons 
// You are given two numbers A and B. You need to do the following checks:
// if both are divisible by 10 console true.
// if both are not divisible by 10 console false.
// if one of them only is divisible by 10 console true.
// Use operator to do this.

// Note: You have to complete Check function. No need to take any input.

const Check = (A, B) => 
{
  if((A%10==0 && B%10==0) || (A%10==0 || B%10==0))
            {
                console.log(true);
            }
            else{
                console.log(false);

            }
    
};
Check(12, 20);



/// Question - 4 ///
// Find the last digit of a 4 digit number
// You are provided a four digit number N only. Your task is to print out the last digit of that number.

// Note: You have to complete Last_Digit function. No need to take any input.


const Last_Digit = (n) => {
    console.log( n%10); 
 };
 Last_Digit(6464);




/// Question - 5 ///
//  Find the first digit of a 4 digit number
//  You are provided a four digit number N only. Your task is to print out the first digit of that number.
 
//  Note: You have to complete First_Digit function. No need to take any input.




const First_Digit = (n) => {
  
    console.log((n-(n%1000))/1000);
 
 };
 First_Digit(6372);




/// Question - 6 ///
// Find the remainder
// You are provided with two numbers A and B where A as  divisor and B as dividend.Your task is find the remainder.

// Note: You have to complete Find_the_remainder function. No need to take any input.

 
const Find_the_remainder = (a,b) => {
    console.log(b%a); 
};
Find_the_remainder(2,9);




/// Question - 7 ///
// Multipy two Numbers
// You are provided with two numbers A and B. Your task is to multiply these two numbers.

// Note: You have to complete Multiply_two_number function. No need to take any input.

const Multiply_two_number = (a,b) => {
    console.log(a*b); 
};

Multiply_two_number(5,6);



/// Question - 8 ///
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
