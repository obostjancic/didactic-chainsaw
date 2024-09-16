import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div class={styles.App}>
      <button
        type="button"
        onClick={() => {
          throw new Error("Sentry Frontend Error should have git commit");
        }}
      >
        Throw error updated
      </button>
    </div>
  );
}

export default App;
