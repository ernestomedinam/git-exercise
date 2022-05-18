let person = {
    nationality: "Venezolano",
    despedir: function() {
        console.log("chao");
    }
};
let friends = [
    {
        name: "Daniel",
        lastName: "Medina"
    },
    {
        name: "Bryan",
        lastName: "Garc'ia"
    },
    {
        name: "Pedro",
        lastName: "Maldonado"
    },
]
console.log(person);
person.name = "Ernesto";
console.log(person);
person["lastName"] = "Medina";
console.log(person);
person.saludar = function saludar() {
    console.log(`Hola, me llamo ${this.name} ${this.lastName}, mucho gusto.`);
}
console.log(person);
person.saludar();

// todos mis amigos en una fila
friends.push(person);

// paso uno por uno
for (let friend of friends) {
    // pregunto (tiene edad?)
    if (!("age" in friend)) {
        // si no tiene, le agrego la edad con base en un valor aleatorio
        // friend.age = Math.floor(Math.random() * 20) + 20;
        Object.assign(
            friend,
            {
                age: Math.floor(Math.random() * 20) + 20
            }
        );
    } 
}




console.log(friends);