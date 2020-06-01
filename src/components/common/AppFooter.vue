<template>
  <div class="footer">
    <!-- footer section start-->
    <section class="footer tw-bg-primary tw-text-white">
      <div class="tw-container tw-m-auto tw-px-14px">
        <div class="ui stackable grid">
          <div class="seven wide column">
            <img src="../../assets/images/footer_logo.png" style="width:106px">
            <a href="mailto:yourvoice@gleac.com" class="tw-font-rubik tw-text-white hover:tw-text-white hover:tw-underline tw-block tw-mt-20px tw-mb-4px">yourvoice@gleac.com</a>

            <div class="tw-font-rubik tw-text-12px tw-font-semibold">Dubai | India | US</div>
          </div>
          <div class="two wide column">
            <img src="../../assets/images/badges.png" style="width:67px">
          </div>
          <div class="three wide column">
            <div class="tw-font-rubik tw-font-medium">Company</div>
            <a @click="$parent.open_white_paper_modal()" class="tw-font-rubik tw-text-white tw-block hover:tw-text-white hover:tw-underline tw-mt-14px tw-cursor-pointer">Our Whitepaper</a>
            <router-link :to="{ name: 'BenchmarkLogin'}" class="tw-font-rubik tw-text-white tw-block hover:tw-text-white hover:tw-underline tw-mt-14px">
              Benchmark
            </router-link>
            <a href="#" v-scroll-to="{el:'#about', offset: -150}" class="tw-font-rubik tw-text-white tw-block hover:tw-text-white hover:tw-underline tw-mt-14px">About Us</a>
          </div>
          <div class="four wide column">
            <div class="tw-font-rubik tw-font-medium tw-mb-14px">Subscribe To Newsletter</div>
            <div class="ui inverted action fluid input">
              <input type="email" placeholder="Enter your Email ID" v-model="subscribeEmail">
              <button class="ui primary button" @click="subscribeToNewsletter">Subscribe</button>
            </div>
						<div class="text-white" v-html="subscribeMessage"></div>
            <div class="ui two column grid">
              <div class="column">
                <div class="tw-font-rubik tw-font-medium tw-mt-14px tw-mb-14px">Follow us</div>
                <a href="https://www.facebook.com/gleac21centuryskills/" class="tw-text-white hover:tw-text-white"><i class="icon large facebook tw-cursor-pointer"></i></a>
                <a href="https://twitter.com/GLEACskills" class="tw-text-white hover:tw-text-white"><i class="icon large twitter tw-cursor-pointer"></i></a>
                <a href="https://www.linkedin.com/company/gleac21centuryskills/" class="tw-text-white hover:tw-text-white"><i class="icon large linkedin tw-cursor-pointer"></i></a>
              </div>

              <div class="column">
                <div class="tw-font-rubik tw-font-medium tw-mt-14px tw-mb-14px">Download</div>
                <a href="https://play.google.com/store/apps/details?id=com.gleac" class="tw-text-white hover:tw-text-white"><i class="icon large google play tw-cursor-pointer"></i></a>
                <a href="https://apps.apple.com/in/app/gleac-your-21st-century-skills/id1281993636" class="tw-text-white hover:tw-text-white"><i class="icon large apple tw-cursor-pointer"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <!-- footer section end-->

    <section class="sub-footer tw-bg-primary tw-text-white">
      <div class="tw-container tw-m-auto tw-px-14px">
        <div class="ui two column stackable grid">
          <div class="column">
            <div class="tw-font-rubik">©GLEAC 2020. All Rights Reserved</div>
          </div>

          <div class="column tw-text-left sm:tw-text-right">
            <router-link :to="{ name: 'Terms'}" class="tw-font-rubik tw-text-white hover:tw-text-white hover:tw-underline tw-mr-14px">Terms and Condition</router-link>
            <router-link :to="{ name: 'DataPrivacy'}" class="tw-font-rubik tw-text-white hover:tw-text-white hover:tw-underline">Privacy & Data Policy</router-link>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script>

  export default {
    name: 'AppFooter',
    data(){
      return{
				subscribeEmail: "",
				subscribeMessage: "",
      }
		},
		methods: {
			subscribeToNewsletter() {
				const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				console.log("Regex check", reg.test(this.subscribeEmail.toLowerCase()))
				if (this.subscribeEmail !== "" && reg.test(this.subscribeEmail.toLowerCase())) {
					console.log("Email is valid!");
					const response = this.axios.get(`https://gleac.us16.list-manage.com/subscribe/post-json?u=5f51f150a24c51e9eefd7b405&id=17f933f6a5&subscribe=Subscribe&EMAIL=${this.subscribeEmail}`);
					response.then(res => {
						let resJson = res.data;
						let msg = resJson.msg;
						if (msg.indexOf("0 - ") > -1) {
							msg = msg.split("0 - ")[1];
						}
						this.subscribeMessage = msg;
					})
					response.catch(e => {
						console.log(e);
						this.subscribeMessage = "Something went wrong. Please try again later";
					})
				} else {
					this.subscribeMessage = "Please enter a valid email address"
					console.log("Email is invalid")
				}
			}
		}
  }
</script>

<style lang="scss">
  .footer{
    section.footer{
      padding-top:50px;
      padding-bottom:25px;
      .icon{
        font-size: 16px;
        margin-right: 10px;
      }
    }

    section.sub-footer{
      padding: 25px 0;
      border-top: 1px solid #ffffff2b;
    }
  }


</style>
