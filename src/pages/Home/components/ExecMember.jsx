function ExecMember(props) {
  return (
    <div className="exec-member">
      <img className="meet-the-exec-board-picture" src={props.image} alt="" />
      <h2>{props.name}</h2>
      <h3>{props.title}</h3>
      <p>{props.caption}</p>
    </div>
  );
}

export default ExecMember;
