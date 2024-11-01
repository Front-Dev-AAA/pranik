
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../components/useAuth";


function Logout() {
  const { setAuth } = useAuth()
  const navigate = useNavigate();
  
  useEffect(() => {
    setAuth(false);
    localStorage.clear();
    navigate('/');
  }, [setAuth, navigate])

  return (
    <div>Logout</div>
  )
}

export default Logout;