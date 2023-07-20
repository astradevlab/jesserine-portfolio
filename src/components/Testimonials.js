import { Fragment } from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2, spaceBetween: 25 },
    },
  };
  return (
    <Fragment>
      <div className="title">
        <h3>Testimonials.</h3>
      </div>
      <Swiper {...props}>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/luis.jpeg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            Jesserine is a kind, tolerant, considerate, understanding, honest, resilient and reliable person, 
            that can bring great value to any team in all of technical skills, soft skills, positive culture and human traits.
            She is both a good software engineer and project manager, with sensitivity and understanding to explore and specify 
            requirements to address customer's needs while also addressing developer and team concerns concerns. Jesserine's 
            human qualities together with her tech knowledge on cross-platform mobile development, web, server and APIs, 
            synergize with her project management skills and make her a valuable asset in any software development team.
            </p>
            <h6>Luis Miguel Serrano</h6>
            <span>CTO at Rise.IO</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/romelyn.jpeg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            Jesserine is determined, intelligent, and is always up for big challenges. She always does her best and shows 
            she is capable of bigger roles. As a new product owner, a heavy role indeed, she has done a great job of relaying 
            and polishing requirements. Doing the PO role and at the same time a developer supporting customer issues, she 
            manages to deliver both without sacrificing the quality. Definitely a great asset to the company.
            </p>
            <h6>Romelyn Nellas</h6>
            <span>Software Engineer at Full Scale</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/nick.jpeg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            What I like about Jess is that she is determined, dedicated, and focused on the things she does. 
            She is an exemplary mobile software developer.
            </p>
            <h6>Nicolas James Chiong</h6>
            <span>Technical Consultant at Compass Group USA</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial-01 media">
          <div className="avatar">
            <img src="static/img/jayson.jpeg" title="" alt="" />
          </div>
          <div className="media-body">
            <p>
            Jesserine is a highly capable, highly motivated member of our development team! She is well organized, 
            diligent, and a fast learner. She doesn't hesitate to asks great questions, and then provide solutions 
            as well. She also handles unexpected roadblocks with ease and confidence. Great to have her on the team. 
            </p>
            <h6>Jayson Catubig</h6>
            <span>Test Engineering Associate Manager at Accenture</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="owl-dots"></div>
    </Fragment>
  );
};
export default Testimonials;
