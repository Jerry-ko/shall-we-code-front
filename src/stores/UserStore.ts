import {defineStore} from "pinia";
import USER_API from "@/api/user/UserApi";
import type {JoinRequest} from "@/api/user/request/JoinRequests";
import router from "@/router";
import {isValidEmail} from "@/stores/util/EmaiValidator";


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
    join(joinRequest: JoinRequest) {
      return USER_API.join(joinRequest)
          .then(_ => router.push('/'))
          .catch(err =>
              alert(`회원가입 실패 err : ${err}`)
          );
    },
    emailCheck(email: string) {
      clearTimeout(this.emailCheckTimeoutId)

      if (isValidEmail({email})) {
        this.emailCheckTimeoutId = setTimeout(() => {
          return USER_API.emailCheck({email})
              .then(response => {
                this.duplicated = response.data.body!.duplicated
                if(this.duplicated) {
                  alert('이미 가입된 이메일입니다.')
                }
              })
              .catch(err => console.log(`이메일 중복 검시 중 에러 발생 : ${err}`))
        }, 500)
      }
    }
  }
});
