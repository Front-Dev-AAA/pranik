// интерфейс для записи в таблице
export interface Task {
  id: string;
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
}

// интерфейс для ошибки
export interface Imistake {
  server?: boolean;
  authorization?: boolean;
  unclear?: boolean;
}

// интерфейс для добавления записи
export interface IUserInput {
  companySigDate: string;
  companySignatureName: string;
  documentName: string;
  documentStatus: string;
  documentType: string;
  employeeNumber: string;
  employeeSigDate: string;
  employeeSignatureName: string;
}