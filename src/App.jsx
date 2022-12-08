import styles from "./App.module.css";
import Training from "./Training";
import Note from "./Note";
import Async from "./Async";
import React from "react";
import ContextTraining from "./ContextTraining";
import ThemeToggle from "./ThemeToggle";
import { ThemeProvider, useTheme, useThemeUpdate } from "./ThemeContext";
import { useEffect } from "react";

function App() {
  const darkTheme = useTheme();

  const notes = [
    {
      title: "Shallow / Deep copy",
      paragraphs: [
        <span>
          A shallow copy of an object is a copy whose properties share the same
          references (point to the same underlying values) as those of the
          source object from which the copy was made. As a result, when you
          change either the source or the copy, you may also cause the other
          object to change too — and so, you may end up unintentionally causing
          changes to the source or copy that you don't expect. That behavior
          contrasts with the behavior of a deep copy, in which the source and
          copy are completely independent.
        </span>,
        <span>
          In JavaScript, standard built-in object-copy operations (spread
          syntax, Array.prototype.concat(), Array.prototype.slice(),
          Array.from(), Object.assign(), and Object.create()) do not create deep
          copies (instead, they create shallow copies).
        </span>,
        <span>
          One way to make a deep copy of a JavaScript object, if it can be
          serialized, is to use JSON.stringify() to convert the object to a JSON
          string, and then JSON.parse() to convert the string back into a
          (completely new) JavaScript object.
        </span>,
      ],
    },
    {
      title: "Primitive Value",
      paragraphs: [
        <span>
          A primitive (primitive value, primitive data type) is data that is not
          an object and has no methods or properties. There are 7 primitive data
          types: string number bigint boolean undefined symbol null
        </span>,
      ],
    },
    {
      title: "Array Length",
      paragraphs: [
        <span>
          Array.length = value" will delete elements in Value is less than the
          Array's actual length.
        </span>,
        <span>
          Some methods treat empty spots as undefined, and some skip them. It
          depends on the method - older methods tend to skip, while newer ones
          use Undefined.
        </span>,
      ],
    },
    {
      title: "Iterative Array Methods",
      paragraphs: [
        <span>
          every() filter() find() findIndex() findLast() findLastIndex()
          flatMap() forEach() group()* groupToMap()* map() some()`,
          `*experimental method with poor browser support
        </span>,
      ],
    },
    {
      title: "?? Operator (Nullish Coalescing)",
      paragraphs: [
        <span>
          The JavaScript double question mark (??) operator is called the
          nullish coalescing operator and it provides a default value when a
          variable or an expression evaluates to null or undefined.
          <code>const favoriteFruit = null;</code>
          <code>const result = favoriteFruit ?? 'You did not tell me';</code>
          <code>console.log(result); // "You did not tell me</code>
        </span>,
      ],
    },
    {
      title: "Iterators and Generators",
      paragraphs: [
        <span>
          Iterators make use of the for of loop. They are new ES6 syntax.
          <code>for (let i of 'abc') console.log(i)</code>
        </span>,
      ],
    },
  ];

  return (
    <div className={darkTheme ? styles.darkTheme : styles.App}>
      <ThemeToggle />
      <div className={styles.training}>
        <Training />
        {notes.map((note) => (
          <Note key={note.title} note={note} />
        ))}
        <Async />
        <ContextTraining />
      </div>
    </div>
  );
}

export default App;
