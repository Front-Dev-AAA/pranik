import './App.css'
import Navbar from './components/Navbar'
import useRouters from './components/useRouters'


function App() {
  const routes = useRouters();

  return (
    <>

      <div className="wrapper">
        <div className="wrapper__container">
          <h1 className="titleApp">Небольшое SPA-приложение взаимодействующие с сервером</h1>
          <Navbar />
          {routes}
        </div>
      </div>

    </>
  )
}

export default App
