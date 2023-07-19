import Preloader from "@/src/components/Preloader"
import Switcher from "@/src/components/Switcher"
import JLoHead from "@/src/JLoHead"
import "@/styles/globals.css"
import { Fragment } from "react"

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <JLoHead />
      <Switcher />
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  )
}
export default App
