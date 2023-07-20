import dynamic from "next/dynamic";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout";
const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  return (
    <Layout>
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6>Hello, I am</h6>
                  <h1 className="font-alt">Jesserine Lopez</h1>
                  <p className="lead">
                  {`I'm`} A Passionate <TypingAnimation />
                  </p>
                  <p className="desc">
                    I deliver impactful solutions through effective problem-solving, 
                    combined with my background in the field, makes me confident 
                    in my capacity to make a valuable contribution to any team I work with.
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme" href="https://docs.google.com/document/d/1N4YEKurDWVUvuVLfMM5UUjQPwzKM55RP/edit?usp=sharing&ouid=101951879133321395056&rtpof=true&sd=true">
                      Download CV
                    </a>
                    &emsp;
                    &emsp;
                    <a className="px-btn px-btn-theme" href="/#contactus">
                    <span>Contact Me</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hb-img">
                  <img src="static/img/jesserine.JPG" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Portfolio */}
      {/* <Portfolio /> */}
      {/* End Portfolio */}
      {/* Blog */}
      <Blog />
      {/* End Blog */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
