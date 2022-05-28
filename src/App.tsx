import Header from './components/Header'
import Toggle from './components/Header/Toggle'
import './index.css'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Toggle defaultOnAll={false} />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App