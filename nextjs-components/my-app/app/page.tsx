import Image from "next/image";
import styles from "./page.module.css";
import Teachersform from "../components/teacherform";
import List from "../components/list";
export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ display: "flex", gap: "35px" }}>
       

        <Teachersform
          title={"student form"}
          place1={"Enter your Roll no."}
          teacher={"Enter your Class"}
          disabled={"Select Your section"}
        />
        <Teachersform
          title={"Teacher form"}
          place1={"enter you prevoius school name"}
          teacher={"Enter your Qualification"}
          disabled={"select your class where you teach in your previous school"}
        />
        <br />
        <br />
        <br />
        <br />
        <List />
       
      </div>
    </main>
  );
}
