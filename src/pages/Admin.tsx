import AddItemForm from '../components/AddItemForm';
import MySpinner from '../components/MySpinner';
import OneTask from '../components/Task';
import MyButton from '../components/Ui/button/MyButton';
import MyModal from '../components/Ui/modal/MyModal';
import { getApiData } from '../function/getApi';
import { postData } from '../function/postData';
import { deleteItem } from '../function/deleteItem';
import { IUserInput, Imistake, Task } from '../types';
import './Admin.css';
import { createContext } from "react";
export const MyContext = createContext<Task>({
    id: '',
    companySigDate: '',
    companySignatureName: '',
    documentName: '',
    documentStatus: '',
    documentType: '',
    employeeNumber: '',
    employeeSigDate: '',
    employeeSignatureName: '',
});
import { useEffect, useState } from 'react';


// import { url } from '../components/const';
// import axios from 'axios';

import ChangeItemForm from '../components/CnangeItemForm';
import { editApi } from '../function/editApi';


const Admin = () => {
    // состояние для данных с сервера в главную таблицу
    const [tasks, setTasks] = useState<Task[]>([]);
    // состояние ошибок
    const [mistake, setMistake] = useState<Imistake>({
        server: true,
        authorization: true,
        unclear: true,
    });
    // состояние спиннера
    const [spinner, setSpinner] = useState(false);
    //  стэйт модалки - добавление записи в таблицу
    const [modalNew, setModalNew] = useState(false);
    // получение данных таблицы
    useEffect(() => {
        setMistake((previousState) => {
            return {
                ...previousState,
                server: true,
                authorization: true,
                unclear: true,
            }
        })
        setSpinner(true);
        setTimeout(() => {
            getApiData().then((response) => {
                const { data } = response.data;
                return setTasks(data);
            })
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
                })
                .finally(() => setSpinner(false))
        }, 3000)
    }, []);

    // функция для добавления записи в таблицу
    const saveInputHandler = (inputUser: IUserInput) => {
        setModalNew(false);
        const endDateIsoCompany = new Date(inputUser.companySigDate).toISOString();
        inputUser.companySigDate = endDateIsoCompany + '\t';
        const endDateIsoEmployee = new Date(inputUser.employeeSigDate).toISOString();
        inputUser.employeeSigDate = endDateIsoEmployee + '\t';

        setMistake((previousState) => {
            return {
                ...previousState,
                server: true,
                authorization: true,
                unclear: true,
            }
        })
        setSpinner(true);
        setTimeout(() => {
            postData(inputUser)
                .then((res) => {
                    return res;
                })
                // ожидаем завершения добавления в таблицу на сервере
                .then((res) => {
                    console.log(res);
                    getApiData().then((response) => {
                        const { data } = response.data;
                        return setTasks(data);
                    }).catch(function (error) {
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
                    })
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
                    console.log('err', error.config)
                }

                )
        }, 3000)

    }
    // функция отмены добавления записи в таблицу
    const inputCancelHandler = () => {
        setModalNew(false);
        setModalChange(false);
    }

    // функция удаления записи
    const removeHandler = (item: Task) => {
        setMistake((previousState) => {
            return {
                ...previousState,
                server: true,
                authorization: true,
                unclear: true,
            }
        })
        setSpinner(true);
        setTimeout(() => {
            deleteItem(item.id)
                .then((res) => {
                    setTasks(tasks.filter(p => p.id !== item.id));
                    // console.log(res);
                    return res;
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
                    console.log('err', error.config)
                }

                )
        }, 3000)

    }


    //  стэйт модалки - изменение записи в таблицу
    const [modalChange, setModalChange] = useState(false);
    //  стэйт редактирования - изменение записи в таблицу
    const [сhangeInput, setChangeInput] = useState<Task>({
        id: '',
        companySigDate: '',
        companySignatureName: '',
        documentName: '',
        documentStatus: '',
        documentType: '',
        employeeNumber: '',
        employeeSigDate: '',
        employeeSignatureName: '',
    });
    // функции редактирования данных
    const editHandler = (item: Task) => {
        // console.log(item);
        setChangeInput(item);
        setModalChange(true);
    }

    const changeInputHandler = (inputUser: Task) => {
        setModalChange(false);
        // console.log(inputUser);
        setMistake((previousState) => {
            return {
                ...previousState,
                server: true,
                authorization: true,
                unclear: true,
            }
        })
        setSpinner(true);
        setTimeout(() => {
            editApi(inputUser.id, inputUser)
                .then((res) => {
                    // console.log(res);
                    const newState = tasks.map(obj => {
                        // Если id равен inputUser.id, заменяем объект
                        if (obj.id === inputUser.id) {
                            return inputUser;
                        }
                        // В противном случае вернуть объект в исходном виде
                        return obj;
                    });
                    setTasks(newState);
                    return res;
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
                    console.log('err', error.config)
                }

                )
        }, 3000)


    }


    return (
        <>
            <MySpinner visible={spinner} />
            <hr />
            <div className="mistake__block">
                <p className={mistake.authorization ? 'mistakeGet__false' : 'mistakeGet__true'}>Ошибка ...</p>
                <p className={mistake.server ? 'mistakeGetServer__false' : 'mistakeGetServer__true'}> Сервер недоступен...</p>
                <p className={mistake.unclear ? 'mistakeGetInet__false' : 'mistakeGetInet__true'}> Подключите интернет...</p>
            </div>

            <table className="table container column">
                <thead>
                    <tr>
                        <th className="column-name">Дата компании</th>
                        <th className="column-name">Названии компани </th>
                        <th className="column-name">Название документа</th>
                        <th className="column-name">Статус документа</th>
                        <th className="column-name">Тип документа</th>
                        <th className="column-name">Номер сотрудника</th>
                        <th className="column-name">Дата сотрудника</th>
                        <th className="column-name">Имя сотрудника</th>
                        <th className="column-name">Изменить</th>
                        <th className="column-name">Удалить</th>
                    </tr>
                </thead>
                <tbody >{tasks.map((task) => <OneTask task={task} removeJob={removeHandler} editJob={editHandler} key={task.id} />)}</tbody>

            </table >
            {tasks.length === 0 ? <p className="table__desc"> Пока таблица пустая.. </p > : false}
            <MyButton onClick={() => setModalNew(true)}>Добавить новую запись</MyButton >

            <MyModal visible={modalNew} setVisible={setModalNew}>
                <AddItemForm onCancel={inputCancelHandler} onSaveForm={saveInputHandler} />
            </MyModal>
            <MyContext.Provider value={сhangeInput}>
                <MyModal visible={modalChange} setVisible={setModalChange}>
                    <ChangeItemForm onSaveForm={changeInputHandler} onCancel={inputCancelHandler} />
                </MyModal>
            </MyContext.Provider>
        </>
    )
}

export default Admin;