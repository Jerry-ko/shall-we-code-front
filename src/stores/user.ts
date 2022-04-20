import { defineStore } from "pinia";
import USER_API from "@/api/user/userApi";
import type JoinRequest from "@/api/user/request/JoinRequest";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({}),
  getters: {},
  actions: {
    createUser(joinRequest: JoinRequest) {
      return USER_API.join(joinRequest)
        .then(response => {
          return response;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
