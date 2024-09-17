import Navbar from './components/Navbar'
import MainComponent from './components/MainComponent'
import './App.css'
import Infocards from './components/InfoCards'
import Matter from './components/matter'
import CardData from './components/CardData'
import Features from './components/Features'
import Footer from './components/Footer'
import LastLine from './components/LastLine'


function App() {

  return (
    <div>
    <Navbar />
    <MainComponent />
    <Infocards />
    <div className="card-container">
    {CardData.map((card, index) => (
        <Matter
          key={index}
          image={card.image}
          heading={card.title}
          description={card.description}
        />
      ))}
    </div>
    <Features />
    <Footer />
    <LastLine />
    </div>
   
  )
}

export default App
