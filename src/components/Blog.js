import Link from "next/link";

const Blog = () => {
  return (
    <section
      id="projects"
      data-nav-tooltip="Projects"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Projects.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://www.ncr.com/product-catalog/ncr-fastlane-mobile-shopper">
                  <a>
                    <img src="static/img/flms.png" title="" alt="" width="600" height="350" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">NCR Corporation</div>
                <h6>
                  <Link href="https://www.ncr.com/product-catalog/ncr-fastlane-mobile-shopper">
                    <a>
                      Fastlane Mobile Shopper
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
              <Link href="https://www.tritechretail.com/topic/aim_mobile">
                  <a>
                    <img src="static/img/aimmobile.png" title="" alt="" width="600" height="350"/>
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">Tritech Retail</div>
                <h6>
                  <Link href="https://play.google.com/store/apps/details?id=com.tritech.aimmobile&gl=US">
                    <a>
                      AIM Mobile
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="">
                  <a>
                    <img src="static/img/fishingbuddy.png" title="" alt="" width="600" height="350" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">Freelance</div>
                <h6>
                  <Link href="">
                    <a>
                      Fishing Buddy mobile application
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                <Link href="https://play.google.com/store/apps/details?id=zone.acumen.pinpin&gl=US">
                  <a>
                    <img src="static/img/pinpin.png" title="" alt="" width="600" height="350" />
                  </a>
                </Link>
              </div>
              <div className="blog-info">
                <div className="meta">Element7</div>
                <h6>
                  <Link href="https://play.google.com/store/apps/details?id=zone.acumen.pinpin&gl=US">
                    <a>
                      PinPin
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-12 read-more-blog text-center">
            <Link href="/">
              <a className="px-btn px-btn-theme">More Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
