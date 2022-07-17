import React from "react";
import { ReactComponent as Enviar } from "../../Assets/enviar.svg";
import styles from "./PhotoCommentForm.module.css";
import useFetch from "../../Hooks/useFetch";
import { COMMENT_POST } from "../../api";
import Error from "../Helper/Error";

const PhotoCommentForm = ({ id, setComments, single }) => {
  const [comment, setComment] = React.useState("");
  const { request, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment("");
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${styles.containerbttn} ${
        single ? styles.single : ""
      }`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Deixe seu comentário"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button className={styles.button}>
        <span>Enviar</span>
        <i></i>
      </button>
      <Error error={error} />
    </form>
  );
};

export default PhotoCommentForm;
