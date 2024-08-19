const Item = (props) => {
  return (
    <>
      <div className="ContainerItem">
        <h2>{props.Title}</h2>
        <h3>{props.Subtitle}</h3>
        <div>{props.Picture}</div>
        <p>{props.Description}</p>
      </div>
    </>
  );
};
export default Item;
