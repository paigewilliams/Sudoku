export function Game(board) {
  this.board = board;
}

Game.prototype.checkRows = function(){
  for (var i = 0; i < 9; i++){
    var checkArray = [];
    for (var j = 0; j < 9; j++){
      if(checkArray.includes(this.board[i][j])) {
        return false;
      } else {
        checkArray.push(this.board[i][j]);
      }
    }

  }
  return true;
};

Game.prototype.checkColumns = function(){
  for (var i = 0; i < 9; i++){
    var checkArray = [];
    for (var j = 0; j < 9; j++){
      if(checkArray.includes(this.board[j][i])) {
        return false;
      } else {
        checkArray.push(this.board[j][i]);
      }
    }
  }
  return true;
};

Game.prototype.checkGrid = function(){
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var checkArray = [];
      for(var k = 0; k < 3; k++) {
        for(var l = 0; l < 3; l++) {
          if(checkArray.includes(this.board[k+3*i][l+3*j])) {
            return false;
          } else {
            checkArray.push(this.board[k+3*i][l+3*j]);
          }
        }
      }
    }
  }
  return true;
};

Game.prototype.checkBoard = function() {
  return (this.checkRows() && this.checkColumns() && this.checkGrid());
};
