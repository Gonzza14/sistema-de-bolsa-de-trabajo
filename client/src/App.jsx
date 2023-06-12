import 'normalize.css'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import GlobalStyles from './styles/globalStyles'
import { Rutas } from './components/Rutas'

function App() {

  return (
    <div>
      <GlobalStyles />
      <Rutas />
    </div>
  )
}

export default App
