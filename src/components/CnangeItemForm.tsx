import React, { useState } from 'react';
import { FC } from "react";
import './AddItemForm.css';
import MyInput from './Ui/input/MyInput';
import MyButton from './Ui/button/MyButton';
import { Task } from '../types';
import { useContext } from "react";
import { MyContext } from "../pages/Admin";
import { useEffect } from 'react';
interface ChangeItemFormProp {
    onCancel: () => void;
    onSaveForm: (userInput: Task) => void;
}
const ChangeItemForm: FC<ChangeItemFormProp> = ({ onSaveForm, onCancel }) => {
    const сhangeInput = useContext<Task>(MyContext);
    const [userInput, setUserInput] = useState<Task>(сhangeInput);
    useEffect(() => setUserInput(сhangeInput), [сhangeInput])






    // функции обработки ввода 
    function inpСompanySigDate(event: React.ChangeEvent<HTMLSelectElement>) {
        return setUserInput((previousState) => {
            return {
                ...previousState,
                // название изменяемого поля
                companySigDate: event.target.value,
            }
        })
    }

    function inpCompanySignatureName(event: React.ChangeEvent<HTMLSelectElement>) {
        return setUserInput((previousState) => {
            return {
                ...previousState,
                // название изменяемого поля
                companySignatureName: event.target.value,
            }
        })
    }
    function inpDocumentName(event: React.ChangeEvent<HTMLSelectElement>) {
        return setUserInput((previousState) => {
            return {
                ...previousState,
                // название изменяемого поля
                documentName: event.target.value,
            }
        })
    }
    function inpDocumentStatus(event: React.ChangeEvent<HTMLSelectElement>) {
        return setUserInput((previousState) => {
            return {
                ...previousState,
                // название изменяемого поля
                documentStatus: event.target.value,
            }
        })
    }
    function inpDocumentType(event: React.ChangeEvent<HTMLSelectElement>) {
        return setUserInput((previousState) => {
            return {
                ...previousState,
                // название изменяемого поля
                documentType: event.target.value,
            }
        })
    }
    function inpEmployeeNumber(event: React.ChangeEvent<HTMLSelectElement>) {
        return setUserInput((previousState) => {
            return {
                ...previousState,
                // название изменяемого поля
                employeeNumber: event.target.value,
            }
        })
    }
    function inpEmployeeSigDate(event: React.ChangeEvent<HTMLSelectElement>) {
        return setUserInput((previousState) => {
            return {
                ...previousState,
                // название изменяемого поля
                employeeSigDate: event.target.value,
            }
        })
    }
    function inpEmployeeSignatureName(event: React.ChangeEvent<HTMLSelectElement>) {
        return setUserInput((previousState) => {
            return {
                ...previousState,
                // название изменяемого поля
                employeeSignatureName: event.target.value,
            }
        })
    }

    const ChangeNewLine = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(сhangeInput);
        onSaveForm(userInput);
    }

    return (<form className="form" onSubmit={ChangeNewLine}>
        <h2 className="form__header">Редактирование записи</h2>
        <div className="form__input">
            <label className="form__label">
                Дата компании:  <MyInput type='text' value={userInput.companySigDate} onChange={inpСompanySigDate} required />
            </label>
            <label className="form__label">
                Названии компани: <MyInput type='text' value={userInput.companySignatureName} onChange={inpCompanySignatureName} required />
            </label>
            <label className="form__label">
                Название документа: <MyInput type='text' value={userInput.documentName} onChange={inpDocumentName} required />
            </label>
            <label className="form__label">
                Статус документа: <MyInput type='text' value={userInput.documentStatus} onChange={inpDocumentStatus} required />
            </label>
            <label className="form__label">
                Тип документа: <MyInput type='text' value={userInput.documentType} onChange={inpDocumentType} required />
            </label>
            <label className="form__label">
                Номер сотрудника: <MyInput type='text' value={userInput.employeeNumber} onChange={inpEmployeeNumber} required />
            </label>
            <label className="form__label">
                Дата сотрудника:  <MyInput type='text' value={userInput.employeeSigDate} onChange={inpEmployeeSigDate} required />
            </label>
            <label className="form__label">
                Имя сотрудника: <MyInput type='text' value={userInput.employeeSignatureName} onChange={inpEmployeeSignatureName} required />
            </label>
        </div>
        <div className="form__btn">
            <MyButton type="submit">Изменить запись</MyButton>
            <MyButton type="button" onClick={onCancel}>Отмена</MyButton>
        </div>

    </form>);
}

export default ChangeItemForm;

