import emailjs from "emailjs-com"
import { useState } from "react"
const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const { name, email, message, subject } = mailData
  const [error, setError] = useState(null)
  const onChange = (e) => setMailData({ ...mailData, [e.target.name]: e.target.value })
  const onSubmit = (e) => {
    e.preventDefault()
    if (name.length === 0 || email.length === 0 || message.length === 0 || subject.length === 0) {
      setError(true)
      clearError()
    } else {
      emailjs
        .send(
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
        )
        .then(
          (response) => {
            setError(false)
            clearError()
            setMailData({ name: "", email: "", message: "", subject: "" })
          },
          (err) => {
            console.log(err.text)
          }
        )
    }
  }
  const clearError = () => {
    setTimeout(() => {
      setError(null)
    }, 2000)
  }
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Let's Collaborate.</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-xl-12 m-15px-tb">
            <div className="contact-info">
              <h4>Feel free to contact me.</h4>
              <ul>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">
                    <a href="mailto:dev.jesserinelopez@gmail.com">dev.jesserinelopez@gmail.com</a>
                  </span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">
                    <a href="callto:+6591365437">+65 9136 5437</a>
                  </span>
                </li>
                <li className="media">
                  <i className="ti-linkedin" />
                  <span className="media-body">
                    <a href="https://www.linkedin.com/in/jesserinel/" target="_blank">
                      linkedin.com/jesserinel
                    </a>
                  </span>
                </li>
                <li className="media">
                  <i className="ti-github" />
                  <span className="media-body">
                    <a href="https://github.com/jesserine" target="_blank">
                      github.com/jesserine
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"
                  allowFullScreen=""
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
export default Contact
