import Button from "../(components)/button";
import Header from "../(components)/header";
import Input from "../(components)/input";
import Text from "../(components)/text";
import TextArea from "../(components)/textarea";

export default function Blog() {
  return (
    <>
      <Header title="OUR POST" />
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <h2>Our Certificate & Online Program</h2>
            <h5>Aug 1, 2021</h5>
            <img src="../img/post.png" alt="" />
            <Text />

            <br />
            <Text />
            <br />
            <Text />
            <br />
            <Text />

            <div className="comment-box">
              x<h3>Leave a Comment</h3>
              <form className="comment-form">
                <Input place="Enter Name" type="Text" />
                <Input place="Enter Email" type="Email" />
                <TextArea place="Enter Message" row="5" />
                <Button text="Post Comment" />
              </form>
            </div>
          </div>

          <div className="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytics</span>
              <span>12</span>
            </div>
            <div>
              <span>Machine Learning</span>
              <span>29</span>
            </div>
            <div>
              <span>Computer Science</span>
              <span>15</span>
            </div>
            <div>
              <span>Data Analytics</span>
              <span>22</span>
            </div>
            <div>
              <span>Full Stack</span>
              <span>20</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
