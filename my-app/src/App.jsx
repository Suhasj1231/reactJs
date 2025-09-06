import React from 'react'
import EditUsers from './components/Editusers';
import TodoList from './components/Todolist';
import { ThemeProvider } from './components/ThemeProvider';
import Home from './components/Home';

const App = () => {
  return (
    <>
    {/* <EditUsers/> */}
     <ThemeProvider>
      <Home />
    </ThemeProvider>
    <TodoList/>
    </>
      
  )
}
export default App