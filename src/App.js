import Button from "./Button";
import styles from "./app.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>welcome!</h1>
      <Button text={"continue"} />
   </div>
 );
}
export default App;