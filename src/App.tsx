import Contact from "./sections/Contact"
import Home from "./sections/Home"
import Nav from "./components/Nav"
import Features from "./sections/Features"

function App() {
  return (
    <>
      <Nav />
      <Home />
      <Features />
      {/* <div className="bg-gradient-to-r from-dark-blue to-linear p-5">
        <Contact />
      </div> */}
    </>
  )
}

export default App