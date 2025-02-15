import { Navigate, Route, Routes } from "react-router-dom"
import { RegisterPage, LoginPage } from "../auth/pages"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

export const AppRouter = () => {
  return (
    <>
       <Routes>
          
          <Route path="/auth/*" element={<AuthRoutes/>} />



          <Route path="/*" element={<JournalRoutes/>} />
       </Routes>
    </>
  )
}
