import React, { useState } from 'react';
import { FC } from "react";
import './AddItemForm.css';
import MyInput from './Ui/input/MyInput';
import MyButton from './Ui/button/MyButton';
import { IUserInput } from '../types';

interface AddItemFormProp {
    onCancel: () => void;
    onSaveForm: (userInput: IUserInput) => void;
}
const AddItemForm: FC<AddItemFormProp> = ({ onCancel, onSaveForm }) => {
    const [userInput, setUserInput] = useState<IUserInput>({
        companySigDate: '',
        companySignatureName: '',
        documentName: '',
        documentStatus: '',
        documentType: '',
        employeeNumber: '',
        employeeSigDate: '',
        employeeSignatureName: '',
    });

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
    // event.toISOString()
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

    const addNewLine = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const newLine = {
        //     ...userInput, id: ID()
        // }
        onSaveForm(userInput);
        setUserInput({
            companySigDate: '',
            companySignatureName: '',
            documentName: '',
            documentStatus: '',
            documentType: '',
            employeeNumber: '',
            employeeSigDate: '',
            employeeSignatureName: '',
        });
    }

    return (<form className="form" onSubmit={addNewLine}>
        <h2 className="form__header">Добавление новой записи</h2>
        <div className="form__input">
            <label className="form__label">
                Дата компании:  <MyInput type='date' min='2024-01-01' value={userInput.companySigDate} onChange={inpСompanySigDate} required />
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
                Дата сотрудника:  <MyInput type='date' min='2024-01-01' value={userInput.employeeSigDate} onChange={inpEmployeeSigDate} required />
            </label>
            <label className="form__label">
                Имя сотрудника: <MyInput type='text' value={userInput.employeeSignatureName} onChange={inpEmployeeSignatureName} required />
            </label>
        </div>
        <div className="form__btn">
            <MyButton type="submit">Добавить запись</MyButton>
            <MyButton type="button" onClick={onCancel}>Отмена</MyButton>
        </div>

    </form>);
}

export default AddItemForm;

