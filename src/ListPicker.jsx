export default function ListPicker({values}){
    const randIdx=Math.floor(Math.random()*values.length);
    const randElement = values[randIdx]
    return(
        <>
        <h1>Double Die</h1>
        <p>The List of values: {values}</p>
        <p>Random element is :{randElement}</p>
        </>
    )
}