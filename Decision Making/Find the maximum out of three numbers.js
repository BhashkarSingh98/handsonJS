// Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print  −1.

// Note: You have to complete Max_out_of_three. No need to take any input.
// Input Format The input contains three numbers A, B and C.



const Max_out_of_three = (A,B,C) => {
    if(A > B && A > C){
       console.log(A);
   } else if (B > A&& B > C){
    console.log(B); 
   } else if (C > A && C > B) {
       console.log(C);
   }
   else{
       console.log("-1");
   }

};
Max_out_of_three(2,4,5);
