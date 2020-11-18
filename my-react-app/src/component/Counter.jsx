import rootStore from "../store";

function Counnter(){
    let number = 0;
    const {userData} = rootStore();
    function addNumber(e){
        number++;
        console.log(number);
    }
    
    return(
        <div>
            <span>{userData.getAccessToken()}</span>
            <button type="button" onClick={addNumber}>Add Number</button>
        </div>
    )
}

export default Counnter;