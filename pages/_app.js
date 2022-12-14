import '../styles/globals.scss'
import {Layout} from '../components'
import StateContext from '../context/StateContext'

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default MyApp
