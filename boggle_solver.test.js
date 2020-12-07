//Omosola Awoyemi @02866082
let boggle_solver = require("/home/codio/workspace/Boggle_Impl2_After_CodeReview/boggle_solver.js");
//import findAllSolutions
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe("Test Suite", () => {
  describe("Input edge cases", () => {
    test("Grid is 1x1", () => {
      // (Edge case) Since only 1 character words are possible, and these are
      // shorter than 3, then there are no possible solutions.
      let grid = [["A"]];
      let dictionary = ["a", "b", "c"];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("Grid is 0x0", () => {
      // (Edge case) Tests that the algorithm can correctly return an empty list
      // when given an empty grid.
      let grid = [[]];
      let dictionary = ["hello", "there", "general", "kenobi"];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("Dictionary is empty", () => {
      // (Edge case) Since there are no possible solutiona, it should return an
      // empty list.
      let grid = [
        ["A", "B", "C", "D"],
        ["E", "F", "G", "H"],
        ["I", "J", "K", "L"],
        ["M", "N", "O", "P"],
      ];
      let dictionary = [];
      let expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      // Lowercasing for case-insensitive string array matching.
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});
