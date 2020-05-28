<template>
  <div class="footer">
    <!-- footer section start-->
    <section class="footer tw-bg-primary tw-text-white">
      <div class="tw-container tw-m-auto">
        <div class="ui stackable grid">
          <div class="seven wide column">
            <img src="../../assets/images/footer_logo.png" style="width:106px">
            <div class="tw-font-rubik tw-text-12px tw-mt-20px tw-mb-4px">admin@gleac.com</div>
            <div class="tw-font-rubik tw-text-12px">5th Floor, Tower-C , DLF Cyber <br>Greens, Gurgaon Gurgaon HR<br> 122002 IN</div>
          </div>
          <div class="two wide column">
            <img src="../../assets/images/badges.png" style="width:67px">
          </div>
          <div class="three wide column">
            <div class="tw-font-rubik tw-font-medium">Company</div>
            <a @click="$parent.open_white_paper_modal()" class="tw-font-rubik tw-text-white tw-block hover:tw-text-white hover:tw-underline tw-mt-14px tw-cursor-pointer">Our whitepaper</a>
            <router-link :to="{ name: 'Login'}" class="tw-font-rubik tw-text-white tw-block hover:tw-text-white hover:tw-underline tw-mt-14px">
              Benchmark
            </router-link>
            <a href="#" v-scroll-to="{el:'#about', offset: -150}" class="tw-font-rubik tw-text-white tw-block hover:tw-text-white hover:tw-underline tw-mt-14px">About Us</a>
          </div>
          <div class="four wide column">
            <div class="tw-font-rubik tw-font-medium tw-mb-14px">Subscribe To Newsletter</div>
            <div class="ui inverted action fluid input">
              <input type="text" placeholder="Enter your Email ID">
              <button class="ui primary button">Subscribe</button>
            </div>
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
      <div class="tw-container tw-m-auto">
        <div class="ui two column stackable grid">
          <div class="column">
            <div class="tw-font-rubik">©GLEAC 2019. All Rights Reserved</div>
          </div>

          <div class="column tw-text-left sm:tw-text-right">
            <a href="" class="tw-font-rubik tw-text-white hover:tw-text-white hover:tw-underline tw-mr-14px">Terms and Condition</a>
            <a href="" class="tw-font-rubik tw-text-white hover:tw-text-white hover:tw-underline tw-mr-14px">Privacy Policy</a>
            <a href="" class="tw-font-rubik tw-text-white hover:tw-text-white hover:tw-underline">Data Policy</a>
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
      }
    }
  }
</script>

<style lang="scss">
  .footer{
    section.footer{
      padding-top:50px;
      padding-bottom:50px;
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
