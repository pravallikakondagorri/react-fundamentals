import Productcard from "./Productcard.jsx"
function App() {
  const productName="book"
  const price=30
  const isAvailable="fftfy"
  return (
    <div>
     
    <Productcard product={productName} cost={price} stock={isAvailable}/>
    
    </div>
  )
}

export default App
