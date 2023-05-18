// import Redux from './redux/redux'
import './App.css'
import { Provider } from 'react-redux'
import ToolKit from './toolkit/toolkit'
import store from './toolkit/store/store'
// import store from './redux/store/store'
function App() {
  return (
    <Provider store={store}>
     {/* <Redux/> */}
     <ToolKit/>
    </Provider>
  )
}

export default App
