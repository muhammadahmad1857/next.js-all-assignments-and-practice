export default function Campus(props: any) {
  return (
    <div className="campus-col">
      <img src={props.img} alt="" />
      <div className="layer">
        <h3>{props.heading}</h3>
      </div>
    </div>
  );
}
