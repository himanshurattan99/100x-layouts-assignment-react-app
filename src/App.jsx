import logo100x from './assets/100x.svg'
import LoginPage from './components/pages/Login/LoginPage'

function App() {
  return (
    <>
      <div class="bg-neutral-1000 font-inter">
        <header className="py-3 px-4 w-full absolute top-0">
          {/* 100x Logo */}
          <a href><img src={logo100x} alt="100x Logo" className="w-[3.45rem] mx-auto" /></a>
        </header>
        <LoginPage />
      </div>
    </>
  )
}

export default App