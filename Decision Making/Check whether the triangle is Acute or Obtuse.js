// Check whether the triangle is Acute or Obtuse
// Write a program takes takes three angles and checks whether the triangle is acute or obtuse.

// Note: You have to complete Triangle_Check. No need to take any input

// Input Format
// The input contains three numbers A, B and C which denotes the angles of a triangle.

const Triangle_Check = (A,B,C) => {
    if (A < 90 && B < 90 && C < 90) {
        console.log("acute"); 
    } else if (A > 90 || B > 90 || C > 90) {
        console.log("obtuse"); 
    } else {
        console.log( "enter correct angles");
    }
};

Triangle_Check(50,80,30);



