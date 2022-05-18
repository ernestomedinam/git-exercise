describe("function multiplyN", () => {
    test("that n numbers except 0 are multiplied using this function", () => {
        let numbers = [10, 50, 22, 3, 0];
        let result = multiplyN(...numbers);
        expect(result).not.toBe(0);
    });
});

function multiplyN(...numbers) {
    let total = 1;
    for (let number of numbers) {
        if (number === 0) continue;
        total *= number;
    }
    return total;
    // return numbers.reduce(
    //     (acc, number) => {
    //         return (number === 0)
    //             ? acc
    //             : acc * number;
    //     }, 1
    // );
}
