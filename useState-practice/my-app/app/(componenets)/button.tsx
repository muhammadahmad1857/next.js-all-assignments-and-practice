export default function Button(props: any) {
  return (
    <div>
      <button
        onClick={props.function}
        style={{
          color: "white ",
          backgroundColor: "green",
          width: "500px",
          border: "none",
          height: "30px",
          cursor: "pointer",
        }}
      >
        {props.title}
      </button>
      <br />
      <br />
    </div>
  );
}
