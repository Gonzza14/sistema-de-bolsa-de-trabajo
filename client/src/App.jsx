import 'normalize.css'
import { NavTabBar } from './components/NavTabBar'
import { Home } from './components/pages/Home'
import { NavBar } from './components/NavBar'
import GlobalStyles from './styles/globalStyles'

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <NavBar/>
      <Home />
    </div>
  )
}

export default App
