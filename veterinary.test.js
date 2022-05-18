describe("Tests Dogs features", () => {
    test("that i can create a dog and give it a name", async() => {
        let dogObject = {
            name: "Fifi",
            age: 4,
            breed: "Poodle"
        };
        let dog = new Dog(
            dogObject.name,
            dogObject.age,
            dogObject.breed
        );
        expect(dog).toBeTruthy();
        expect(dog).toMatchObject(dogObject);
        expect(dog.name).toMatch("Fifi");
    });
    test("that the name is capitalized", async() => {
        let dog = new Dog(
            "fIFI",
            4,
            "Poodle"
        );
        expect(dog.name).toMatch("Fifi");
    });
    test("that a dog may bark", async() => {
        let washington = new Dog(
            "Washington",
            2,
            "Doberman"
        );
        expect(washington.bark()).toMatch("Woof, woof, woof.");
    });
});

function Dog(name, age, breed) {
    let _name = name.toLowerCase();
    this.name = _name.charAt(0).toUpperCase() + _name.slice(1);
    this.age = age;
    this.breed = breed;
};

Dog.prototype.bark = function() {
    return "Woof, woof, woof.";
};

