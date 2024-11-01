import axios from "axios";
import { url } from "../components/const";
import { IUserInput } from "../types";

export const postData = async (item: IUserInput) => {
    const addItem: IUserInput = await axios({
    method: "post",
    url: url + `/ru/data/v3/testmethods/docs/userdocs/create`,
    data: item,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "x-auth": ` ${localStorage.token}`,
    },
  });

  return addItem;
};

