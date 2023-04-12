import '@base/styles/globals.css'
import { store } from '@base/store/main'
import Layout from "@components/Layout"
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }: any) {
  return <Provider store={store}><Component {...pageProps} /></Provider>
}
