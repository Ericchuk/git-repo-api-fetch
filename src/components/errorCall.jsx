export default function ErrorCall({error, boundary}){
    return(
        <div className="callError">
            <button onClick={boundary} className="errorCall"><img src={error} alt="error" /></button>
            <p>Call Boundary</p>
        </div>
        
    )
}