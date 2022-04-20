import { defineStore } from "pinia";
import USER_API from "@/api/user/userApi";
import type JoinRequest from "@/api/user/request/JoinRequest";
import router from "@/router";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({}),
  getters: {},
  actions: {
    /**
     * 회원가입 요청
     * @param joinRequest 요청 파라미터
     */
    join(joinRequest: JoinRequest) {
      return USER_API.join(joinRequest)
        .then(_ => router.push('/'))
        .catch(err =>
            alert(`회원가입 실패 err : ${err}`)
        );
    }
  }
});
