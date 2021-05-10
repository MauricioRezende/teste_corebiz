import Header from './components/Header'
import CarouselBanners from './components/CarouselBanners'
import CarouselItens from './components/CarouselItens'
import News from './components/News'
import Footer from './components/Footer'

import './GlobalStyle.css'
import { AuthProvider } from './providers/auth'

function App() {
    return (
        <>
            <AuthProvider>
                <Header />
                <CarouselBanners />
                <CarouselItens />
                <News />
                <Footer />
            </AuthProvider>
        </>
    )
}

export default App
