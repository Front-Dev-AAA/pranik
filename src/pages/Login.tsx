
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../components/useAuth';
import { Form } from '../components/Form';
import { useState } from 'react';
import MyModal from '../components/Ui/modal/MyModal';
import MySpinner from '../components/MySpinner';
import { createContext } from "react";
import { Imistake } from '../types';
import { url } from '../components/const';
export const MyContext = createContext<Imistake>({});


const Login = () => {
  const {setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  // состояние для спинера
  const [spinner, setSpinner] = useState(false);
  // модалка - состояние
  const [modal, setModal] = useState(true);

  // состояние ошибки
  const [mistake, setMistake] = useState<Imistake>({
    server: true,
    authorization: true,
    unclear: true,
  });
  //  промис запроса авторизации
  const getToken = async (name: string, pass: string) => {
      axios.post(`${url}/ru/data/v3/testmethods/docs/login`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      username: `${name}`,
      password: `${pass}`
    })
      .then((response) => {
        const { data } = response.data;
        // токен
        localStorage.token = data.token;
        console.log(localStorage.token);
        // статус
        setAuth(true);
        navigate(from, { replace: true });
      })
      .finally(() => setSpinner(false))
      .catch(function (error) {
        if (error.response) {
          setMistake((previousState) => {
            return {
              ...previousState,
              server: false,
            }
          })
        } else if (error.request) {
          setMistake((previousState) => {
            return {
              ...previousState,
              unclear: false,
            }
          })

        } else {
          setMistake((previousState) => {
            return {
              ...previousState,
              authorization: false,
            }
          })
        }
        // console.log(error.config);
      });

  }
  // запрос на авторизацию
  const handleLogin = (name: string, pass: string) => {
  
    setMistake((previousState) => {
      return {
        ...previousState,
        server: true,
        authorization: true,
        unclear: true,
      }
    })
    setSpinner(true);
    // для демонстрации работы спиннера
    setTimeout(() => {
      getToken(name, pass);
    }, 3000)

  };
  return (
    <>
      <MySpinner visible={spinner} />
      <MyContext.Provider value={mistake}>
        <MyModal visible={modal} setVisible={setModal}>
          <Form title="Войти" handleClick={handleLogin} />
        </MyModal>
      </MyContext.Provider>
    </>
  )
}

export default Login;




