<template>
  <div class="sign_up_wrap">
    <header>
      <h1>Shall we code</h1>
    </header>

    <main class="sign_up_form">
      <div class="tit_wrap">
        <h1>새 계정 만들기</h1>
        <p>빠르고 쉽습니다.</p>
      </div>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="joinRequest.email"
                :rules="rules.emailRule"
                hide-details
                hint="로그인할 때와 비밀번호를 재설정해야 할 때 사용하는 정보입니다."
                label="이메일"
                single-line
                solo
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="ma-0" cols="12">
              <v-text-field
                v-model="joinRequest.name"
                hide-details
                hint="이름이 무엇인가요?"
                label="이름"
                single-line
                solo
              >
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="ma-0" cols="12">
              <v-text-field
                v-model="joinRequest.phoneNumber"
                :rules="rules.phoneNumberRule"
                hide-details
                hint="연락처를 알려주세요."
                label="연락처"
                single-line
                solo
              >
              </v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="joinRequest.password"
                :rules="rules.passwordRule"
                hide-details
                hint="숫자 영문 등을 조합한 여덟자리 이상의 비밀번호를 입력하세요."
                label="비밀번호"
                single-line
                solo
                type="password"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="passwordConfirm"
                :rules="rules.passwordConfirmRule"
                hide-details
                hint="숫자 영문 등을 조합한 여덟자리 이상의 비밀번호를 입력하세요."
                label="비밀번호 확인"
                single-line
                solo
                type="password"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <div class="btn_wrap">
        <Btn @click="join(joinRequest)">가입하기</Btn>
      </div>

      <div class="info_msg">
        <a href="/login"> 이미 계정이 있으신가요?</a>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Btn from "../../components/common/GlobalButton.vue";
import { useUserStore } from "@/stores/user";
import { reactive, ref } from "vue";
import JoinRequest from "@/api/user/request/JoinRequest";

const passwordConfirm = ref<string>("");
const joinRequest = reactive<JoinRequest>(new JoinRequest("", "", "", ""));
const rules = reactive({
  emailRule: [v => v.match(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i)   || '유효하지 않은 이메일 주소입니다'],
  phoneNumberRule: [],
  passwordRule: [],
  passwordConfirmRule: []
})


const { createUser } = useUserStore();

//TODO 상태코드에 따라 응답 성공 판별. alert 창 띄우거나 리다이렉트
function join(joinRequest: JoinRequest) {
  createUser(joinRequest)
    .then();
}

// TODO 이메일 중복 체크 로직 필요

// TODO 비밀번호 검증 로직 필요

</script>
<style scoped>
a {
  text-decoration: none;
}

.sign_up_wrap {
  height: 120vh;
  background: #f0f2f5;
}

.sign_up_form {
  text-align: center;
}

header h1 {
  padding-top: 30px;
  width: 100%;
  height: 100px;
  text-align: center;
}

main {
  margin: 0 auto;
  border-radius: 8px;
  padding: 16px;
  width: 432px;
  height: 550px;
  background: #fff;
}

.tit_wrap {
  padding: 0 0 10px 0;
  border-bottom: 1px solid #f2f2f2;
}

.tit_wrap h1,
.tit_wrap p {
  text-align: center;
}

.btn_wrap {
  padding: 10px 0;
}

.info_msg {
  padding: 10px 0;
}

.info_msg a {
  font-size: 17px;
  line-height: 20px;
  color: #1877f2;
}
</style>
