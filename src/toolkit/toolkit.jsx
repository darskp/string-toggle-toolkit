import { useDispatch, useSelector } from 'react-redux';
import { changeText } from './reduce/reducer';
function ToolKit() {
    let string1 = useSelector((state) => state.string);
    console.log(string1);
    let dispatch = useDispatch()
    return (
        <div className='redux' style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <h1>Change the string name - Toolkit</h1>
            <h2>{string1}</h2>
            <button onClick={() => dispatch(changeText())}>Change the text</button>
        </div>
    )
}
export default ToolKit;