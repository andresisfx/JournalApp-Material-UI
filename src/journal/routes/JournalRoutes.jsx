
import { Routes , Route, Navigate} from 'react-router-dom'
import { JournalPage } from '../pages/index'

export const JournalRoutes = () => {
  return (
    <>
      <Routes>

        <Route path='/' element={<JournalPage/>}/>
        <Route path='/*' element={<Navigate to='/'/>}/>

        
      </Routes>
    </>
  )
}
