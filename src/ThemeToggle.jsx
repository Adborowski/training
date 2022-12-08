import styles from "./App.module.css";
import { ThemeProvider } from "./ThemeContext";
import { useThemeUpdate, useTheme } from "./ThemeContext";

const ThemeToggle = () => {
  const handleThemeChange = useThemeUpdate();
  const darkTheme = useTheme();
  return (
    <ThemeProvider>
      <div className={styles.themeToggle}>
        <button
          className={darkTheme ? styles.on : styles.off}
          onClick={handleThemeChange}
        >
          <div className={styles.indicator}>
            <span>☽</span>
          </div>
        </button>
      </div>
    </ThemeProvider>
  );
};

export default ThemeToggle;
