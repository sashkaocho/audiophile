<template>
  <section class="checkout-form">
    <h2>checkout</h2>
    <article class="checkout-form__control">
      <h5>billing details</h5>
      <div class="form-control__row">
        <div class="form-control" :class="{ invalid: !name.isValid }">
          <div class="form-control__label">
            <label for="name">Name</label>
            <label v-if="!name.isValid" class="err" for="name">{{
              emptyFieldErr(name.value)
            }}</label>
          </div>
          <input type="text" name="name" v-model.trim="name.value" />
        </div>
        <div class="form-control" :class="{ invalid: !email.isValid }">
          <div class="form-control__label">
            <label for="email">Email Address</label>
            <label v-if="!email.isValid" class="err" for="email">{{
              emailErr
            }}</label>
          </div>
          <input type="text" name="email" v-model.trim="email.value" />
        </div>
      </div>
      <div class="form-control" :class="{ invalid: !phone.isValid }">
        <div class="form-control__label">
          <label for="phone">Phone Number</label>
          <label v-if="!phone.isValid" class="err" for="phone">{{
            numberErr(phone.value)
          }}</label>
        </div>
        <input type="text" name="phone" v-model.trim="phone.value" />
      </div>
    </article>
    <article class="checkout-form__control">
      <h5>shipping info</h5>
      <div class="form-control" :class="{ invalid: !address.isValid }">
        <div class="form-control__label">
          <label for="address">Address</label>
          <label v-if="!address.isValid" class="err" for="address">{{
            emptyFieldErr(address.value)
          }}</label>
        </div>
        <input type="text" name="address" v-model.trim="address.value" />
      </div>
      <div class="form-control__row">
        <div class="form-control" :class="{ invalid: !zip.isValid }">
          <div class="form-control__label">
            <label for="zip">ZIP Code</label>
            <label v-if="!zip.isValid" class="err" for="zip">{{
              numberErr(zip.value)
            }}</label>
          </div>
          <input type="text" name="zip" v-model.trim="zip.value" />
        </div>
        <div class="form-control" :class="{ invalid: !city.isValid }">
          <div class="form-control__label">
            <label for="city">City</label>
            <label v-if="!city.isValid" class="err" for="city">{{
              emptyFieldErr(city.value)
            }}</label>
          </div>
          <input type="text" name="city" v-model.trim="city.value" />
        </div>
      </div>
      <div class="form-control" :class="{ invalid: !country.isValid }">
        <div class="form-control__label">
          <label for="country">Country</label>
          <label v-if="!country.isValid" class="err" for="country">{{
            emptyFieldErr(country.value)
          }}</label>
        </div>
        <input type="text" name="country" v-model.trim="country.value" />
      </div>
    </article>
    <article class="checkout-form__control">
      <h5>payment details</h5>
      <div class="form-control__radio" :class="{ invalid: !payment.isValid }">
        <div class="form-control__label--radio">
          <label class="payment-title" for="payment">Payment Method</label>
          <label v-if="!payment.isValid" class="err" for="payment">{{
            paymentErr
          }}</label>
        </div>
        <div class="radio-control">
          <div
            :style="{
              borderColor:
                payment.value === 'emoney'
                  ? '#d87d4a'
                  : !payment.isValid
                  ? '#cd2c2c'
                  : '',
            }"
            class="radio"
          >
            <label class="radiobtn">
              <input
                @click="radioCheck"
                name="payment"
                type="radio"
                value="emoney"
                v-model.trim="payment.value"
              />
              <span class="checkmark"></span>
            </label>
            <label class="payment" for="emoney">e-Money</label>
          </div>
          <div
            :style="{
              borderColor:
                payment.value === 'cash'
                  ? '#d87d4a'
                  : !payment.isValid
                  ? '#cd2c2c'
                  : '',
            }"
            class="radio"
          >
            <label class="radiobtn">
              <input
                @click="radioCheck"
                name="payment"
                type="radio"
                value="cash"
                v-model.trim="payment.value"
              />
              <span class="checkmark"></span>
            </label>
            <label class="payment" for="cash">Cash on Delivery</label>
          </div>
        </div>
      </div>
      <div v-if="payment.value === 'emoney'" class="form-control__row">
        <div class="form-control" :class="{ invalid: !emoneyNum.isValid }">
          <div class="form-control__label">
            <label for="emoney-number">e-Money Number</label>
            <label v-if="!emoneyNum.isValid" class="err" for="emoney-num">{{
              numberErr(emoneyNum.value)
            }}</label>
          </div>
          <input
            type="text"
            name="emoney-number"
            v-model.trim="emoneyNum.value"
          />
        </div>
        <div class="form-control" :class="{ invalid: !emoneyPin.isValid }">
          <div class="form-control__label">
            <label for="emoney-pin">e-Money PIN</label>
            <label v-if="!emoneyPin.isValid" class="err" for="emoney-pin">{{
              numberErr(emoneyPin.value)
            }}</label>
          </div>
          <input type="text" name="emoney-pin" v-model.trim="emoneyPin.value" />
        </div>
      </div>
      <div v-if="payment.value === 'cash'" class="form-cash">
        <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M46.594 8.438H42.28c-.448 0-.869.213-1.134.574l-2.694 3.674a1.15 1.15 0 1 1-1.848-1.37c2.568-3.53 2.864-3.545 2.864-4.285 0-.779-.636-1.406-1.407-1.406h-5.404a17.658 17.658 0 0 1 9.606-2.813h4.33a1.406 1.406 0 0 0 0-2.812h-4.33c-5.277 0-10.33 2.02-14.142 5.625h-8.34c-.777 0-1.407.63-1.407 1.406v9.938H9.844c-.777 0-1.406.63-1.406 1.406v15.6a14.053 14.053 0 0 0-7.824 3.089 1.406 1.406 0 1 0 1.772 2.185 11.226 11.226 0 0 1 7.048-2.499h3.129c.775 0 1.406.63 1.406 1.406 0 .776-.631 1.407-1.406 1.407H8.436a1.406 1.406 0 0 0 0 2.812h13.728a4.226 4.226 0 0 1-3.977 2.813H1.405a1.406 1.406 0 0 0 0 2.812h16.782c3.395 0 6.236-2.42 6.89-5.625h7.36c.776 0 1.406-.63 1.406-1.406V25.312h9.843c.777 0 1.407-.63 1.407-1.406V11.25h1.5a1.406 1.406 0 0 0 0-2.813ZM33.61 17.599a1.404 1.404 0 0 0-1.172-.63h-3.085c-1.084-1.834.241-4.172 2.381-4.172 2.531 0 3.708 3.115 1.876 4.802ZM21.188 8.437h14.06c-.744 1.03-1.057 1.305-1.352 1.983-4.216-1.779-8.726 2.057-7.559 6.549h-5.15V8.437ZM19.78 19.782h2.813v5.625H19.78v-5.625Zm11.25 19.782h-14.49c.969-2.735-1.07-5.626-3.979-5.626H11.25V19.782h5.719v7.032c0 .776.63 1.406 1.406 1.406H24c.777 0 1.406-.63 1.406-1.407v-7.03h5.625v19.78ZM33.844 22.5v-1.771a5.56 5.56 0 0 0 3.453-4.769 3.954 3.954 0 0 0 3.424-1.611l1.56-2.127V22.5h-8.437Z"
            fill="#D87D4A"
          />
        </svg>
        <p>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </div>
    </article>
  </section>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const phoneRegex = ref(/[^0-9\s]/);

    const name = computed({
      get() {
        return store.state.name;
      },
      set(value) {
        store.commit('setName', value);
      },
    });

    const email = computed({
      get() {
        return store.state.email;
      },
      set(value) {
        store.commit('setEmail', value);
      },
    });

    const phone = computed({
      get() {
        return store.state.phone;
      },
      set(value) {
        store.commit('setPhone', value);
      },
    });

    const address = computed({
      get() {
        return store.state.address;
      },
      set(value) {
        store.commit('setAddress', value);
      },
    });

    const zip = computed({
      get() {
        return store.state.zip;
      },
      set(value) {
        store.commit('setZip', value);
      },
    });

    const city = computed({
      get() {
        return store.state.city;
      },
      set(value) {
        store.commit('setCity', value);
      },
    });

    const country = computed({
      get() {
        return store.state.country;
      },
      set(value) {
        store.commit('setCountry', value);
      },
    });

    const payment = computed({
      get() {
        return store.state.payment;
      },
      set(value) {
        store.commit('setPayment', value);
      },
    });

    const emoneyNum = computed({
      get() {
        return store.state.emoneyNum;
      },
      set(value) {
        store.commit('setEmoneyNum', value);
      },
    });

    const emoneyPin = computed({
      get() {
        return store.state.emoneyPin;
      },
      set(value) {
        store.commit('setEmoneyPin', value);
      },
    });

    const emailErr = computed(function () {
      if (email.value.value === '') {
        return 'fill the field';
      } else if (!email.value.value.includes('@')) {
        return 'wrong format';
      }
      return '';
    });

    const paymentErr = computed(function () {
      if (payment.value.value === '') {
        return 'choose payment method';
      }
      return '';
    });

    function emptyFieldErr(field) {
      if (field === '') {
        return 'fill the field ';
      }
      return '';
    }

    function numberErr(field) {
      if (field === '') {
        return 'fill the field';
      } else if (field.match(phoneRegex.value)) {
        return 'wrong format';
      }
      return '';
    }

    function radioCheck(event) {
      event.target.checked = true;
    }

    return {
      name,
      email,
      phone,
      address,
      zip,
      city,
      country,
      payment,
      emoneyNum,
      emoneyPin,
      emailErr,
      paymentErr,
      radioCheck,
      emptyFieldErr,
      numberErr,
    };
  },
};
</script>

