import 'normalize.css'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import GlobalStyles from './styles/globalStyles'

function App() {

  return (
    <div className="App">
      <GlobalStyles />
        <NavBar />
        <Home />
    </div>
  )
}

export default App
