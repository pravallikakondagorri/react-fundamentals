import "./UseAvatar.css"
function UseAvatar(person)
{
return(
    <div className="id">
        <img src="www.jpg" alt="img" />
    <p className="title1">{person.Name}</p>
    <p>course:{person.Course}</p>
    <p>Rollno:{person.Rollno}</p>
    <p>BloodGroup:{person.BloodGroup}</p>
    <p>DOB:{person.DOB}</p>
    </div>
)
}
export default UseAvatar;