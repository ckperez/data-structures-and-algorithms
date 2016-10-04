//Hackertown elections consist of each citizen appending/pushing the name of their choice for mayor, as a string, to an array.
//The winner is decided by whichever candidate has the most votes.
//In the event of a tie, the winner is the chosen alphabetically--whichever candidate's name comes last in the phonebook is the winner.

//Write a function that takes in the array of votes and returns the winner.

function electionWinner(votes){
  votes = votes.sort();
  var winner;
  var tie = [];
  var separated = [];
  var contender;
  while (votes.length) {
    contender = votes.splice(0, votes.lastIndexOf(votes[0]) + 1 || votes.lastIndexOf(votes[0]));
    separated.push(contender);
  }
  separated.sort(function(a,b){
    return b.length - a.length;
  });
  if (separated[0].length > separated[1].length) {
    winner = separated[0][0];
  } else {
    separated = separated.filter(function(item){
      return item.length === separated[0].length;
    });
    for (var i = 0; i < separated.length; i++){
      tie = tie.concat(separated[i]);
    }
    winner = tie.sort().pop();
  }
  console.log('winner: ', winner);
  return winner;
}

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

var testArray1 = ['Alex', 'Sam', 'Pat', 'Chris', 'Jess', 'Winner', 'X', 'Winner', 'Alex', 'Sam', 'Pat', 'Chris', 'Jess', 'Winner', 'X'];

var testArray2 = ['Chris', 'Jess', 'Winner','Chris', 'Jess', 'Winner', 'Loser'];

//electionWinner(testArray1);
//electionWinner(testArray2);

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

function hackerTownMayor(votes) {

  var voteMap = votes.reduce(function())

}

hackerTownMayor(testArray1)
