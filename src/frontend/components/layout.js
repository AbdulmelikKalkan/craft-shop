import Head from 'next/head'
import Navigation from './navbar'
import Footer from "./footer"
export default function Layout({ children }) {
    return (
        <div className='px-8 py-0'>
            <Head>
                <title>Craft Shop</title>
                <link rel="icon" href='/favicon.ico' />
                <meta name="description" content="Online Shopping" />
            </Head>
            <main className='flex flex-col min-h-screen'>
                <Navigation></Navigation>
                {children}
            </main>
            <Footer></Footer>
        </div>
    )
}