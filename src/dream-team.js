const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(team) {
  if(!Array.isArray(team)) return false
  let teamName = []

  for(let i = 0; i < team.length; i++){
    if(typeof team[i] == 'string') teamName.push(team[i].trim()[0].toUpperCase())
  }

  teamName.sort((a, b) => a.localeCompare(b))
  return teamName.length == 0 ? false : teamName.join('')
}

module.exports = {
  createDreamTeam
};
