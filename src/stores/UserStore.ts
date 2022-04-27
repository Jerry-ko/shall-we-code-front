import {defineStore} from "pinia";
import USER_API from "@/api/user/UserApi";
import type {JoinRequest} from "@/api/user/request/JoinRequests";


export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    emailCheckTimeoutId: -1,
    duplicated: false,
  }),
  getters: {},
  actions: {
    /**
     * 회원가입 요청
     * @param joinRequest 요청 파라미터
     */
    createUser(joinRequest: JoinRequest) {
      return USER_API.createUser(joinRequest)
    },

    checkDuplicateEmail(email: string) {
      return USER_API.emailDuplicateCheck({email})
        .then(response => {
          this.duplicated = response.data.body!.duplicated
          return this.duplicated
        })
    },
  }
});
