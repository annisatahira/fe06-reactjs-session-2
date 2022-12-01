const CompletedButton = (props) => {
  return (
    <button onClick={(event) => props.changeStatus(event.target.innerText)}>
      {props.status}
    </button>
  );
};

export default CompletedButton;
