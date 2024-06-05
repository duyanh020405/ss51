
import Student from './components/Student'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Id from './components/Id'
import Student2 from './components/Student2'
import PrivateCouter from './components/PrivateCouter'
import Team from './components/Team'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/team' element={<Team></Team>}></Route>
        <Route path='/privateCouter' element={<PrivateCouter></PrivateCouter>}></Route>
        <Route path='/j' element={<Student2/>}></Route>
         <Route path="/student/:name" element={<Student/>}></Route>
         <Route path='/product/:id' element={<Id/>}></Route>
         <Route path='/Teams'></Route>
      </Routes>
    </div>
  )
}
