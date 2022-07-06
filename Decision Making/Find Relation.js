// Find Relation
// PrepBuddy wants you to get familiar with various Relational operators. He provides you with two integer values X and Y and asks you to find the relation between them.The relationships between integers X and Y are as follows:
// If X<Y, it means that X is smaller than Y.
// If X>Y, it means that X is greater than Y.
// If X=Y, it means that X is equal to Y. 
// Note: You have to complete findRelationship function. No need to take any input.


const findRelation = (x,y) => {
    if (x < y) {
    console.log(x + " is smaller than " + y );
} else if (x > y) {
    console.log(x + " is greater than " + y);
} else if (x = y) {
    console.log(x + " is equal to " + y);
} else {
    console.log("folseee!!!!!");
}
};
findRelation(3,11);

