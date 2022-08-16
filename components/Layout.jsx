import Head from "next/head"

import { Navbar,Footer } from "."

const Layout = ({children})=>{
    return (
        <div className="layout">
        <Head>
          <title>New Year Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer className="123">
          <Footer />
        </footer>
      </div>
    )

}

export default Layout