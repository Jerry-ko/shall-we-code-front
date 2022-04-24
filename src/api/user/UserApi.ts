import axios from "axios";
import type JoinRequest from "@/api/user/request/JoinRequest";
import type JoinResponse from "@/api/user/response/JoinResponse";

const SHALL_WE_CODE_URL = import.meta.env.VITE_SHALL_WE_CODE;

const USER_API = {
  join: (joinRequest: JoinRequest) => {
    return axios.post<JoinResponse>(`${SHALL_WE_CODE_URL}/user/join`, joinRequest);
  }
};

export default USER_API;


