import { writable } from "svelte/store";
//to avoid having to pass data down and back up again
// this creates data that is widely assessable throughout the app
// works much like context providers in react

// In file use
// import BookStore from "../stores/bookStore.js"
// then in code can refer directly to the data with $BookStore

const BookStore = writable([
  {
    title: "The Starless Sea",
    genre: "Fantasy Fiction",
    author: "Erin Morgenstern",
    rec: 5,
    doNotRec: 1,
    id: 1,
  },
  {
    title: "The Night Circus",
    genre: "Fantasy Fiction",
    author: "Erin Morgenstern",
    rec: 9,
    doNotRec: 2,
    id: 2,
  },
  {
    title: "The Guernsey Literary and Potato Peel Pie Society",
    genre: "Historical Fiction",
    author: "Mary Ann Shaffer",
    rec: 4,
    doNotRec: 3,
    id: 3,
  },
]);

export default BookStore;
