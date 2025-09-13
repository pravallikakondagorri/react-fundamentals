import "./Productcard.css"
function Productcard(object)
{ 
    const titleStyle={
    fontWeight: "20px",
    color:"green"
}
  const priceStyle=
  {
    fontWeight: "20px",
    color:"blue"
  }
    return(
        <div className="main">
       <p style={titleStyle}>productName:{object.product}</p>
       <p style={priceStyle}>price:{object.cost}</p>
       {object.isAvailable===true? <p className="block">in stock</p>:<p className="block1">not in stock</p>}
      
       </div>

    )
}
export default Productcard;