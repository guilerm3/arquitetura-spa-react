import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/ContactForm/ContactForm"
import { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

function Contact() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.contact} image='contact.svg' />
            <div className="container">
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Contact