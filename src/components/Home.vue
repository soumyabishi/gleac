<template>
  <div class="home">
    <header class="desktop tw-px-30px tw-py-18px tw-bg-white tw-fixed tw-w-full tw-z-50">
      <div class="ui container">
        <div class="ui middle aligned grid">
          <div class="eight wide column">
            <a href="/" class="logo tw-inline-block"><img class="tw-w-full" src="/src/assets/images/gleac-logo.png"></a>
          </div>
          <div class="eight wide right aligned computer only column">
            <div class="menu">
              <a class="item tw-text-12px tw-font-semibold tw-text-primary tw-mr-12px">Our Whitepaper</a>
              <a class="item tw-text-12px tw-font-semibold tw-text-primary tw-mr-12px">About Us</a>
              <a class="item tw-text-12px tw-font-semibold tw-text-primary tw-mr-12px">Take Benchmark</a>
              <button class="ui button">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="banner tw-fixed tw-bg-primary tw-text-white tw-w-full tw-text-center tw-text-16px">
      Check your job fitment for the No. I growing job ( over 100k job available in the US alone) as a CONTACT TRACER <a
      href="/" class="tw-underline tw-text-white hover:tw-text-white hover:tw-underline">here</a>
    </div>

    <div class="content">

      <!-- intro section start -->
      <section class="intro">
        <div class="ui container">
          <div class="ui two column middle aligned stackable grid">
            <div class="column">
              <h1 class="tw-text-30px tw-text-text-color tw-leading-38px tw-mb-6px">Human Skills Matter</h1>
              <p class="tw-text-16px tw-text-text-color tw-font-medium tw-leading-26px tw-mb-34px">Gleac measures and
                develops human skills for any job in 10 minutes a day using A.I.</p>
              <div class="ui action large fluid input">
                <input type="text" placeholder="Type in a job title and see the skills needed">
                <button class="ui primary button">Search</button>
              </div>
            </div>

            <div class="center aligned column">
              <img src="/src/assets/images/intro_image.png" style="width: 410px;">
            </div>
          </div>
        </div>
      </section>
      <!-- intro section send -->

      <!-- clients section start -->
      <section class="clients tw-bg-secondary">
        <div class="ui container">

          <div class="tw-flex">
            <div class="tw-w-1/9 tw-flex">
              <div class="image_wrapper">
                <img src="/src/assets/images/clients/forbes.png">
              </div>
            </div>
            <div class="tw-w-1/9 tw-flex">
              <div class="image_wrapper">
                <img src="/src/assets/images/clients/forbes.png">
              </div>
            </div>
            <div class="tw-w-1/9 tw-flex">
              <div class="image_wrapper">
                <img src="/src/assets/images/clients/forbes.png">
              </div>
            </div>
            <div class="tw-w-1/9 tw-flex">
              <div class="image_wrapper">
                <img src="/src/assets/images/clients/forbes.png">
              </div>
            </div>
            <div class="tw-w-1/9 tw-flex">
              <div class="image_wrapper">
                <img src="/src/assets/images/clients/forbes.png">
              </div>
            </div>
            <div class="tw-w-1/9 tw-flex">
              <div class="image_wrapper">
                <img src="/src/assets/images/clients/forbes.png">
              </div>
            </div>
            <div class="tw-w-1/9 tw-flex">
              <div class="image_wrapper">
                <img src="/src/assets/images/clients/forbes.png">
              </div>
            </div>
            <div class="tw-w-1/9 tw-flex">
              <div class="image_wrapper">
                <img src="/src/assets/images/clients/forbes.png">
              </div>
            </div>
            <div class="tw-w-1/9 tw-flex">
              <div class="image_wrapper">
                <img src="/src/assets/images/clients/forbes.png">
              </div>
            </div>
          </div>

        </div>
      </section>
      <!-- clients section start -->

      <section class="explore">
        <div class="ui container">
           <div class="ui grid">
              <div class="eight wide column">
                 <h2 class="tw-text-20px tw-mb-12px tw-text-primary tw-font-semibold">Explore our Micro-Practices</h2>
                 <p class="tw-text-14px tw-text-description tw-font-medium tw-opacity-50">Journey Map of  a sales person’s daily challenges</p>
              </div>

             <div class="eight wide column">
                  <div class="ui text menu">
                     <div class="item tw-text-secondary tw-font-semibold">Learn by doing </div>
                    <div class="item tw-text-secondary tw-font-semibold">Job role focus content</div>
                    <div class="item tw-text-secondary tw-font-semibold">Practise at your level</div>

                  </div>
             </div>
           </div>
        </div>
      </section>


    </div>

  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {}
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap');

  .home {
    header {
      a.logo {
        max-width: 110px;
      }
    }
    // Content wrapper
    .content {
      padding-top: 135px;
    }
    // Banner styles
    .banner {
      margin-top: 72px;
      padding: 22px 42px;
      font-family: 'Rubik', sans-serif;
      z-index: 50;
    }

    section.intro {
      padding: 60px 0;
    }

    section.clients {
      padding: 28px 0;
      border-top: 1px solid rgba(117, 122, 160, 0.14139);
      border-bottom: 1px solid rgba(117, 122, 160, 0.14139);
      img {
        width: 100%;
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%);
        opacity: 0.5;
        -webkit-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }
      .image_wrapper {
        padding: 6px 24px;
        cursor: pointer;
      }
      .image_wrapper:hover {
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 3px 7px 0 rgba(224, 229, 238, 0.5);
        img {
          -webkit-filter: none;
          filter: none;
          opacity: 1;
        }
      }
    }

    section.explore{
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }

</style>
