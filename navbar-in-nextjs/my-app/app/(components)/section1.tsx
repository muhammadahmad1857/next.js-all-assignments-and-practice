import { url } from "inspector";
import styles from "@/app/page.module.css";
export default function Section1() {
  return (
    <div>
      <div className={styles.show_bg_2}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div className="navbar" style={{ marginTop: "5px" }}>
            <p style={{ fontSize: "x-large", color: "white" }}>
              <b style={{ color: "orangered" }}>A</b>hmad
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
              <li className="li1" style={{ color: "white" }}>
                Home
              </li>
              <li className="li1" style={{ color: "white" }}>
                About us
              </li>
              <li className="li1" style={{ color: "white" }}>
                Services
              </li>
              <li className="li2" style={{ color: "white" }}>
                projects
              </li>
              <li className="li3" style={{ color: "white" }}>
                Testimonial
              </li>
              <li className="li3" style={{ color: "white" }}>
                Contact
              </li>
              <li style={{ color: "white" }}>Download CV</li>
            </ul>
          </div>
        </div>

        <div className="ahmad" style={{ marginLeft: "170px" }}>
          <h1 style={{ color: "orangered", fontSize: "xx-large" }}>
            <b>Hi, I am Ahmad </b>
          </h1>
          <h2 style={{ color: "white" }}>Freeline UI/UX Designer</h2>
          <p style={{ color: "white" }} className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Suscipit ipsum nihil nisi dignissimos rem reiciendis <br />{" "}
            molestiae porro exercitationem illo distinctio dicta <br /> cumque
            vero, rerum quod similique.
          </p>
          <div
            style={{ display: "flex", alignItems: "center", gap: "30px" }}
            className="black"
          >
            <button
              className="black"
              style={{
                backgroundColor: "orangered",
                color: "white",
                border: "none",
                fontSize: "x-small",
                textAlign: "center",
                height: " 30px",
                width: "100px",
              }}
            >
              Hire me
            </button>
            <button
              className="black"
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "x-small",
                border: "none",
                textAlign: "center",
                height: "30px",
                width: " 100px",
              }}
            >
              Contact me
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
