const AddUserCard = (props) => {
  console.log(props);
  return (
    <div>
      {props.userData.map((item) => (
        <p key={Math.random().toString()}>
          {" "}
          {` ${item.name} ( ${item.age} Years Old)`}{" "}
        </p>
      ))}
    </div>
  );
};

export default AddUserCard;
