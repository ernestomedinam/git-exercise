// for (let age = 10; age < 105; age++) {
//     let exerciseNature = (Math.random() >= 0.5) 
//         ? "mentales"
//         : "fisicos"
//     // console.log("ejercicios", exerciseNature);
//     // console.log("ejercicios " + exerciseNature);
//     console.log(`ejercicios ${exerciseNature} para toda la familia`);
// }


// for (let index = 0; index < friends.length; index++) {
    //     console.log(`Hola, ${friends[index]}`);
// }


// var autos = [
//     {tipo:"Volvo", año:2016},
//     {tipo:"Saab", año:2001},
//     {tipo:"BMW", año:2010}
// ];
// console.log(autos);
// autos.sort((carA, carB) => (carA.año > carB.año)
//     ? -1
//     : (carB.año > carA.año)
//         ? 1
//         : 0
// );
// console.log(autos);



// let accesories = [
//     "glasses",
//     "a hat",
//     "a gold chain"
// ];

// let friendsObject = {
//     oldestFriend: "Elvis",
//     hippiestFriend: "John",
//     highestFriend: "Bob",
//     greatestFriend: "Bryan"
// }

// friendsObject.greatestFriend
// friendsObject["greatestFriend"]

// for (let property of friendsObject) {
//     console.log(property);
//     // console.log(`${property}: ${friendsObject[property]}`);
// }


// // for ... of
// for (let friend of friends) {
//     console.log(`Hola, ${friend}`);
// }

// // for ... in
// for (let index in friends) {
//     console.log(`Hola, ${friends[index]}`);
// }

let found = false;
while (!found) {
    console.log("pensando");
    if (Math.random() > 0.5) {
        console.log("saliendo");
        break;
    }
}

for (let i=0; i<6; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}