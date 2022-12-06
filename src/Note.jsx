import styles from "./App.module.css";
import { useState } from "react";

const Note = (props) => {
  const { title, paragraphs } = props.note;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className={isOpen ? styles.open : styles.closed}
      key={title}
      onClick={handleClick}
    >
      <button>◀</button>
      <h2>{title}</h2>
      <article>
        {paragraphs.map((para) => {
          return <p key={para.props.children.toString()}> {para} </p>;
        })}
      </article>
    </section>
  );
};

export default Note;
