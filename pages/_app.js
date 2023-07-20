import Head from "next/head"
import { Fragment, useEffect, useState } from "react"
import PreLoader from "../src/layout/PreLoader"
import "../styles/glitch.css"
import "../styles/globals.css"
import Script from "next/script"
function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 1000)
  }, [])

  return (
    <Fragment>
      <Head>
        <title>Jesserine Lopez - Portfolio</title>
        {/* <!-- Favicon --> */}

        {/* Favicon Icon */}
        <link rel="shortcut icon" href="assets/logos/jesserine-animoji.jpeg" type="image/x-icon" />
        {/* <!-- plugin CSS --> */}
        <link href="static/plugin/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="static/plugin/font-awesome/css/all.min.css" rel="stylesheet" />
        <link href="static/plugin/et-line/style.css" rel="stylesheet" />
        <link href="static/plugin/themify-icons/themify-icons.css" rel="stylesheet" />
        <link href="static/plugin/owl-carousel/css/owl.carousel.min.css" rel="stylesheet" />
        <link href="static/plugin/magnific/magnific-popup.css" rel="stylesheet" />
        <link href="static/plugin/scroll/jquery.mCustomScrollbar.min.css" rel="stylesheet" />
        {/* <!-- theme css --> */}
        <link href="static/css/style.css" rel="stylesheet" />

        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PK6BDTX68T"></Script>
      <Script>
        {`  
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-PK6BDTX68T');
      `}
      </Script>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
