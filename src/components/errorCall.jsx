export default function ErrorCall({error, boundary}){
    return(
        <button onClick={boundary} className="errorCall"><img src={error} alt="error" /><b>call Boundary</b></button>
    )
}