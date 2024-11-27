
import './App.css'
import { SearchContextProvider } from './components/context/contextApi'
import MainHome from './MainHome'

function App() {

  return (
  <div>
 <SearchContextProvider>
 <MainHome/>
 </SearchContextProvider>


  </div>
  )
}

export default App
   