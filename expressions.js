let teams = [
    "Lobos de Altagracia",
    "Bandidos de Tucupita",
    "Leones de Guadalupe",
    "Cochi"
]
// map
let teamWelcomes = teams.map((currentTeam, index, teamsCopy) => {
    if (index % 2 === 0) {
        return `Hola, ${currentTeam}, bienvenidos`;
    }
});

// filter
let teamsNoStartWithLs = teams.filter((currentTeam, index, teamsCopy) => {
    // if (currentTeam.startsWith("L")) {
    //     return false;
    // }
    // return true;
    return !currentTeam.startsWith("L");
});

// for (let team of teams) {
//     if (team.startsWith("L")) continue;
//     teamsNoStartWithLs.push(team);
// }
// console.log(teamsNoStartWithLs);

// forEach
// teamsNoStartWithLs.forEach((currentTeam, index, arr) => {
//     console.log(currentTeam);
// });

// reduce 
let allTeams = teams.reduce(
    (resultString, currentTeam, index, teamsCopy) => {
        return resultString + " " + currentTeam;
    },
    "Saludos a:"
);
console.log(allTeams);

// every
console.log(teams.every((currentTeam) => currentTeam.length > 10));
// some
console.log(teams.some((currentTeam) => currentTeam.length > 10));

