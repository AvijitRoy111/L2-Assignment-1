TypeScript Generics

TypeScript এর সবচেয়ে powerful feature গুলোর মধ্যে একটি হলো `Generics`।  
এটি এমন একটি system যেটা reusable এবং type-safe code লিখতে সাহায্য করে।

<!-- যখন একই logic বিভিন্ন ধরনের data এর জন্য ব্যবহার করতে হয়, তখন Generics অনেক useful হয়। -->

<!-- বড় project এ clean এবং maintainable code লেখার জন্য Generics অনেক helpful। -->

<!-- Generic Function কীভাবে কাজ করে -->

<!-- Generics এ type এর জায়গায় placeholder ব্যবহার করা হয়। -->

function identity<T>(value: T): T {
  return value;
}

এখানে T হলো generic type parameter।
এটা placeholder এর মতো কাজ করে।

মানে function call করার সময় TypeScript automatically বুঝে নেয় T আসলে কোন type হবে।

const name = identity("John");

const age = identity(21);

এখানে:

.প্রথম function call এ T হবে string
.দ্বিতীয় function call এ T হবে number

TypeScript automatically type detect করে নিচ্ছে।

এটাই Generics এর সবচেয়ে বড় সুবিধা।


function identity(value: any): any {
  return value;
}

এটা কাজ করবে ঠিকই, কিন্তু TypeScript আর exact type বুঝতে পারবে না।

ফলে ভুল হওয়ার chance বেড়ে যায়।


Array এর সাথে Generics

Generics array এর সাথেও খুব useful।

function getFirstItem<T>(items: T[]): T {
  return items[0];
}

এখন এটা number array বা string array দুইটার সাথেই কাজ করবে।

const firstNumber = getFirstItem([10, 20, 30]);

const firstString = getFirstItem(["apple", "mango"]);

.firstNumber হবে number
.firstString হবে string

TypeScript automatically বুঝে নিচ্ছে কোনটার type কী।

Object এর property safely access করার সময়ও Generics অনেক useful।
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

এখানে K extends keyof T মানে key অবশ্যই object এর মধ্যে থাকতে হবে।
const user = {
  id: 1,
  name: "John",
  age: 21,
};

const userName = getProperty(user, "name");

ভুল Key দিলে কী হবে।যদি ভুল key দেই তাহলে TypeScript error দেখাবে।

// getProperty(user, "email");

কারণ email user object এর মধ্যে নেই।

আমার কাছে Generics এর সবচেয়ে ভালো দিক হলো reusable code লেখা যায়, কিন্তু type safety নষ্ট হয় না। বড় project এ clean এবং maintainable code লিখতে এটা অনেক helpful।