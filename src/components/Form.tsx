import { FC, useState } from "react";
import "./Form.css";
import { useContext } from "react";
import { MyContext } from "../pages/Login";
import { Imistake } from "../types";

interface FormProp {
  title: string;
  handleClick: (name: string, pass: string) => void;
}

const Form: FC<FormProp> = ({ title, handleClick }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const mistake = useContext<Imistake>(MyContext);
  return (
    <div className="form">
      <h6   className="form__title title-reset">Введите логин и пароль</h6>
      <p className={mistake.authorization ? 'mistakeAvto__false' : 'mistakeAvto__true'}> Логин или пароль неверные</p>
      <p className={mistake.server ? 'mistakeServer__false' : 'mistakeServer__true'}> Сервер недоступен</p>
      <p className={mistake.unclear ? 'mistake__false' : 'mistake__true'}> Подключите интернет</p>
      
      <input
        className="myInp"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder=" введите логин"
      />
      <input
        className="myInp"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="  введите пароль"
      />
      <button className="myBtn" onClick={() => handleClick(name, pass)}>
        {title}
      </button>
    </div>
  );
};

export { Form };
