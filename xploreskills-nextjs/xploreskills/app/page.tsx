import Image from "next/image";
import Navbar from "./(components)/navbar";
import Button from "./(components)/button";
import Textcard from "./(components)/textcard";
import Campus from "./(components)/campus";
import Facilitiescard from "./(components)/facilitiescard";
import Testimonial from "./(components)/testimonial";
import Link from "next/link";
import Button2 from "./(components)/button2";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section className="header">
        <Navbar />
        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <Button2 name="Visit Us To Know More" href="#" />
        </div>
      </section>
      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>
           EXPLORE OUR 60+ <br /> MAJOR PROGRAMS
        </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <Textcard heading="Undergraduate Programs" />
          <Textcard heading="Graduate Programs" />
          <Textcard heading="Adult Learning & Degree Completion" />
        </div>
      </section>
      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Campus heading="DELHI" img="img/Campus1.png" />
          <Campus heading="HYDERABAD" img="img/Campus2.png" />
          <Campus heading="MUMBAI" img="img/Campus3.png" />
        </div>
      </section>
      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Facilitiescard img="img/libary.png" heading="Best Libary" />
          <Facilitiescard img="img/playground.png" heading="Athletics" />
          <Facilitiescard img="img/food.png" heading="Tasty and Healthy Food" />
        </div>
      </section>
      <div className="row">
        <Testimonial star="fa fa-star" />
        <Testimonial star="fa fa-star-half-alt" />
      </div>
      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <Button2 name="CONTACT US" href="/contact" />
      </section>
    </>
  );
}