<style lang="scss" scoped>
h5 {
  color: $dark-orange;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 25px;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  margin: 0;
}

.checkout-form__control {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.checkout-form {
  height: fit-content;
  width: 760px;
  border-radius: 8px;
  background: white;
  gap: 3.5rem;
  padding: 3.5rem 3rem;
  display: flex;
  flex-direction: column;

  .form-control__row {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  .form-control {
    height: 81px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .form-control__label {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      label {
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
      }

      .err {
        font-weight: 500;
        color: $err-red;
      }
    }

    input {
      outline: 0;
      height: 56px;
      font-size: 1rem;
      font-weight: 500;
      background: #ffffff;
      padding-left: 0.8rem;
      border: 1px solid $dark-gray;
      border-radius: 8px;
      &:focus {
        border-color: $dark-orange;
      }
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.14px;
    text-transform: uppercase;
    margin: 0;
  }

  .invalid {
    label {
      color: $err-red;
    }

    input {
      border-color: $err-red;
    }
  }
}

.form-control__radio {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  .form-control__label--radio {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label {
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    }

    .err {
      font-weight: 500;
      color: $err-red;
    }
  }

  .payment-title {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
  }
}

.radio-control {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: space-between;
  gap: 1rem;

  .radio {
    display: flex;
    margin-left: 0.2rem;
    height: 56px;
    width: 100%;
    border: 1px solid $dark-gray;
    border-radius: 8px;
    display: flex;
    justify-content: left;
    padding-left: 1rem;
    align-items: center;
  }

  input {
    display: none;
    &:checked + .checkmark {
      display: inline-block;
      background: $dark-orange;
    }
  }

  label.payment {
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    padding-left: 1rem;
  }

  .radiobtn {
    width: 22px;
    height: 22px;
    border: 2px solid $dark-gray;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .checkmark {
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      border-radius: 50%;
      background: $dark-gray;
      display: none;
    }
  }
}

.form-cash {
  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    @include opacity-dark();
    margin: 0;
    width: 540px;
  }
}
</style>
