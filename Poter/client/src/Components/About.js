import IndexNav from "./IndexNav";
import IndexFooter from "./IndexFooter";

export default function About() {
  return (
    <>
      <IndexNav />
      <div className="about-container">
        <div className="about">
          <div className="about__slide one">
            <div className="about__slide__title">
              <h1 className="about__slide__po">Po</h1>
              <h1 className="about__slide__ter">ter</h1>
            </div>
            <div className="about__slide__caption">Find Opinions</div>
          </div>
          <div className="about__slide two">
            <div className="about__slide__left">
              <div className="about__slide__para">
                Poter is a poll voting app created to make poll voting simple,
                yet elegant. Our team here at Poter is trying our best to help
                you have the best experience.
              </div>
            </div>
            <div className="about__slide__right">
              <div className="about__slide__heading">About Us</div>
            </div>
          </div>
          <div className="about__slide three">
            <div className="about__slide__left">
              <div className="about__slide__heading">Our Founder</div>
            </div>
            <div className="about__slide__right">
              <div className="about__slide__para">
                Poter was founded by a 15 year old coder who goes by the name of
                Potato. He hasn't revealed his real name to public yet. He being
                making Poter in Janurary of 2022, to create a simple to use,
                accessible, voting app.
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndexFooter />
    </>
  );
}
