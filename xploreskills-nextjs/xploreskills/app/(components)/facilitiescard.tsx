export default function Facilitiescard(props: any) {
  return (
    <div className="facilities-col">
      <img src={props.img} alt="" />
      <h3>{props.heading}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        omnis asperiores atque aperiam.
      </p>
    </div>
  );
}
