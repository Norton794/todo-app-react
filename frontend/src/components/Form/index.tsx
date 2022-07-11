import styles from "../../styles/Form.module.css";
export default function Form(props: any) {
  return (
    <form className={styles.form} onSubmit={(e) => props.add(e)}>
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
