 // ----------- PROBLEM-1 -----------------
 function filterEvenNumbers(numbers: number[]): number[] {
   return numbers.filter(num => num % 2 === 0);
 }

 // Sample Input:
 const filterEvenNumbersResult = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

 console.log(filterEvenNumbersResult);
 // Sample Output:
 // [2, 4, 6]

 // =========================================================

 // ----------- PROBLEM-2 -----------------
 function reverseString(word: string): string {

   const letters = word.split("");
   const reversedLetters = letters.reverse();
   const finalResult = reversedLetters.join("");
   return finalResult;
 }
 // Sample Input:
 const reverseStringResult = reverseString("typescript");

 console.log(reverseStringResult);
 // Sample Output:
 // "tpircsepyt";

 // =========================================================

 // ----------- PROBLEM-3 -----------------

 type StringOrNumber = string | number;

 function checkType(value: StringOrNumber): string {

   if (typeof value === "string") {
     return "String";
   }

   return "Number";
 }

 // Sample Input 1:
 console.log(checkType("Hello"));
 // Sample Output 1:
 // "String";

 // Sample Input 2:
 console.log(checkType(42));
 // Sample Output 2:
 // "Number";



 // =========================================================

 // ----------- PROBLEM-4 -----------------

 function getProperty<T, K extends keyof T>(
   obj: T,
   key: K
 ): T[K] {
   return obj[key];
 }

 // Sample Input
 const user = {
   id: 1,
   name: "John Doe",
   age: 21
 };

 const getPropertyResult = getProperty(user, "name");

 console.log(getPropertyResult);
 // Sample Output:
 // "John Doe";



 // =========================================================

 // ----------- PROBLEM-5 -----------------
 interface Book {
   title: string;
    author: string;
   publishedYear: number;
 }

 function toggleReadStatus(book: Book) {

   return {
     ...book,
     isRead: true
   };
// }

// // Sample Input
// const myBook = {
//   title: "TypeScript Guide",
//   author: "Jane Doe",
//   publishedYear: 2024
// };

// const myBookResult = toggleReadStatus(myBook);

// console.log(myBookResult);


// // =========================================================

// // ----------- PROBLEM-6 -----------------
// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   grade: string;

//   constructor(name: string, age: number, grade: string) {
//     super(name, age);
//     this.grade = grade;
//   }

//   getDetails(): string {
//     return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
//   }
// }

// // Sample Input
// const student = new Student("Alice", 20, "A");

// console.log(student.getDetails());



// // =========================================================

// // ----------- PROBLEM-7 -----------------

// function getIntersection(
//   arr1: number[],
//   arr2: number[]
// ): number[] {

//   return arr1.filter(num => arr2.includes(num));
// }

// // Sample Input
// const result = getIntersection(
//   [1, 2, 3, 4, 5],
//   [3, 4, 5, 6, 7]
// );

// console.log(result);