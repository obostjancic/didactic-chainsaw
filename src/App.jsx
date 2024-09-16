import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div class={styles.App}>
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}
      >
        Throw error
      </button>
    </div>
  );
}

export default App;
