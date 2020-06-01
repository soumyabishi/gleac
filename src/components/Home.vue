<template>
  <div class="home">
      <app-nav></app-nav>

      <div class="content_wrapper">

      <!-- intro section start -->
      <section class="intro">
        <div class="tw-container tw-m-auto tw-px-14px">
          <div class="ui two column middle aligned stackable grid">
            <div class="column">
              <h1 class="tw-text-34px tw-text-text-color tw-leading-38px tw-mb-6px tw-font-bold">Human Skills Matter</h1>
              <p class="tw-text-16px tw-text-text-color tw-font-medium tw-leading-26px tw-mb-34px">Gleac measures and
                develops human skills for any job in <br>10 minutes a day using A.I.</p>
              <!--<div class="ui action big fluid input">-->
                <!--<input type="text" placeholder="Type in a job title and see the skills needed">-->
                <!--<button class="ui primary large button">Search</button>-->
              <!--</div>-->
              <v-select :options="job_list" class="job-dropdown" placeholder="Type a job title and see the skills needed" v-model="selected_job"  @input="fetch_skills" >
                <template v-slot:no-options="{ search, searching }">
                  <template v-if="searching">
                    Sorry, no jobs found
                  </template>
                </template>
              </v-select>

            </div>

            <div class="center aligned column" style="position: relative">

              <div class="skills_card tw-shadow-lg tw-absolute tw-text-left" v-if="selected_job">
                <div class="loading" v-if="skill_loading">
                  <img src="../assets/images/skill_placeholder.svg" style="width: 100%">
                </div>
                <div v-if="!skill_loading">
                  <div class="tw-text-16px tw-text-text-color tw-font-semibold tw-mb-10px">{{selected_job}}</div>
                  <div class="tw-text-14px tw-text-text-color tw-font-medium tw-mb-12px">Skills Required</div>
                  <ul class="tags" v-if="skill_list.length>0">
                    <li class="tag" v-for="skill in skill_list">{{skill.skillName}}</li>
                  </ul>
                  <router-link :to="{name: 'BenchmarkLogin'}" class="ui primary big fluid button">Enter Focus Mode</router-link>
                </div>
              </div>

              <img src="../assets/images/intro_image.png" :class="{'tw-invisible': selected_job}" class="intro_image tw-mt-20px sm:mt-0"/>
            </div>

          </div>
        </div>


        <div class="appstore_icons tw-absolute tw-right-30px tw-my-20px sm:tw-my-0px">
          <a href="https://play.google.com/store/apps/details?id=com.gleac"><i class="icon large google play tw-cursor-pointer"></i></a>
          <a href="https://apps.apple.com/in/app/gleac-your-21st-century-skills/id1281993636"><i class="icon large apple tw-cursor-pointer"></i></a>
        </div>
      </section>
      <!-- intro section send -->

      <!-- press section start -->
      <section class="press tw-bg-secondary">
        <div class="tw-container tw-m-auto tw-px-14px">


          <VueSlickCarousel v-bind="slider_settings" class="">
            <div>
              <a class="image_wrapper" href="https://www.stradaeducation.org/spotlight/developing-the-human-side-of-skills/">
                <img src="../assets/images/press/strada.png">
              </a>
            </div>
            <div>
              <div class="image_wrapper" @click="open_case_study_modal()">
                <img src="../assets/images/press/prada.png">
              </div>
            </div>
            <div>
              <div class="image_wrapper" @click="open_case_study_modal()">
                <img src="../assets/images/press/spottabl.png">
              </div>
            </div>
            <div>
              <div class="image_wrapper" @click="open_case_study_modal()">
                <img src="../assets/images/press/pwc.png">
              </div>
            </div>
            <div>
              <a class="image_wrapper" href="https://gulfbusiness.com/entry-interviews-can-save-business/">
                <img src="../assets/images/press/gulf.png">
              </a>
            </div>

            <div>
              <div class="image_wrapper" @click="open_case_study_modal()">
                <img src="../assets/images/press/expo.png">
              </div>
            </div>
            <div>
              <div class="image_wrapper" @click="open_case_study_modal()">
                <img src="../assets/images/press/korn.png">
              </div>
            </div>
            <div>
              <div class="image_wrapper" @click="open_case_study_modal()">
                <img src="../assets/images/press/accenture.png">
              </div>
            </div>
            <div>
              <a class="image_wrapper" href="https://www.forbes.com/sites/jeanneallen/2020/03/13/how-technological-innovation-in-education-is-taking-on-covid-19/#11ae45197bc7">
                <img src="../assets/images/press/forbes.png">
              </a>
            </div>
          </VueSlickCarousel>

        </div>
      </section>
      <!-- press section start -->

      <!-- explore section start -->
      <section class="explore">
        <div class="tw-container tw-m-auto tw-px-14px">
           <div class="tw-flex tw-flex-col md:tw-flex-row">
              <div class="tw-w-full sm:tw-w-1/2">
                 <h2 class="tw-text-20px tw-mb-12px tw-text-primary tw-font-semibold">Explore our Micro-Practices</h2>
                 <p class="tw-text-14px tw-text-description tw-font-medium tw-opacity-50">Journey Map of  a salesperson’s daily challenges</p>
              </div>
              <div class="tw-w-full md:tw-w-1/2 tw-mt-20px md:tw-m-0px tw-text-left md:tw-text-right">
                    <div class="item tw-text-secondary tw-font-semibold tw-mb-10px md:tw-mb-auto md:tw-mr-22px tw-block md:tw-inline-block">
                      <img src="../assets/images/check.svg" class="check tw-mr-8px">Learn by doing
                    </div>
                    <div class="item tw-text-secondary tw-font-semibold tw-mb-10px md:tw-mb-auto md:tw-mr-22px tw-block md:tw-inline-block">
                      <img src="../assets/images/check.svg" class="check tw-mr-8px">Job role focus content
                    </div>
                    <div class="item tw-text-secondary tw-font-semibold tw-block tw-block md:tw-inline-block">
                      <img src="../assets/images/check.svg" class="check tw-mr-8px">Practice at your level
                    </div>
             </div>
           </div>
          <div class="steps">
              <div class="tw-flex tw-flex-col md:tw-flex-row">

                <div class="card item-list md:tw-w-1/4 tw-flex tw-flex-col tw-items-stretch tw-relative tw-rounded tw-mt-20px md:tw-mt-0px" v-if="take_a_look_5_show">

                  <div class="tw-font-rubik tw-text-16px tw-py-14px tw-px-18px tw-block tw-w-full">Gleac Indicators
                    <img src="../assets/images/close_icon.svg" @click="take_a_look_5_show = !take_a_look_5_show" class="tw-absolute">
                  </div>
                  <a href="https://community.gleac.com/demo/NmRlN2Y4ZWUtNWNkZC00ZGI3LTgwOWYtZTAyMTIyODZjMmVl" class="tw-font-rubik tw-text-16px tw-py-14px tw-px-18px tw-block tw-w-full tw-relative">
                    Critical Thinking
                    <img src="../assets/images/arrow-right.svg" class="tw-absolute">
                  </a>
                  <a href="https://community.gleac.com/demo/NmM3OWFlNzQtMmFjZi00ZDhkLTk3ZTEtNjdlMmQzOTU0YzVi" class="tw-font-rubik tw-text-16px tw-py-14px tw-px-18px tw-block tw-w-full tw-relative">
                    Judgement and Decision Making
                    <img src="../assets/images/arrow-right.svg" class="tw-absolute">
                  </a>
                  <a href="https://community.gleac.com/demo/Mzc4NWZjYWUtNzMyYi00NWI5LWJjYzgtNzdlMmZjMGY4OGEy" class="tw-font-rubik tw-text-16px tw-py-14px tw-px-18px tw-block tw-w-full tw-relative">
                    Communication
                    <img src="../assets/images/arrow-right.svg" class="tw-absolute">
                  </a>


                  <img src="../assets/images/right_arrow.svg" width="50" class="tw-absolute right_arrow tw-hidden md:tw-block">

                </div>
                <div class="card md:tw-w-1/4 tw-flex tw-relative tw-rounded" v-if="!take_a_look_5_show">
                   <img src="../assets/images/number_badge.svg" width="50" class="tw-absolute tw-left-10px tw--top-5px">
                     <h4 class="tw-absolute tw-left-20px tw-font-rubik tw-font-medium tw-top-18px tw-left-26px tw-text-description">05</h4>
                     <h4 class="tw-absolute tw-left-20px tw-font-rubik tw-font-medium tw-top-18px tw-left-64px tw-text-description">Try Step</h4>
                      <div class="card_content tw-px-14px">
                        <p class="tw-font-rubik tw-text-12px tw-text-secondary">A salesperson sees a person enter a store and makes a judgement. These micro-practices
                          focus on baas awareness and setting aside assumptions, non-verbal communication and
                          judgement.</p>
                      </div>
                      <div class="tw-font-rubik tw-text-primary tw-absolute tw-left-14px tw-bottom-18px tw-text-12px tw-font-medium tw-cursor-pointer" @click="take_a_look_5_show = !take_a_look_5_show">Take a look</div>
                      <img src="../assets/images/right_arrow.svg" width="50" class="tw-absolute right_arrow tw-hidden md:tw-block">
                 </div>

                <div class="card item-list md:tw-w-1/4 tw-flex tw-flex-col tw-items-stretch tw-relative tw-rounded tw-mt-20px md:tw-mt-0px md:tw-ml-110px" v-if="take_a_look_15_show">

                   <div class="tw-font-rubik tw-text-16px tw-py-14px tw-px-18px tw-block tw-w-full">Gleac Indicators
                     <img src="../assets/images/close_icon.svg" @click="take_a_look_15_show = !take_a_look_15_show" class="tw-absolute">
                   </div>
                   <a href="https://community.gleac.com/demo/ZjA4YzQyMTAtMTk0YS00YmRiLTg2YmQtMjUzYzY5YTBiOTQx" class="tw-font-rubik tw-text-16px tw-py-14px tw-px-18px tw-block tw-w-full tw-relative">
                     Emotional IQ
                     <img src="../assets/images/arrow-right.svg" class="tw-absolute">
                   </a>
                   <a href="https://community.gleac.com/demo/ZGRiNTk5NzMtNjljMi00Mjg1LWExZTYtNTFmOTc5MDZiMDgx" class="tw-font-rubik tw-text-16px tw-py-14px tw-px-18px tw-block tw-w-full tw-relative">
                     Self-Direction
                     <img src="../assets/images/arrow-right.svg" class="tw-absolute">
                   </a>


                 <img src="../assets/images/right_arrow.svg" width="50" class="tw-absolute right_arrow tw-hidden md:tw-block">

               </div>
                <div class="card md:tw-w-1/4 tw-flex tw-relative tw-rounded tw-mt-20px md:tw-mt-0px md:tw-ml-110px" v-if="!take_a_look_15_show">
                    <img src="../assets/images/number_badge.svg" width="50" class="tw-absolute tw-left-10px tw--top-5px">
                    <h4 class="tw-absolute tw-left-20px tw-font-rubik tw-font-medium tw-top-18px tw-left-26px tw-text-description">15</h4>
                    <h4 class="tw-absolute tw-left-20px tw-font-rubik tw-font-medium tw-top-18px tw-left-64px tw-text-description">Try Step</h4>
                    <div class="card_content tw-px-14px">
                      <p class="tw-font-rubik tw-text-12px tw-text-secondary">Salesperson is under a lot of pressure to succeed and perform well.</p>
                    </div>
                    <div class="tw-font-rubik tw-text-primary tw-absolute tw-left-14px tw-bottom-18px tw-text-12px tw-font-medium tw-cursor-pointer" @click="take_a_look_15_show = !take_a_look_15_show">Take a look</div>
                    <img src="../assets/images/right_arrow.svg" width="50" class="tw-absolute right_arrow tw-hidden md:tw-block">
                </div>


                <div class="card item-list md:tw-w-1/4 tw-flex tw-flex-col tw-items-stretch tw-relative tw-rounded tw-mt-20px md:tw-mt-0px md:tw-ml-110px" v-if="take_a_look_25_show">

                  <div class="tw-font-rubik tw-text-16px tw-py-14px tw-px-18px tw-block tw-w-full">Gleac Indicators
                    <img src="../assets/images/close_icon.svg" @click="take_a_look_25_show = !take_a_look_25_show" class="tw-absolute">
                  </div>
                  <a href="https://community.gleac.com/demo/NTY4NjllNzItM2IzMC00YmM3LWFiM2EtM2ZjMTU5NDA5MTA0" class="tw-font-rubik tw-text-16px tw-py-14px tw-px-18px tw-block tw-w-full tw-relative">
                    Communication
                    <img src="../assets/images/arrow-right.svg" class="tw-absolute">
                  </a>
                </div>
                <div class="card md:tw-w-1/4 tw-flex tw-relative tw-rounded tw-mt-20px md:tw-mt-0px md:tw-ml-110px" v-if="!take_a_look_25_show">
                  <img src="../assets/images/number_badge.svg" width="50" class="tw-absolute tw-left-10px tw--top-5px">
                  <h4 class="tw-absolute tw-left-20px tw-font-rubik tw-font-medium tw-top-18px tw-left-26px tw-text-description">25</h4>
                  <h4 class="tw-absolute tw-left-20px tw-font-rubik tw-font-medium tw-top-18px tw-left-64px tw-text-description">Try Step</h4>
                  <div class="card_content tw-px-14px">
                    <p class="tw-font-rubik tw-text-12px tw-text-secondary">Salesperson is trying to effectively deal with a customer who is complaining/ranting (e.g. in
                      person, chat, or over the phone.)</p>
                  </div>
                  <div class="tw-font-rubik tw-text-primary tw-absolute tw-left-14px tw-bottom-18px tw-text-12px tw-font-medium tw-cursor-pointer" @click="take_a_look_25_show = !take_a_look_25_show">Take a look</div>
                </div>


                <div class="md:tw-w-1/4 tw-flex tw-flex-col tw-relative tw-mt-20px md:tw-mt-0px md:tw-ml-70px">
                      <div class="tw-text-16px tw-text-secondary tw-font-semibold tw-mb-18px">Our Library</div>


                  <div>

                    <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                      <img src="../assets/images/library/managing_people.png" width="26" class="tw-absolute tw--left-8px tw--top-4px">Managing People
                    </div>

                    <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                      <img src="../assets/images/library/covid.png" width="26" class="tw-absolute tw--left-8px tw--top-4px">Coping with Covid for Parents, Teachers and Students
                    </div>

                    <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                      <img src="../assets/images/library/managing_people.png" width="26" class="tw-absolute tw--left-8px tw--top-4px">Sales
                    </div>

                    <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                      <img src="../assets/images/library/recruitment.png" width="26" class="tw-absolute tw--left-8px tw--top-4px">Recruitment
                    </div>

                    <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                      <img src="../assets/images/library/interviewing.png" width="26" class="tw-absolute tw--left-8px tw--top-3px">Interviewing
                    </div>

                    <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                      <img src="../assets/images/library/off-boarding.png" width="26" class="tw-absolute tw--left-8px tw--top-3px">Off-Boarding for Employees
                    </div>

                    <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                      <img src="../assets/images/library/interview_skills.png" width="26" class="tw-absolute tw--left-8px tw--top-3px">Customer Facing Roles
                    </div>


                  </div>

                    <a @click="show_more_library = !show_more_library" v-if="!show_more_library" class="tw-font-rubik tw-cursor-pointer"> Show more <i class="icon angle down"></i></a>

                    <div v-if="show_more_library">
                      <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                        <img src="../assets/images/library/communication.png" width="26" class="tw-absolute tw--left-8px tw--top-4px">Communication
                      </div>
                        <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                          <img src="../assets/images/library/critical_thinking.png" width="26" class="tw-absolute tw--left-8px tw--top-5px">Critical Thinking
                        </div>

                        <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative tw-mb-12px">
                          <img src="../assets/images/library/creativity.png" width="26" class="tw-absolute tw--left-8px tw--top-2px">Creativity
                        </div>

                        <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                          <img src="../assets/images/library/collaboration.png" width="26" class="tw-absolute tw--left-8px tw--top-4px">Collaboration
                        </div>


                        <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                          <img src="../assets/images/library/decision_making.png" width="26" class="tw-absolute tw--left-8px tw--top-4px">Judgement and Decision making
                        </div>

                        <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                          <img src="../assets/images/library/leadership.png" width="26" class="tw-absolute tw--left-8px tw--top-4px">Leadership
                        </div>

                        <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                          <img src="../assets/images/library/self_direction.png" width="26" class="tw-absolute tw--left-8px tw--top-4px">Self Direction
                        </div>

                        <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                          <img src="../assets/images/library/mindfullness.png" width="26" class="tw-absolute tw--left-8px tw--top-5px">Mindfulness
                        </div>

                        <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                          <img src="../assets/images/library/entrepreneurship.png" width="26" class="tw-absolute tw--left-8px tw--top-5px">Entrepreneurship
                        </div>

                        <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                          <img src="../assets/images/library/emotional.png" width="26" class="tw-absolute tw--left-8px tw--top-5px">Emotional IQ
                        </div>

                         <a @click="show_more_library = !show_more_library" class="tw-font-rubik tw-cursor-pointer"> Show less <i class="icon angle up"></i></a>
                    </div>





                </div>
              </div>
          </div>
        </div>
      </section>
      <!-- explore section end -->

      <!-- quote section start-->
      <section class="quote tw-bg-primary">
        <div class="tw-container tw-m-auto tw-px-14px">
          <div class="tw-font-rubik tw-text-white tw-w-full tw-text-center quote_wrapper">
            <div class="tw-text-20px tw-mb-6px tw-font-medium tw-relative tw-inline-block tw-mx-50px sm:tw-mx-0px">
              <img class="tw-absolute tw--left-34px tw--top-10px" src="../assets/images/quote.svg"/>
              With the new day comes new strength and new thoughts.
              <img class="tw-absolute tw--right-34px tw--bottom-12px" src="../assets/images/quote_inverted.svg"/>
            </div>
            <div class="tw-text-13px tw-text-center sm:tw-text-right tw-mr-10px">- Eleanor Roosevelt</div>
          </div>
        </div>
      </section>
      <!-- quote section end -->

      <!-- about section start-->
      <section class="about" id="about">
        <div class="tw-container tw-m-auto tw-px-14px">
          <div class="tw-text-primary tw-text-24px tw-font-semibold">GLEAC Leadership Mafia</div>
          <VueSlickCarousel class="team_slider" v-bind="team_slider_settings">
            <div>
                 <div class="ui stackable grid">
                   <div class="three wide column">
                       <img src="../assets/images/team/sallyann.png" width="120" class="tw-rounded-full">
                   </div>
                   <div class="thirteen wide column">
                     <div class="tw-font-medium tw-font-rubik tw-text-14px tw-mb-4px">Sallyann Della Casa <a href="https://www.linkedin.com/in/sallyanndellacasa/"><i class="linkedin large icon"></i></a></div>
                     <div class="tw-font-plex tw-text-12px">Founder</div>
                     <p class="tw-font-plex tw-mt-13px tw-text-12px">For the last years she has obsessively been beta testing the science behind's Gleac' s patent pending human skills mapping and development methodology through her Foundation, Growing Leaders. She discovered technology to scale her passion in a brief stint at Careem in 2016.  She holds degrees and accreditations from Harvard University, University of Toronto and Franklin College. She is a published author. She practiced law for 10 years.</p>
                   </div>
                 </div>
            </div>
            <div>
              <div class="ui stackable grid">
                <div class="three wide column">
                  <img src="../assets/images/team/kathy.png" width="120" class="tw-rounded-full">
                </div>
                <div class="thirteen wide column">
                  <div class="tw-font-medium tw-font-rubik tw-text-14px tw-mb-4px">Dr. Kathy Shalhoub</div>
                  <div class="tw-font-plex tw-text-12px">Partner</div>
                  <p class="tw-font-plex tw-mt-13px tw-text-12px">Kathy oversees global curriculum architecture and lessons development team at GLEAC. She holds accreditations and degrees from UPMC, MIT and ICF. Her work over the last 10 years, besides being a mother of 3, spans from teaching entrepreneurship to life coaching to innovation consulting. She currently advises on leadership strategy at the American College of Cardiology. Her latest book,  Futureproof, is a guide for youth on how to successfully tackle the 21rst century without compromising on who they are.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div class="ui stackable grid">
                <div class="three wide column">
                  <img src="../assets/images/team/ousamma.png" width="120" class="tw-rounded-full">
                </div>
                <div class="thirteen wide column">
                  <div class="tw-font-medium tw-font-rubik tw-text-14px tw-mb-4px">Ousamma Berqui</div>
                  <div class="tw-font-plex tw-text-12px">Advisor and Partner</div>
                  <p class="tw-font-plex tw-mt-13px tw-text-12px">Formerly Chief Data Scientist and Head of Engineering at Careem ( acquired by Uber for 3.1b), Ousamma guides the Tech and Data team on dev. ops, machine learning and architecture. </p>
                </div>
              </div>
            </div>
            <div>
              <div class="ui stackable grid">
                <div class="three wide column">
                  <img src="../assets/images/team/eden.png" width="120" class="tw-rounded-full">
                </div>
                <div class="thirteen wide column">
                  <div class="tw-font-medium tw-font-rubik tw-text-14px tw-mb-4px">Eden Millon</div>
                  <div class="tw-font-plex tw-text-12px">Advisor and Partner</div>
                  <p class="tw-font-plex tw-mt-13px tw-text-12px">Eden, based in Ethiopia, and with a decade in TOEFL and education leads development of the Gleac micro-practice curriculum.
                  </p>
                </div>
              </div>
            </div>
          </VueSlickCarousel>
        </div>
      </section>
      <!-- about section end-->

      <!-- contact us section start-->
      <section class="contact tw-bg-secondary">
        <div class="ui stackable grid container">
           <div class="eight wide column">
             <img src="../assets/images/contact.png" class="tw-w-full">
           </div>
          <div class="eight wide column">
            <div class="tw-pl-0px sm:tw-pl-20px">
              <div class="tw-font-rubik tw-text-primary tw-font-medium tw-text-20px tw-mb-20px">Contact Us</div>
              <form class="ui form">
                <div class="field">
                  <input type="text" name="name" placeholder="Full Name">
                </div>
                <div class="field">
                  <input type="text" name="company-name" placeholder="Company Name">
                </div>

                <div class="field">
                  <input type="email" name="email" placeholder="Email ID">
                </div>

                <button class="ui primary button" type="submit">Talk to me &nbsp;&nbsp;<i class="heart icon"></i></button>
              </form>
            </div>

          </div>
        </div>
      </section>
      <!-- contact us section end-->


      <app-footer></app-footer>

    </div>

      <!-- case study modal start-->
      <div class="ui large modal case_study">
        <i class="close icon"></i>

        <div class="tw-flex tw-justify-center tw-items-stretch">
            <div class="tw-w-1/2 tw-bg-primary tw-justify-center tw-items-center tw-flex tw-flex-col">
              <div class="tw-font-medium tw-font-rubik tw-text-28px tw-mb-4px tw-text-white">Case Study<br>
                accenture</div>
            </div>

          <div class="tw-w-1/2 tw-justify-center tw-items-center tw-flex tw-flex-col">
            <img src="../assets/images/case_study_header.png" style="width: 100%">
          </div>

        </div>
        <div class="modal_content tw-p-30px">

          <div class="ui stackable grid">
              <div class="ten wide column">
                 <div class="tw-font-rubik tw-text-16px tw-leading-20px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                 </div>
              </div>

            <div class="six wide center aligned column">
              <img src="../assets/images/press/accenture.png" style="width: 180px;">
            </div>

          </div>

          <div class="tw-font-rubik tw-font-medium tw-text-primary tw-text-20px tw-mt-38px tw-mb-20px">
            The Objectives
          </div>

            <div class="tw-font-rubik tw-text-16px tw-leading-20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>

          <div class="tw-font-rubik tw-font-medium tw-text-primary tw-text-20px tw-mt-38px tw-mb-20px">
            The Solution
          </div>

          <div class="tw-font-rubik tw-text-16px tw-leading-20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

          <div class="tw-font-rubik tw-font-medium tw-text-primary tw-text-20px tw-mt-38px tw-mb-20px">
            The Result
          </div>

          <div class="tw-font-rubik tw-text-16px tw-leading-20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>

        </div>
      </div>
      <!-- case study modal end-->


      <!-- white paper modal start-->
      <div class="ui small modal whitepaper">
          <div class="tw-font-rubik tw-font-medium tw-text-24px">Gleac Whitepaper</div>
          <div class="tw-font-rubik tw-text-16px tw-text-secondary tw-mt-10px tw-mb-24px">Please share your details to download the whitepaper</div>
          <form class="ui big form">
            <div class="field">
              <label>Name</label>
              <input type="text" name="namee" placeholder="Enter your name">
            </div>
            <div class="field">
              <label>Company name</label>
              <input type="text" name="namee" placeholder="Enter your company name">
            </div>
            <div class="field">
              <label>Email ID</label>
              <input type="email" name="email" placeholder="Email ID">
            </div>
            <button class="ui primary large button">Submit</button>
          </form>

        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>
        <div class="ui hidden divider"></div>

         <div class="ui stackable middle aligned grid">
            <div class="ten wide column">
              <div class="tw-font-rubik tw-font-medium tw-text-24px">Thank you lovely human</div>
            </div>
           <div class="six wide column">
             <button class="ui primary large fluid button"><span class="tw-relative tw-pr-34px">Download <img src="../assets/images/donwload_icon.svg" class="tw-absolute tw--top-1px tw-right-10px"/></span></button>
           </div>
         </div>
      </div>
      <!-- white paper modal end-->


  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    name: 'Home',
    data() {
      return {
        job_list:[],
        selected_job:'',
        skill_list: [],
        skill_loading:false,
        show_more_library:false,
        take_a_look_5_show:false,
        take_a_look_15_show:false,
        take_a_look_25_show:false,
        slider_settings:{
          "arrows":false,
          "autoplay": true,
          "focusOnSelect": true,
          "infinite": true,
          "speed": 500,
          "slidesToShow": 6,
          "slidesToScroll": 3,
          "touchThreshold": 5,
          "responsive": [
            {
              "breakpoint": 1024,
              "settings": {
                "slidesToShow": 6,
                "slidesToScroll": 6,
                "infinite": true,
                "dots": false,
                "arrows":false,
              }
            },
            {
              "breakpoint": 768,
              "settings": {
                "slidesToShow": 5,
                "slidesToScroll": 5,
                "infinite": true,
                "dots": false,
                "arrows":false,
              }
            },
            {
              "breakpoint": 640,
              "settings": {
                "arrows":false,
                "dots": false,
                "slidesToShow": 3,
                "slidesToScroll": 3,
                "infinite": true,
              }
            },
          ]
        },

        team_slider_settings:{
          "dots": true,
          "responsive": [
            {
              "breakpoint": 640,
              "settings": {
                "dots": true,
                "arrows":false
              }
            },
            {
              "breakpoint": 768,
              "settings": {
                "dots": true,
                "arrows":false
              }
            },
            {
              "breakpoint": 1024,
              "settings": {
                "dots": true,
                "arrows":true
              }
            },
          ]
        },
      }
    },
    methods:{
      open_case_study_modal(){
        $('.ui.modal.case_study')
          .modal('show')
        ;
      },
      open_white_paper_modal(){
        $('.ui.modal.whitepaper')
          .modal('show')
        ;
      },
      fetch_joblist(){
        this.axios.get('https://dashboardapi.gleac.com/api/Dashboard/jobs').then((response) => {
          this.job_list = response.data.result;
        })
      },
      fetch_skills(){
        this.skill_loading = true;
        this.axios.get('https://dashboardapi.gleac.com/api/JobIndex/job/' + this.selected_job).then((response) => {
          this.skill_list = response.data.result;
          this.skill_loading = false;
        })
      }
    },
    mounted(){
      this.fetch_joblist();
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
  @import "../../node_modules/vue-select/src/scss/vue-select.scss";

  .v-select{
    font-family: Montserrat, sans-serif;
  }

  .job-dropdown .vs__dropdown-toggle,
  .job-dropdown .vs__dropdown-menu {
    background: #fff;
    border-left: 2px solid #eaeaea;
    border-right: 2px solid #eaeaea;
    border-top: 2px solid #eaeaea;
  }

  .job-dropdown .vs__search::placeholder, .job-dropdown .vs__dropdown-toggle{
    padding: 8px 7px;
  }

  .job-dropdown .vs__search, .vs__selected{
    font-size: 20px;
    font-family: Montserrat, sans-serif;
    margin-top: 0;
  }

  .job-dropdown .vs__dropdown-toggle:focus{
    border-color: #0065ad;
  }

  .job-dropdown .vs__clear,
  .job-dropdown .vs__open-indicator {

  }

  .home {
    // Content wrapper
    .content_wrapper {
      padding-top: 135px;
    }

    section.intro {
      padding: 60px 0;
      .appstore_icons{
        i {
          font-size: 30px;
        }
      }

      .intro_image{
        width: 410px;
      }
      .skills_card{
        background-color: #fff;
        width: 400px;
        -webkit-box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
        padding: 20px;
        border-radius: 8px;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        -ms-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        ul {
          padding: 0;
          margin: 0;
          margin-bottom: 10px;
          li {
            list-style: none;
            display: inline-block;
            background-color: rgba(213, 241, 253, 0.98);
            color: #0065AD;
            padding: 6px 20px;
            font-size: 14px;
            font-weight: 500;
            border-radius: 7px;
            margin-right: 10px;
            margin-bottom: 10px;
          }
        }
      }
    }

    section.press {
      div:focus{
        outline: none;
      }
      padding: 10px 0;
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
        display: block;
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
      img.check{
        width: 12px;
      }
      .steps{
        margin-top: 50px;
      }
      .card{
        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
         height: 278px;
        h4{
          margin: 0;
          font-size: 14px;
        }
        .card_content{
          padding-top: 66px;
        }
        .right_arrow{
          right: -70px;
          top: 50%;
          transform: translateY(-50%);
          width: 25px;
        }
        &.item-list{
          div{
            border-bottom: 1px solid #DEECF7;
            background: #f9f9f9;
            img{
              right: 12px;
              width: 22px;
              top: 13px;
              opacity: 0.6;
              cursor: pointer;
              &:hover{
                opacity: 0.8;
              }
            }
          }
          a{
            font-size: 14px;
            border-bottom: 1px solid #DEECF7;
            color: #0065ad;
            &:hover{
              background-color: #F6FAFE;
            }
            img{
              right: 18px;
              width: 9px;
              top: 17px;
              display: block;
            }
          }
        }
      }

    }

    @media (max-width: 640px) {
      section.explore{
        .card{
          min-height: 180px;
        }
      }

      section.intro{
        .intro_image{
          width: 100%;
        }
      }

      section.press{
        .image_wrapper{
          padding:0 !important;
        }
      }
    }

    @media (min-width: 768px){
      .tw-container{
        padding-left: 40px !important;
        padding-right: 40px !important;
      }
    }

    @media (max-width: 768px){
      .skills_card{
        width: 100% !important;
      }
    }


    section.quote{
      padding: 40px 0;
      .quote_wrapper{
        max-width: 570px;
        margin: 0 auto;
      }
    }

    section.about{
      padding: 40px 0;
        p{
          line-height: 1.6;
        }
      .team_slider{
        margin-top: 40px !important;
        max-width: 740px;
        margin: 0 auto;
        div:focus{
          outline: none;
        }
        .slick-prev:before {
          content: "";
          background-image: url(../assets/images/arrow-left.svg);
          width: 21px;
          height: 21px;
          background-size: 13px;
          font-size: 10px;
          position: absolute;
          left: -47px;
          background-repeat: no-repeat;
          top: -20px;
        }

        .slick-next:before {
          content: "";
          background-image: url(../assets/images/arrow-right.svg);
          width: 21px;
          height: 21px;
          background-size: 13px;
          font-size: 10px;
          position: absolute;
          right: -47px;
          background-repeat: no-repeat;
          top: -20px;
        }

        .slick-dots li button:before{
          width: 22px;
          background: #0065ad;
          height: 3px;
          content: '';
        }
      }
    }

    section.contact{
      padding-top: 50px;
      padding-bottom: 50px;
    }

  }


  // Custom styles for twilwind
   .tw-m-auto{
     margin: 0 auto;
   }

  .tw-invisible{
    visibility: hidden;
  }


  .ui.modal.whitepaper{
    padding: 50px;
    .ui.form label{
      font-weight: 500 !important;
      margin-bottom: 10px !important;
    }
  }


</style>
