const rsp = require('../RPS.js');

test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
    let output = rsp.whoWon('rock','paper');
    expect(output).toBe("Player 2 wins!");
 });
 
 test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
    let output = rsp.whoWon('paper','scissors');
    expect(output).toBe("Player 2 wins!");
 });