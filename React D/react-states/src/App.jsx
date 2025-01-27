
import './App.css'
import Counter from './Counter'
import LikeButton from './LikeButton'
import MsgBox from './MsgBox'

function App() {

  return (
    <>
    <h1>States in React</h1>
    {/* <Counter/> */}

    <LikeButton/>

    <MsgBox userName="neeraj" textColor="yellow" />
    </>
  )
}

export default App
