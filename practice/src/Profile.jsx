function Profile()
{
    const name="pravallika"
    const age=19
    const isstudent=true
    return(
        <div>
            <p>Name:{name}</p>
            <p> age:{age}</p>
            <p>{isstudent===true ?"iam a student":"not a student"}</p>
        </div>
    )
}
export default Profile;