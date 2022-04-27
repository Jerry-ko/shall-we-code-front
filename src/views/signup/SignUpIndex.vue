<template>
  <div class="sign_up_wrap">
    <header>
      <h1>Shall we code</h1>
    </header>

    <main class="sign_up_form">
      <div class="tit_wrap">
        <h1>새 계정 만들기</h1>
      </div>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="8">
              <v-text-field
                  v-model="joinForm.email"
                  :color="emailChecker ? 'success' : 'warning'"
                  hide-details
                  hint="로그인할 때와 비밀번호를 재설정해야 할 때 사용하는 정보입니다."
                  label="이메일"
                  single-line
                  solo
              ></v-text-field>
            </v-col>
            <!--                  @input="event => validateEmail(event.target.value)"-->

            <v-col cols="4">
              <v-btn @click="validateEmail">중복확인</v-btn>
            </v-col>
          </v-row>
          <p v-show="duplicated">중복된 이메일입니다.</p>

          <v-row>
            <v-col class="ma-0" cols="12">
              <v-text-field
                  v-model="joinForm.name"
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
                  v-model="joinForm.phoneNumber"
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
                  v-model="joinForm.password"
                  hide-details
                  hint="숫자 영문 등을 조합한 여덟자리 이상의 비밀번호를 입력하세요."
                  label="비밀번호"
                  single-line
                  solo
                  type="password"
                  @input="(event) => validatePassword(event.target.value)"
              ></v-text-field>
            </v-col>
          </v-row>
          <p v-show="!passwordChecker">비밀번호가 8자리 미만입니다.</p>

          <v-row>
            <v-col cols="12">
              <v-text-field
                  v-model="passwordConfirm"
                  hide-details
                  hint="숫자 영문 등을 조합한 여덟자리 이상의 비밀번호를 입력하세요."
                  label="비밀번호 확인"
                  single-line
                  solo
                  type="password"
                  @input="(event) => validatePasswordConfirm(event.target.value)"
              ></v-text-field>
            </v-col>
          </v-row>
          <p v-show="!passwordConfirmChecker">비밀번호와 동일하지 않습니다.</p>

        </v-container>
      </v-form>

      <div class="btn_wrap">
        <Btn @click="join(joinForm)">가입하기</Btn>
      </div>

      <div class="info_msg">
        <a href="/login"> 이미 계정이 있으신가요?</a>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import Btn from "../../components/common/GlobalButton.vue";
import {useUserStore} from "@/stores/UserStore";
import {reactive, ref} from "vue";
import type {JoinRequest} from "@/api/user/request/JoinRequests";
import {isValidEmail} from "@/stores/util/EmaiValidator";
import {useRouter} from "vue-router";

const passwordConfirm = ref<string>("");
const joinForm = reactive<JoinRequest>({password: "", email: "", name: "", phoneNumber: ""});
const emailChecker = ref<boolean>(false)
const passwordChecker = ref<boolean>(false)
const passwordConfirmChecker = ref<boolean>(false)

const user = useUserStore();
const router = useRouter()
const {createUser, checkDuplicateEmail} = user;

const join = async (joinRequest: JoinRequest) => {
  try {
    await createUser(joinRequest)
    await router.push('/')
  } catch (err) {
    console.log('회원가입 실패 : ', err)
  }
}
/**
 * 이메일 중복체크
 * @param email 사용자가 입력한 이메일
 */
const validateEmail = async () => {
  const email = joinForm.email
  if (isValidEmail({email})) {
    try {
      const duplicated = await checkDuplicateEmail(email)
      emailChecker.value = !duplicated
    } catch (err) {
      console.log(`이메일 중복 검시 중 에러 발생 : ${err}`)
    }
  } else {
    return false
  }
}

const validatePassword = (input: string) => {
  passwordChecker.value = input.length >= 8;
}

const validatePasswordConfirm = (input: string) => {
  passwordConfirmChecker.value = input === joinForm.password
}

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
