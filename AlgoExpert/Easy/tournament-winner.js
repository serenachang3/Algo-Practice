//solution 1
// O(n)time | O(n) space?
//2 for loops --> not most optimal 

function tournamentWinner(competitions, results) {
  // Write your code here.
  let hash = {};
  let winnerName = "";
  let winnerPoints = 0;

  for (let i = 0; i < results.length; i++) {
    let game = competitions[i];
    let winner = results[i];

    if (winner === 1) {
      if (hash.hasOwnProperty(game[0])) {
        hash[game[0]] += 3;
      } else {
        hash[game[0]] = 3;
      }
      console.log("hash", hash);
    } else {
      if (hash.hasOwnProperty(game[1])) {
        hash[game[1]] += 3;
      } else {
        hash[game[1]] = 3;
      }
    }
  }

  const keysArr = Object.keys(hash);

  for (let i = 0; i < keysArr.length; i++) {
    if (hash[keysArr[i]] > winnerPoints) {
      winnerName = keysArr[i];
      winnerPoints = hash[keysArr[i]];
    }
  }
  return winnerName;
}

//Solution  2
//O(n) time (n is number of competitions) | O(k) space (k is the number of teams competiting in the  tournment)
//1 for loop

const HOME_TEAM_WON = 1

function tournamentWinner(competitions, results) {
  // Write your code here.
	let currentBestTeam = '';
  //have to use brackets around currentBestTeam because it is a VARIABLE...
  //otherwise.. it will input "currentBestTeam" string as the KEY!!!
	let scores = {[currentBestTeam] : 0};  
	
	for ( let i = 0 ; i < competitions.length ; i++) {
		
		const result = results[i];
		const [homeTeam, awayTeam] = competitions[i];
		
		const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
		
		updateScores(winningTeam, 3, scores);
		
		if(scores[winningTeam] > scores[currentBestTeam]) {
			currentBestTeam = winningTeam;
		}
	}
  return currentBestTeam;
}

function updateScores(team, points, scores){
	if(!(team in scores)){  // in operator returns true if the specified property is in the specified object or prototype
		scores[team] = 0
	}
	scores[team] += points;
}
