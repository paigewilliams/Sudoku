import { Game } from './../src/game.js';

describe('Game', function(){
  var failBoard = [[6,9,9,5,7,4,1,8,2],[5,9,1,8,2,9,3,7,6],[7,8,2,6,1,3,9,5,4],[1,9,8,4,6,7,5,2,3],[3,6,5,9,8,2,4,1,7],[4,2,7,1,3,5,8,6,9],[9,5,6,7,4,8,2,3,1],[8,1,3,2,9,6,7,4,5],[2,7,4,3,5,1,6,9,8]];
  var successBoard = [[6,3,9,5,7,4,1,8,2],[5,4,1,8,2,9,3,7,6],[7,8,2,6,1,3,9,5,4],[1,9,8,4,6,7,5,2,3],[3,6,5,9,8,2,4,1,7],[4,2,7,1,3,5,8,6,9],[9,5,6,7,4,8,2,3,1],[8,1,3,2,9,6,7,4,5],[2,7,4,3,5,1,6,9,8]];
  var game1;
  var game2;

  beforeEach(function() {
    game1 = new Game(failBoard);
    game2 = new Game(successBoard);
  });

  it('should contain a board', function(){
    expect(game2.board).toEqual(successBoard);
    expect(game1.board).toEqual(failBoard);
  });


  it('should check if a row has a duplicate number', function(){
    expect(game2.checkRows()).toEqual(true);
    expect(game1.checkRows()).toEqual(false);
  });

  it('should check if a column has a duplicate number', function(){
    expect(game2.checkColumns()).toEqual(true);
    expect(game1.checkColumns()).toEqual(false);
  });

  it('should check if a grid has a duplicate number', function(){
    expect(game2.checkGrid()).toEqual(true);
    expect(game1.checkGrid()).toEqual(false);
  });

  it('should check if a board is valid', function(){
    expect(game2.checkBoard()).toEqual(true);
    expect(game1.checkBoard()).toEqual(false);
  });

});
