import BlogPost from "./BlogPost.jsx"
import Productcard from "./Productcard.jsx"
import UseAvatar from "./UseAvatar.jsx"
function App() {
 const productName = "chocolate"
  const price = 5000
  const isAvailable = true
  {/*const Name="PRAVALLIKA"
  const course="Btech(CSE)"
  const Rollno="24VV1A0535"
  const BloodGroup="B+"
  const DOB="16/08/2007"*/}
  {/*const product=[
    {
       productName:"book",
       price:5000,
       isAvailable:true
    },
    {
       productName:"pen",
       price:3000,
       isAvailable:true
    },
    {
       productName:"iphone",
       price:50000,
       isAvailable:true
    }
  ]*/}
  const posts = [
    {
      id:1,
      author: "pravallika",
      title: "chapter1",
      description: "vampire"
    }, {
      id:2,
      author: "pravallika",
      title: "chapter1",
      description: "vampire"
    },
    {
      id:3,
      author: "pravallika",
      title: "chapter1",
      description: "vampire"
    }
  ]

  return (
    <div className="main1">

      {
        posts.map((posts)=>(
          <BlogPost
          key={posts.id}
          author={posts.author}
          title={posts.title}
          description={posts.description} 
          />
        )
      )
    }
        {/* product.map((product)=>(
<Productcard
productName={product.productName}
price={product.price}
isAvailable={product.isAvailable}
/>
  )
  )
}
    {/*<Productcard product={productName} cost={price} stock={true}/>
    <Productcard product={productName} cost={price} stock={false}/>
   {/* <UseAvatar Name={Name} Course={course} Rollno={Rollno} BloodGroup={BloodGroup}
    DOB={DOB}/>*/}
       </div>
  )
}
  export default App;
