// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("Check the value of the Oraganization is Non Profit", function(){
   
    expect(launchcode.organization).toEqual("nonprofit");
 });

 test("Check the value of the ExecutiveDirector is Jeff", function(){
   
  expect(launchcode.executiveDirector).toEqual("Jeff");
});

test("Check the value of the percentageCoolEmployees is 100", function(){
   
  expect(launchcode.percentageCoolEmployees).toEqual(100);
});

test("Check the value of the programsOffered", function(){
   
  expect(launchcode.programsOffered[0]).toEqual("Web Development");
  expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
  expect(launchcode.programsOffered[2]).toEqual("Liftoff");
  expect(launchcode.programsOffered.length).toEqual(3);
});

test("When passed a number that is ONLY divisible by 2, return 'Launch!'", function(){
  let output = launchcode.launchOutput(2);
  expect(output).toBe("'Launch!'");
});

test("When passed a number that is ONLY divisible by 3, return ''Code!''", function(){
  let output = launchcode.launchOutput(3);
  expect(output).toBe("'Code!'");
});

test("When passed a number that is ONLY divisible by 5, return ''Rocks!'", function(){
  let output = launchcode.launchOutput(5);
  expect(output).toBe("'Rocks!'");
});

test("When passed a number that is ONLY divisible by 2 &3, return ''LaunchCode!'", function(){
  let output = launchcode.launchOutput(6);
  expect(output).toBe("'LaunchCode!'");
});

test("When passed a number that is ONLY divisible by 3&5, return ''Code Rocks!''", function(){
  let output = launchcode.launchOutput(15);
  expect(output).toBe("'Code Rocks!'");
});
  
});