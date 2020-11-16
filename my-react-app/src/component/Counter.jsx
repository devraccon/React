
function Counnter(){
    let number = 0;

    function addNumber(e){
        number++;
        console.log(number);
    }

    return(
        <div>
            <span>{number}</span>
            <button type="button" onClick={addNumber}>Add Number</button>
        </div>
    )
}

export default Counnter;