/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */
exports.findAllSolutions = function(grid, dictionary) {
  let solutions = [];
  //check input parameters validity, if not applicable return an empty array
  if(grid == null || dictionary == null)
    return solutions;
  
  //check if there is empty input 

  //Check if NXN
  let N = grid.length;
  
  for(let i = 0; i < N; i++){
    if(grid[i].length != N){

      return solutions;
    }

  }
convertCaseToLower(grid, dictionary);

let trie = boggleHash(dictionary);

let solutionSet = new Set();

for(let y = 0; y < N; y++){
  for(x = 0; x < N; x++){
    let word = ""; 

    let visitedList = new Array(N).fill(false).map(() => new Array(N).fill(false));

    findWords(word, y, x, grid, visitedList, trie, solutionSet);
  }
}

  solutions = Array.from(solutionSet);

  return solutions


}

isPrefix = function(word, trie){
return trie[word] != undefined;
}

isWord = function(word, trie){
return trie[word] == 1;
}

convertCaseToLower = function(grid, dict){

for(let i = 0; i < grid.length; i++) {
    for( let j = 0; j < grid[i].length; j++) {
         grid[i][j] = grid[i][j].toLowerCase();
    }
  
}

for(let i = 0; i < dict.length; i++) {
    dict[i] = dict[i].toLowerCase();
}
}

findWords = function(word, y, x, grid, visitedList, trie, solutionSet){
let directions = [
  [0, 1], //Right of current position
  [0, -1], //Left of current position
  [-1, 0], //Top of current position
  [1, 0], //Below current position
  [-1, 1], //Top Right Diagonal
  [-1, -1], //Top Left Diagonal 
  [1, 1], //Lower Right Diagonal
  [1, -1] //Lower Left Diagonal
  
];

if(y < 0 || x < 0 || y >= grid.length || x >= grid.length || visitedList[y][x] == true)
  return;

word += grid[y][x]; 

if(isPrefix(word, trie)){
  visitedList[y][x] = true;

  if(isWord(word, trie)){
    if(word.length >= 3){
      solutionSet.add(word);
    }
  }

  for(let i = 0; i < 8; i++){
    findWords(word, y + directions[i][0], x + directions[i][1], grid, visitedList, trie, solutionSet);
  }
}

visitedList[y][x] = false;

}

boggleHash = function(dictionary){
var dict = {};
for(let i = 0; i < dictionary.length; i++){
  dict[dictionary[i]] = 1; 
  let wordlength = dictionary[i].length;
  var str = dictionary[i];
  for(let j = wordlength; wordlength > 1; wordlength--){
    str = str.substr(0, wordlength - 1);
    if(str in dict){
      if(str == 1){
        dict[str] = 1;
      }
    }
    else{
      dict[str] = 0;
    }
  }
}

return dict;
}

const grid = [['T', 'W', 'Y', 'R'],
            ['E', 'N', 'P', 'H'],
            ['G', 'Z', 'Qu', 'R'],
            ['O', 'N', 'T', 'A']];
const dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
                  'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
                  'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];


console.log(exports.findAllSolutions(grid, dictionary));
