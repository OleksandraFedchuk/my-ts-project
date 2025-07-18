import "./style.css";

// interface User {
//   name: string;
//   age?: number; // Це поле може бути відсутнім
// }

// const poly: User = {
//   name: "Poly",
// };

// console.log(poly.age); // ✅ Не буде помилки, оскільки age може бути відсутнім

// const jacob: User = {
//   name: "Jacob",
//   age: 36,
// };

// console.log(jacob.age);
// console.log(poly.name);
// console.log(poly.age);

// interface User {
//   readonly id: number;
//   name: string;
// }

// const paul: User = {
//   id: 37,
//   name: "Paul",
// };

// console.log(paul.name);
// console.log(paul.id);

interface User {
  id: number;
  name: string;
}

const getUserName = (users: User[]): string[] => {
  return users.map((user) => user.name);
};

const userList: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const names = getUserName(userList);
console.log(names);
