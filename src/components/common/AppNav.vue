<template>
  <div class="app_nav">
    <header class="desktop tw-py-18px tw-bg-white tw-fixed tw-w-full tw-z-50">
      <div class="tw-container tw-m-auto tw-px-14px">
        <div class="ui middle aligned grid">
          <div class="eight wide column">
            <a href="/" class="logo tw-inline-block"><img class="tw-w-full" src="../../assets/images/gleac-logo.png"></a>
          </div>
          <div class="eight wide right aligned computer only column">
            <div class="menu">
              <a class="item tw-text-12px tw-font-semibold tw-text-primary tw-mr-12px tw-cursor-pointer" @click="$parent.open_white_paper_modal()">Our Whitepaper</a>
              <a class="item tw-text-12px tw-font-semibold tw-text-primary tw-mr-12px" href="#" v-scroll-to="{el:'#about', offset: -150}">About Us</a>

              <router-link :to="{ name: 'BenchmarkLogin'}" class="item tw-text-12px tw-font-semibold tw-text-primary tw-mr-12px">
                Take Benchmark
              </router-link>
              <router-link :to="{ name: 'Login'}" class="ui basic primary button">
                Login
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="banner tw-fixed tw-bg-primary tw-w-full">
      <div class="tw-container tw-m-auto tw-px-14px">
        <div class="tw-font-rubik  tw-text-white  tw-text-13px sm:tw-text-16px">Check your fit for the No.1 emerging job as a <a href="#" style="color: #fff" class="tw-underline tw-text-white hover:tw-underline">Contact Tracer</a> or try and develop the new skills needed in <a href="https://readiness.gleac.com/micro-practice-sales" style="color: #fff" class="tw-underline tw-text-white hover:tw-underline">Sales</a> in a Covid world.
        </div>
      </div>
    </div>

    <div class="cookie_banner tw-fixed tw-w-full" v-if="show_cookies">
      <div class="tw-container tw-m-auto tw-px-14px">
        <div class="ui middle aligned stackable grid">
          <div class="twelve wide column">
            <div class="tw-text-white tw-text-16px tw-font-semibold tw-mb-4px tw-relative tw-pl-18px"><img src="../../assets/images/cookie.svg" class="tw-absolute tw--left-3px"/>Oh, our Sweet Cookies..
            </div>
            <div class="tw-text-white tw-text-12px">We use cookies to provide the services and features offers on our website and improve our user experience
              <router-link :to="{ name: 'CookiePolicy'}" class="tw-underline tw-text-white hover:tw-text-white hover:tw-underline">Learn More</router-link>
            </div>
          </div>

          <div class="four wide right aligned column">
            <span class="tw-hidden sm:tw-block"><button class="ui button basic inverted" @click="hideCookieBanner">Got it</button></span>
            <span class="tw-block sm:tw-hidden"><button class="ui fluid button basic inverted" @click="hideCookieBanner">Got it</button></span>

          </div>

        </div>

      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'AppNav',
    data(){
      return{
        show_cookies:true,
      }
    },
		methods:{
			hideCookieBanner() {
				this.show_cookies = false;
				this.$cookies.set("cookiebanner", "false");
			}
		},
		mounted() {
			if (this.$cookies.isKey("cookiebanner")) {
				this.show_cookies = false;
			}
		}
  }
</script>

<style lang="scss">
  .app_nav{
    header {
      a.logo {
        max-width: 110px;
      }
    }
    // Banner styles
    .banner {
      margin-top: 72px;
      padding: 22px 0;
      z-index: 50;
    }

    // Banner styles
    .cookie_banner {
      background-color: #333333;
      bottom: 0;
      padding: 22px 0;
      z-index: 50;
    }

  }


</style>
