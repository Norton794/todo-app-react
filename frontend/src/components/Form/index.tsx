import { useContext } from "react";
import { ThemeContext } from "../../pages";
import styles from "../../styles/Form.module.css";
export default function Form(props: any) {
  const Theme = useContext(ThemeContext);
  return (
    <form className={Theme === "Dark" ? styles.form : styles.formLight} onSubmit={(e) => props.add(e)}>
      <div className="circle"></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        value={props.description}
        onChange={(e) => {
          props.setDescription(e.target.value);
        }}
      />
    </form>
  );
}
