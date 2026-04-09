import Nav from './components/Nav'
import Hero from './components/Hero'
import Principles from './components/Principles'
import Quote from './components/Quote'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ backgroundColor: '#FAFAFA', minHeight: '100vh' }}>
      <Nav />
      <main>
        <Hero />
        <Principles />
        <Quote />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
