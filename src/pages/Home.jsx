import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"

function Home() {
    return(
        <>
            <Header/>
            <h1>Home</h1>
            <p>Subtitle</p>
            <Button buttonStyle='primary' arrow>Olá</Button>
            <div className="container">
                <Hero/>
            </div>
            <Footer/>
        </>
    )
}

export default Home