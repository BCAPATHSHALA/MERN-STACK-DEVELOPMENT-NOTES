const a = [1, 4, 3, 6, 5, 8];

const firstValue = a.find((num)=>{
    return num%2==0;
});

console.log(firstValue);

const student = [
    {
        name: "Manoj Kumar",
        marks: 68
    },
    {
        name: "Devendra Nishad",
        marks: 80
    },
    {
        name: "Amit Rathor",
        marks: 99
    },
    {
        name: "Alok Nishad",
        marks: 15
    }
];

// Jin Student ke 50 se kam marks hai unko find out kro
const found = student.find((element)=>{
    return element.marks > 50;
});

console.log(found);