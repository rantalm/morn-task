<template>
  <div class="container login-view">
    <main class="login-box">
      <div class="login-box__inner">
        <h1 class="login-box__title">היי, טוב לראות אותך</h1>

        <form class="login-box__form" @submit.prevent="submit">
          <div class="login-box__el">
            <input
              v-model="email"
              class="login-box__input f-n"
              id="email"
              type="email"
              placeholder="מייל"
            />
            <label for="email" class="hint f-n">כתובת המייל איתה נרשמת לחשבונית ירוקה</label>
          </div>
          <div class="login-box__el">
            <input
              v-model="pass"
              class="login-box__input f-n"
              id="password"
              type="password"
              placeholder="סיסמה"
            />
            <label for="password"><a href="#" class="hint hint--ul f-n">שכחת סיסמה?</a></label>
          </div>

          <div class="login-box__btns">
            <button class="btn btn--success btn--large" type="submit">כניסה</button>
            <a href="#" class="btn btn--icon">כניסה מהירה</a>
          </div>
        </form>
        <strong class="info-text f-n"
          >עוד לא הצטרפת? <a href="#" class="f-n">ל-30 יום ניסיון חינם</a></strong
        >
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useUserStore } from '../stores/user'

export default {
  setup() {
    const user = useUserStore()
    const email = ref('')
    const pass = ref('')

    const submit = () => {
      if (!email.value.length || !pass.value.length) return

      user.login(email.value, pass.value)
    }
    return { submit, email, pass }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/setup';

.login-view {
  @include atMedium {
    height: calc(100vh - 12.5rem);
    padding-top: 7rem;
  }

  &::after {
    width: 80vw;
    height: 80vw;
    content: '';
    display: block;
    position: relative;
    background-image: url(../assets/img/green_login_page.svg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    margin: 5rem auto 1rem;

    @include atSmall {
      width: 36rem;
      height: 36rem;
    }

    @include atMedium {
      position: absolute;
      opacity: 1;
      position: fixed;
      left: 10%;
      transform: translateY(-50%);
      top: 50%;
      width: 50vw;
      height: 100vh;
      max-width: 70.8rem;
      max-height: 68rem;
    }
  }
}
.login-box {
  z-index: 5;
  text-align: center;
  @include atMedium {
    width: 50%;
    text-align: right;
  }

  &__inner {
    max-width: 42rem;
    margin: 0 auto;
    z-index: 5;
    position: relative;
  }

  &__title {
    font-size: 5rem;
    line-height: 1;
    font-weight: bold;
    color: $color-text;
    margin-bottom: 5.5rem;
    margin-top: 2rem;

    @include atMedium {
      margin-bottom: 0;
      margin-top: 0;
    }

    @include atMedium {
      font-size: 5.6rem;
    }
  }

  &__el {
    margin: 3.5rem 0;

    @include atMedium {
      margin: 6.5rem 0;
    }
  }
  &__input {
    display: block;
    border: 0;
    border-bottom: 1px solid $color-note;
    padding: 1rem 0;
    width: 100%;
    background: transparent;
    font-size: 1.8rem;

    &::placeholder {
      color: $color-note;
    }
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @include atSmall {
      flex-wrap: nowrap;
    }
    .btn {
      width: 100%;

      @include atSmall {
        width: initial;
        flex-basis: 48%;
      }

      &:not(:last-child) {
        margin-bottom: 1.6rem;

        @include atSmall {
          margin-bottom: 0;
        }
      }

      &:not(:last-child) {
        @include atMedium {
          margin-left: 2rem;
        }
      }

      &--success {
        @include atMedium {
          flex-grow: 1;
        }
      }
    }
  }
  &__form {
    margin-bottom: 4rem;
  }
}
.hint {
  font-size: 1.4rem;
  color: $color-text;
  margin-top: 0.4rem;
  display: block;
}
.info-text,
.info-text a {
  font-size: 1.8rem;
  color: $color-note;
  font-weight: 500;
}
</style>
