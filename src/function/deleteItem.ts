import axios from "axios";
import { url } from "../components/const";
import { IUserInput } from "../types";

export const deleteItem = async (id: string) => {
    const delItem: IUserInput = await axios({
    method: "post",
    url: url + `/ru/data/v3/testmethods/docs/userdocs/delete/${id}`,
      headers: {
      "Content-Type": "application/json;charset=utf-8",
      "x-auth": ` ${localStorage.token}`,
    },
  });

  return delItem;
};