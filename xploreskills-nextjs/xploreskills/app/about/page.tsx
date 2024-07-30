import Image from "next/image";
import Button from "../(components)/button";
import Header from "../(components)/header";
export default function About() {
  return (
    <div>
      <Header title="ABOUT US" />
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world's largest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            <Button text="Explore now" />
          </div>
          <div className="about-col">
            <img src="img/about.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}
