`use client`;

export default function Teachersform(props: any) {
  return (
    <div>
      <h1>{props.title}</h1>
      <br />
      <br />
      <input
        style={{ height: "30px", width: "300px" }}
        type="text"
        placeholder="Enter you name"
      />
      <br />
      <br />
      <input
        style={{ height: "30px", width: "300px" }}
        type="text"
        placeholder={props.teacher}
      />
      <br />
      <br />
      <input
        style={{ height: "30px", width: "300px" }}
        type="text"
        placeholder="Enter your age"
      />
      <br />
      <br />
      <input
        style={{ height: "30px", width: "300px" }}
        type="text"
        placeholder={props.place1}
      />

      <br />
      <br />
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Male</p>
        <input type="radio" name="gender" id="male" />
        <p>Female</p>
        <input type="radio" name="gender" id="female" />
      </div>
      <br />
      <select
        style={{ height: "30px", width: "300px" }}
        name="class"
        id="class"
      >
        <option
          disabled
          selected
          hidden
          value="select your class where you teach in your previous school"
        >
          {props.disabled}
        </option>
        <option value="Montessori Section">Montessori Section</option>
        <option value="junior Section">junior Section</option>
        <option value="Primary Section">Primary Section</option>
        <option value="High Section">High Section</option>
      </select>
      <br />
      <br />
      <button
        style={{
          backgroundColor: "goldenrod",
          color: "white",
          height: "30px",
          width: "300px",
          border: "none",
        }}
      >
        Submit
      </button>
    </div>
  );
}
