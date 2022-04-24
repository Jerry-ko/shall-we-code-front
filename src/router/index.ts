import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /**
     * 메인 인덱스 페이지
     */
    {
      path: "/",
      name: "rootIndex",
      // component: () => import("@/layouts/TheLayout.vue"),
      component: () => import("@/views/RootIndex.vue"),
      children: [],
    },
    /**
     * 로그인 인덱스 페이지
     */
    {
      path: "/login",
      name: "loginIndex",
      meta: { useHeader: false },
      component: () => import("@/views/login/LoginIndex.vue")
    },
    /**
     * 회원가입 인덱스 페이지
     */
    {
      path: "/signup",
      name: "signupIndex",
      meta: { useHeader: false },
      component: () => import("@/views/signup/SignUpIndex.vue"),
    },
  ],
});

export default router;
