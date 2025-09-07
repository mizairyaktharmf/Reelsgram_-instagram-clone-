import React from 'react'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className='d-flex vh-100'>
      <div className='w-20'> <Sidebar/> </div>
      <div className='bg-info w-50'>feed</div>
      <div className='w-23'>suggestions</div>
    </div>
  )
}
// width styling in boostrap only w-25 w-50 w-75 w-100
export default App