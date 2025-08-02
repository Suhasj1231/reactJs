import React from 'react'

const HelloWorldComponent = () => {
    console.log('HelloWorldComponent rendered')
    const displayMessage = 'Hello, World!'
  return (
    <div>
      <h2>Hello world component</h2>
      {/* the below is an explresion which is in { ... } and anything inside it will be evaluated , we can do it similarly in classnames and ids as well */}
      <h4>{displayMessage}</h4>  

    </div>
  )
}

export default HelloWorldComponent
