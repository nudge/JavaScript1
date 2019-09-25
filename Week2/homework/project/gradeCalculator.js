'use script'; 
{
    //When a student did a test, this function calculate her/his grade based on test score which got it. 
    function calculator (testScore) 
    {
        if (testScore <= 49) {
            console.log("You got a F " + "(" + testScore + "%" + ")");
        } 
        else if (testScore <= 59) {
            console.log("You got a E " + "(" + testScore + "%" + ")");
        }
        else if (testScore <= 69) {
            console.log("You got a D " + "(" + testScore + "%" + ")");
        }
        else if (testScore <= 79) {
            console.log("You got a C " + "(" + testScore + "%" + ")");
        }
        else if (testScore <= 89) {
            console.log("You got a B " + "(" + testScore + "%" + ")");
        }
        else if (testScore <= 100) {
            console.log("You got a A " + "(" + testScore + "%" + ")")
        }
        return testScore;
    }
    console.log(calculator(testScore)); //if you define a score among zero and hundred instead of "testScore", you can see what is your grade!!

}