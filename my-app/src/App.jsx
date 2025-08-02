import './App.css'
import { PrimaryButton, SecondaryButton } from './components/Buttons'
import Card from './components/Card'
import DynamicBox from './components/DynamicBox'
import HelloWorldComponent from './components/HelloWorldComponent'
import PropComp from './components/PropComp'

function App() {

  const propObj ={
        boxId:"box2",
        className:"alert",
        text:"Warning!",
        bgColor:"crimson"
  }

  return (
   <>
   hello world
   <HelloWorldComponent/>
   <PrimaryButton />
   <SecondaryButton />
   <hr />
   <hr />
   
   <PropComp title="My Title" content="This is the content of the prop component." />
   <PropComp title="Another Title" content="Here is some more content for the prop component." />
   <hr />
   <hr />
   <DynamicBox
        boxId="box1"
        className="highlight"
        text="Hello, I am dynamic!"
        bgColor="teal"
      />
      <DynamicBox
        {...propObj}
      />

      <hr />
      <hr />
      <div>
      <Card >
        <h2>User Profile</h2>
        <p>Name: Suhas</p>
        <p>Role: Developer</p>
      </Card>

      <Card>
        <h2>Alert</h2>
        <p>This action is not allowed.</p>
      </Card>
    </div>

   
   </>
  )
}

export default App
