// pages/_app.js
import "../src/app/globals.css"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}