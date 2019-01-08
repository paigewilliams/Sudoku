import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Game } from './../src/game.js';
import './styles.css';

$(document).ready(function(){
  $("#board").submit(function(event){
    event.preventDefault();
    var tempBoard = [[],[],[],[],[],[],[],[],[]];
    var incomplete = false;
    for(var i = 0; i < 9; i++) {
      for(var j = 0; j < 9; j++) {
        var number = parseInt($(`#cell-${9*i+j}`).val());
        if(!number) {
          incomplete = true;
          break;
        }
        tempBoard[i].push(number);
      }
    }
    var game = new Game(tempBoard);
    if(incomplete) {
      $("#output").html("Please fill out the entire board");
    } else {
      var valid = game.checkBoard();
      if(valid) {
        $("#output").html("Your board is a valid solution");
      } else {
        $("#output").html("Your board is not a valid solution");
      }
    }
  });
});
