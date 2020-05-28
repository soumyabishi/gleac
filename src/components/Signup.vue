<template>
  <div class="Signup">
    <div class="tw-flex tw-justify-center tw-items-stretch sm:tw-h-screen">
      <div class="left-content tw-justify-center tw-items-center tw-flex tw-flex-col">
        <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" class="login_slider">
          <div class="slider slider_1">
              <div class="text tw-text-center">Our Benchmarks are British Psychology Approved and highly accurate showing a knee-jerk of your unique strengths and gap areas.</div>
          </div>

          <div class="slider slider_2">
            <div class="text tw-text-center">Our benchmarks can be taken right off you phones are are just 10-15 minutes.</div>
          </div>

          <div class="slider slider_3">
            <div class="text tw-text-center">Our benchmarks pinpoints behavioral job fitment and the skills needed to be developed for the role.
            </div>
          </div>

        </VueSlickCarousel>
      </div>

      <div class="right-content tw-flex tw-flex-col tw-relative">

        <router-link :to="{ name: 'Home'}"><img src="../assets/images/gleac-logo-colored.png" class="logo tw-absolute tw-top-30px tw-left-14px sm:tw-left-30px"></router-link>
        <div class="tw-font-rubik tw-text-16px tw-absolute tw-top-30px tw-right-30px tw-hidden sm:tw-block">Already have an account? <router-link :to="{ name: 'Login'}" class="tw-text-primary tw-underline hover:tw-underline">Login</router-link></div>
        <div class="tw-font-rubik tw-text-16px tw-mt-30px tw-block sm:tw-hidden">Already have an account? <router-link :to="{ name: 'Login'}" class="tw-text-primary tw-underline hover:tw-underline">Login</router-link><</div>

        <h1 class="tw-text-32px tw-text-text-color tw-leading-38px tw-mb-12px tw-font-bold">Human Skills Matter</h1>
        <p class="tw-text-16px tw-text-secondary tw-font-medium tw-leading-26px tw-mb-34px tw-mt-20px">Gleac measures and
          develops human skills for any job in 10 minutes a day using A.I.</p>

        <div class="login_wrapper tw-text-center">
          <div class="tw-text-16px tw-text-secondary tw-font-medium tw-leading-26px tw-mb-15px">Signup with</div>
          <a class="tw-mr-15px"><img src="../assets/images/google.svg"> </a>
          <a class="tw-mr-15px"><img src="../assets/images/facebook.svg"> </a>
          <a class="tw-mr-15px"><img src="../assets/images/linkedin.svg"> </a>
          <a><img src="../assets/images/apple.svg"> </a>
          <div class="tw-text-16px tw-text-secondary tw-font-medium tw-leading-26px tw-mt-20px tw-mb-10px">Or email</div>
          <form class="ui big form">
            <div class="field">
              <input type="text" name="name" placeholder="Your Name">
            </div>
            <div class="field">
              <input type="email" name="email" placeholder="Email ID">
            </div>
            <div class="field">
              <input type="password" name="password" placeholder="Password">
            </div>

            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" tabindex="0" class="hidden">
                <label><div class="tw-font-rubik tw-text-16px">I agree to Gleac <a href="/" class="tw-text-primary tw-underline hover:tw-underline">Terms of use</a> and <a href="/" class="tw-text-primary tw-underline hover:tw-underline">Privacy Policy</a></div></label>
              </div>
            </div>
            <div class="field">
              <div class="ui checkbox">
                <input type="checkbox" tabindex="0" class="hidden">
                <label><div class="tw-font-rubik tw-text-16px">I would like to receive newsletter from Gleac</div></label>
              </div>
            </div>

            <button class="ui primary  big fluid button">Sign up</button>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'Signup',
    data() {
      return {}
    },
    methods:{
    },
    components:{
      VueSlickCarousel
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap');

  @media (max-width: 640px){
    .Signup {
      .left-content {
        display: none;
      }
      .right-content {
        width: 100% !important;
        padding: 100px 14px !important;
      }
    }
  }


  .Signup{
    .left-content{
      width: 40%;
      background-color: #1C1C1C;
    }
    .right-content{
      width: 60%;
      overflow-y: auto;
      padding: 90px 210px;
      .form{
        text-align: left;
      }
    }

    .logo{
      width: 111px;
    }
    .login_slider{
      width: 100%;
      position: relative;
      div:focus{
        outline: none;
      }

      .slider{
        position: relative;
      }
      .slider_1{
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0, 1) 100%), url("../assets/images/login_slider/slider_1.jpg") no-repeat center center;
        background-size: cover;
        height: 100vh;
      }

      .slider_2{
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0, 1) 100%), url("../assets/images/login_slider/slider_2.jpg") no-repeat center center;
        background-size: cover;
        height: 100vh;
      }
      .slider_3{
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(0,0,0, 1) 100%), url("../assets/images/login_slider/slider_3.jpg") no-repeat center center;
        background-size: cover;
        height: 100vh;
      }
      .text{
        position: absolute;
        bottom: 100px;
        color: #fff;
        font-family: Rubik, sans-serif;
        padding: 0 20px;
        font-size: 16px;
        line-height: 1.6;
      }

      .slick-dots{
        bottom: 55px !important;
      }
      .slick-dots li.slick-active button:before{
        color:white !important;
      }

      .slick-dots li button:before{
        color:white !important;
      }
    }
  }

</style>

