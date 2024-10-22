import Button from "./componets/Button"
import picture from "./assets/png/profilee.jpg"

function App() {
  return (
    <div className="child">
      <Button image={picture} fname='Olaide' age='28' address='Ikorodu'/>
      <Button image={picture} fname='Olaide' age='28' address='Ikorodu'/>
      <Button image={picture} fname='Olaide' age='28' address='Ikorodu'/>
    </div>
  )
}

export default App
