import './Task.css';
import { Task } from '../types';
import React from 'react';
import editIcon from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg'; 

interface TaskProps {
    task: Task;
    removeJob: (task: Task) => void;
    editJob: (task: Task) => void;
}

const OneTask: React.FC<TaskProps> = ({ task, removeJob, editJob}) => {
    return (
        <tr className="task">
            <td className="task__item">{task.companySigDate}</td>
            <td className="task__item">{task.companySignatureName}</td>
            <td className="task__item">{task.documentName}</td>
            <td className="task__item">{task.documentStatus}</td>
            <td className="task__item">{task.documentType}</td>
            <td className="task__item">{task.employeeNumber}</td>
            <td className="task__item">{task.employeeSigDate}</td>
            <td className="task__item">{task.employeeSignatureName}</td>
            <td className="task__item" onClick={() => editJob(task)}>  <img className="task__item-btn" src={editIcon} alt="иконка редактирования" /></td>
            <td className="task__item" onClick={() => removeJob(task)}>  <img className="task__item-btn" src={deleteIcon} alt="иконка  удаления" /></td>
        </tr>
    )
}
export default OneTask;

