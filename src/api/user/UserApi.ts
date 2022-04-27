import type {AxiosResponse} from "axios";
import axios from "axios";
import type {EmailCheckRequest, JoinRequest} from "@/api/user/request/JoinRequests";
import type {EmailCheckResponse, JoinResponse} from "@/api/user/response/JoinResponses";
import type HttpResponse from "@/api/HttpResponse";

const SHALL_WE_CODE_URL = import.meta.env.VITE_SHALL_WE_CODE;


const USER_API = {
  createUser: (joinRequest: JoinRequest) => {
    return axios.post<HttpResponse<JoinResponse>, AxiosResponse<HttpResponse<JoinResponse>>>(`${SHALL_WE_CODE_URL}/user/join`, joinRequest);
  },

  emailDuplicateCheck: (request: EmailCheckRequest) => {
    return axios.post<HttpResponse<EmailCheckResponse>, AxiosResponse<HttpResponse<EmailCheckResponse>>>(`${SHALL_WE_CODE_URL}/user/join/duplicate-check`, request)
  }
};

export default USER_API;


