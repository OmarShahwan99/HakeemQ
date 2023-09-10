import classes from "./Droplist.module.css";

const Droplist = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <ul className={classes.droplist}>
      <li>More Info</li>
      <li onClick={deleteHandler}>Delete</li>
    </ul>
  );
};

export default Droplist;
