/*
    gridData is a 2d array of 6 rows and 7 columns and represents the connect4 board
    rows start from top to bottom, i.e., indexes 0 to 5
    columns start from left to right, i.e., indexes 0 to 6
    Each index in the array represents the state of each location of the connect4 board
    null means empty location, 1 means player-1 has filled the location, and 2 means player2 or AI has filled the location
    Initially, all locations inside the array are empty
*/

const gridData = Array(6).fill(null).map(() => Array(7).fill(null));
export { gridData };