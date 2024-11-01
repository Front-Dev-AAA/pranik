import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Admin from '../pages/Admin';
import Logout from '../pages/Logout';
import PrivateRoute from './PrivateRoute';
import Main from '../pages/Main';

export default function useRouters() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      <Route element={<PrivateRoute />}>
        <Route path='/admin' element={<Admin />} />
        <Route path="/logout" element={<Logout />} />
      </Route>

    </Routes>
  )
}


