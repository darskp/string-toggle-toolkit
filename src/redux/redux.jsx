import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux';
import changeText from './actions/action';
function Redux() {
    let string = useSelector(state => state.oldString);
    let dispatch = useDispatch()
    return (
        <div className='redux' style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
            <h1>Change the string name</h1>
            <h2>{string}</h2>
            <button onClick={()=>dispatch(changeText(string))}>Change the text</button>
        </div>
    )
}

export default Redux;
