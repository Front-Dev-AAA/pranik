import axios from "axios";
import { url } from "../components/const";
import { Task } from "../types";

export const editApi = async (id: string, item: Task) => {
  const editItem: Task = await axios({
    method: "post",
    url: url +`/ru/data/v3/testmethods/docs/userdocs/set/${id}`,
    data: item,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "x-auth": ` ${localStorage.token}`,
    },
  });

  return editItem;
};
