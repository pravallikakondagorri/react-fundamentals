import Productcard from "./Productcard.jsx"
import UseAvatar from "./UseAvatar.jsx"
function App() {
  const productName="chocolate"
  const price=5000
  const isAvailable=true
  const Name="PRAVALLIKA"
  const course="Btech(CSE)"
  const Rollno="24VV1A0535"
  const BloodGroup="B+"
  const DOB="16/08/2007"
  return (
    <div>
     
    <Productcard product={productName} cost={price} stock={true}/>
    <Productcard product={productName} cost={price} stock={false}/>
    <UseAvatar Name={Name} Course={course} Rollno={Rollno} BloodGroup={BloodGroup}
    DOB={DOB}/>
    </div>
  )
}

export default App
