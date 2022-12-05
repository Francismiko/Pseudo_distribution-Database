import { Action } from "@/types/action";
import axios from "./axios";

class axiosRequest {
  public postActions = (action: Action) => {
    axios.post("/user/actions", {
      account: action.account,
      action_type: action.type,
      action_content: action.content,
      action_date: new Date(),
    });
  };
}

export default new axiosRequest();
