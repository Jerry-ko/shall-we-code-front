<template>
  <div class="index_wrap">
    <header>
      <!--      <img alt="logo" src="../assets/image/logo_facebook.svg"/>-->
      <h1>Shall we code?</h1>
    </header>

    <main class="login_wrap">
      <section class="user_info_form">
        <p class="title">Shall we code에 로그인</p>

        <v-form>
          <v-text-field col="10" label="이메일" outlined required single-line />

          <v-text-field label="비밀번호" outlined required single-line />

          <v-btn class="btn_login" outlined width="364"> 로그인</v-btn>
        </v-form>

        <a class="help_msg" href="">비밀번호를 잊으셨나요?</a>
        <div class="separate_bar"></div>
        <Button style="text-decoration: none">
          <a href="/signup">새 계정 만들기</a>
        </Button>
      </section>
    </main>

  </div>
</template>

<script setup>
import Button from "../components/common/GlobalButton.vue";</script>

<style lang="scss" scoped>
.index_wrap {
  height: 100vh;
  padding: 80px 0;
  background: #f0f2f5;
}

a {
  text-decoration: none;
}

header h1 {
  width: 100%;
  height: 85px;
  text-align: center;
}

.login_wrap {
  display: flex;
  justify-content: center;
  align-items: center;

  .tit {
    padding: 24px 0 16px;
    font-size: 18px;
    line-height: 22px;
  }

  .help_msg {
    display: block;
    margin: 10px 0;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    color: #1877f2;
  }

  .separate_bar {
    margin-bottom: 15px;
    border-bottom: 1px solid #dadde1;
  }
}

.img_wrap {
  img {
    height: 106px;
  }
}

h2 {
  font-size: 28px;
  font-weight: normal;
  line-height: 32px;
  width: 500px;
}

.title {
  margin: 24px 0 16px 0;
  font-size: 20px;
  line-height: 22px;
}

.user_info_form {
  float: right;
  padding: 0 0 24px;
  border: none;
  border-radius: 8px;
  margin: 20px 16px;
  text-align: center;
  width: 396px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  box-sizing: border-box;
}

::v-deep {
  .v-text-field {
    margin: auto;
    width: 364px;
  }

  .btn_login {
    border: none;
    background-color: #1877f2;
    height: 48px !important;

    .v-btn__content {
      font-size: 20px;
      font-weight: 700;
      color: white;
    }
  }
}
</style>
