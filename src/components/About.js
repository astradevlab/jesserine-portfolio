const About = () => {
  const skillsData = [
    { label: "Xamarin", asset: "xamarin.png" },
    { label: "React Native", asset: "react-native.png" },

    { label: "Typescript", asset: "typescript.png" },
    { label: "Javascript", asset: "javascript.png" },
    { label: "Android", asset: "android.png" },
    { label: "Swift", asset: "swift.png" },
    { label: "ASP.net", asset: "dot-net.png" },
    { label: "Node.js", asset: "nodejs.png" },
    { label: "Firebase", asset: "firebase.png" },
    { label: "Figma", asset: "figma.png" },
    { label: "My SQL", asset: "mysql.png" },
  ]
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <img src="static/img/jess-github.jpeg" title="" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>{`I'm`} a Mobile Application Developer with over 6 years of experience. </h3>
                <p>
                  I design and develop mobile applications using React Native and Xamarin Framworks.{" "}
                  {`I'm`} knowledgable in Android or iOS Native development and adopts test-driven
                  development, creating automated test cases for features and bug fixes. {`I'm`}{" "}
                  experienced
                </p>
                {/* <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Contact Me</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#">
                    <span>Github</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Education &amp; Skills</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2013-2017</span>
                <h6>Bachelor of Science in Computer Science</h6>
                <p>University of San Jose - Recoletos</p>
              </li>
              {/* <li>
                <span>2010-2012</span>
                <h6>Web Development</h6>
                <p>International Design Institute</p>
              </li>
              <li>
                <span>2010-2012</span>
                <h6>Search Engine Optimization</h6>
                <p>International Design Institute</p>
              </li> */}
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Tech Stack</h3>
              {skillsData.map((skill) => {
                return (
                  <>
                    <img
                      src={"/assets/logos/" + skill.asset}
                      height={40}
                      width={40}
                      style={{ margin: 5 }}
                    />
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <div className="separated" />
      </div>
    </section>
  )
}
export default About
