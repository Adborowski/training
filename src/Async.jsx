import styles from "./App.module.css";
import Note from "./Note";
import { useEffect, useState } from "react";

const Async = () => {
  const [activity, setActivity] = useState();
  const activityUrl = "https://www.boredapi.com/api/activity";

  // PROMISES

  const fetchData = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setActivity(result.activity);
      });
  };

  useEffect(() => {
    fetchData(activityUrl);
  }, []);

  // ASYNC/AWAIT

  const fetchAsyncData = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hello world!");
      }, 1500);
    });
  };

  const sayHello = async () => {
    const message = await fetchAsyncData();
    console.log("Message:", message);
  };

  const notes = [
    {
      title: "Promise keywords",
      paragraphs: [
        <span>
          Keywords in Promises are: pending, resolve, reject, .then, .catch,
          .finally
        </span>,
        <span>
          A Promise is a native JavaScript object which has two traits: 1. It
          receives a single argument which is a function. This function needs to
          have two arguments, a<strong>resolve</strong>function and a
          <strong>reject</strong>
          function. The code written inside the promise needs to use one of
          these two functions. 2. It can be waited on using the then method (and
          other similar methods), or the await statement. (The async/await
          statements have a separate tutorial).
        </span>,
        ,
      ],
    },

    {
      title: "How to use Promises",
      paragraphs: [
        <a
          target="_blank"
          href="https://medium.com/@armando_amador/how-to-make-http-requests-using-fetch-api-and-promises-b0ca7370a444"
        >
          Source
        </a>,
        <span>
          First, try to fetch some data from an API.
          <code>const fetchPromise = fetch(url)</code>
        </span>,
        <span>
          fetchPromise returns a native JS Promise object in a pending state.
          Then, use
          <code>{"fetchPromise.then((result)=>{console.log(result)})"}</code>
        </span>,
        <span>
          This will return the resolved promise. But that's a HTTP response. To
          get the value you want you need to use the<strong>json()</strong>
          method. That method is itself asynchronous and also returns a promise.
        </span>,
        <span>Random advice: {activity}</span>,
      ],
    },
  ];
  return (
    <div className={styles.Async}>
      <h1>Async</h1>
      {notes.map((note) => (
        <Note key={note.title} note={note} />
      ))}
    </div>
  );
};

export default Async;
