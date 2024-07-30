import Header from "../(components)/header";
import Imagecard from "../(components)/imagecard";
import Textcard from "../(components)/textcard";

export default function Course() {
  return (
    <div>
      {" "}
      <Header title="OUR COURSES" />
      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Textcard heading="Undergraduate Programs" />
          <Textcard heading="Graduate Programs" />
          <Textcard heading="Adult Learning & Degree Completion" />
        </div>
      </section>
      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Imagecard img="img/course1.png" heading="Web Development" />
          <Imagecard img="img/course2.png" heading="Artificial Intelligence" />
          <Imagecard img="img/course3.png" heading="Data Science" />
        </div>
      </section>
    </div>
  );
}
