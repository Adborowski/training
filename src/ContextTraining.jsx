import styles from "./App.module.css";
import Note from "./Note";
import { useTheme } from "./ThemeContext";

const ContextTraining = () => {
  const notes = [
    {
      title: "How to set up Context?",
      paragraphs: [
        <span>
          <code>{`export const ThemeContext = React.createContext()`}</code>
          Use to create your context. Export it so you can use it elsewhere.
        </span>,
      ],
    },
    {
      title: "What is a Context Provider?",
      paragraphs: [
        <span>
          <code>{`<ThemeContext.Provider value={darkTheme}> </ThemeContext.Provider>
        `}</code>
          Wrap all components in this so they can access the darkTheme value.
          Keep it to one value per provider. You can nest providers.
        </span>,
      ],
    },
  ];
  return (
    <div className={styles.ContextTraining}>
      <h1>Context</h1>
      {notes.map((note) => (
        <Note key={note.title} note={note} />
      ))}
    </div>
  );
};

export default ContextTraining;
