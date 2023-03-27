import 'normalize.css'
import { NavTabBar } from './components/NavTabBar'
import { Home } from './components/pages/Home'
import GlobalStyles from './styles/globalStyles'

function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Home />
      <NavTabBar />
    </div>
  )
}

export default App
