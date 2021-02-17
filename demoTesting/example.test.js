test("2 times 100 is 200", () => {
  expect(2*100).toEqual(200);
});

//create a function that multiplies a number by three
const timesThree = (number) => {
  return number*3;
}

describe("When timesThree is called", () => {
  it("returns a number that is three times that number when a number is provided", () => {
    // Arrange: setting up the situation
    // var, let, const 
    const number = 6; //test data
  
    // Act: trigger the situation
    const actualResult = timesThree(number);
  
    // Assert: Check for expected outcome
    // expect(timesThree(3)).toEqual(9);
    expect(actualResult).toEqual(18);
  });

  it("returns NaN when a string is provided", () => {
    // Arrange: setting up the situation
    const stringArgument = "cat"; //test data

    // Act: trigger the situation
    const actualResult = timesThree(stringArgument);

    // Assert: Check for expected outcome
    expect(actualResult).toEqual(NaN);
  });
});

// hoisting
const greeting = () => {
  return "hi";
} 

// Write a function that returns a greeting.
test("When greeting is called, it returns hi", () => {
  expect(greeting()).toEqual("hi");
});

// Write a test for a function 
// that returns "Have a wonderful day!" if you are well-rested 
// and "Take a break." if you are not well-rested

const areYouWellRested = (stateOfRestedness) => {
  if (stateOfRestedness === "yes") {
    return "Have a wonderful day!"
  }
  
  if (stateOfRestedness === "no") {
    return "Take a break."
  }
}

fdescribe("When areYouWellRested is called", () => {
  it("return 'Have a wonderful day!' when called with 'yes'", () => {
    // arrange 
    const argument = "yes";

    // act
    const actualResult = areYouWellRested(argument);

    // assert
    expect(actualResult).toEqual("Have a wonderful day!");
  });

  it("returns 'Take a break.' when called with 'no'", () => {
    // arrange 
    const argument = "no";

    // act
    const actualResult = areYouWellRested(argument);

    // assert
    expect(actualResult).toEqual("Take a break.");
  })
});