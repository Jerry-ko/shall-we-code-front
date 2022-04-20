import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /**
     * 메인 인덱스 페이지
     */
    {
      path: "/",
      name: "index",
      component: () => import("@/views/RootIndex.vue"),
      children: [],
    },
    /**
     * 회원가입 인덱스 페이지
     */
    {
      path: "/signup",
      name: "signupIndex",
      component: () => import("@/views/signup/SignUpIndex.vue"),
    },
  ],
});

export default router;
