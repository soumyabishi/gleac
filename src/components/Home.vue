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
              <v-select :options="job_list" class="job-dropdown" placeholder="Type a job title and see the skills needed..." v-model="selected_job"  @input="fetch_skills" >
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
                  <div class="tw-text-14px tw-text-text-color tw-font-medium tw-mb-12px">Human Skills Required</div>
                  <ul class="tags" v-if="skill_list.length>0">
                    <li class="tag" v-for="skill in skill_list">{{skill.skillName}}</li>
                  </ul>

                  <div v-scroll-to="{el:'#explore', offset: -150}" class="ui primary big fluid button">Start Upskilling</div>
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


          <VueSlickCarousel v-bind="slider_settings">
            <div>
              <a class="image_wrapper" href="https://www.stradaeducation.org/spotlight/developing-the-human-side-of-skills/">
                <img src="../assets/images/press/strada.png">
              </a>
            </div>
            <div>
              <div class="image_wrapper" @click="open_case_study_modal_prada()">
                <img src="../assets/images/press/prada.png">
              </div>
            </div>
            <!--<div>-->
              <!--<div class="image_wrapper" @click="open_case_study_modal()">-->
                <!--<img src="../assets/images/press/spottabl.png">-->
              <!--</div>-->
            <!--</div>-->
            <div>
              <div class="image_wrapper" @click="open_case_study_modal_coming_soon('pwc')">
                <img src="../assets/images/press/pwc.png">
              </div>
            </div>
            <div>
              <a class="image_wrapper" href="https://gulfbusiness.com/entry-interviews-can-save-business/">
                <img src="../assets/images/press/gulf.png">
              </a>
            </div>

            <div>
              <div class="image_wrapper" @click="open_case_study_modal_coming_soon('expo')">
                <img src="../assets/images/press/expo.png">
              </div>
            </div>
            <div>
              <div class="image_wrapper" @click="open_case_study_modal_coming_soon('korn')">
                <img src="../assets/images/press/korn.png">
              </div>
            </div>
            <div>
              <div class="image_wrapper" @click="open_case_study_modal_coming_soon('accenture')">
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
      <section class="explore" id="explore">
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
                        <p class="tw-font-rubik tw-text-12px tw-text-secondary">A salesperson sees a person enter a store and makes a judgement.</p>
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

                  </div>

                    <a @click="show_more_library = !show_more_library" v-if="!show_more_library" class="tw-font-rubik tw-cursor-pointer"> Show more <i class="icon angle down"></i></a>

                    <div v-if="show_more_library">
                      <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                        <img src="../assets/images/library/off-boarding.png" width="26" class="tw-absolute tw--left-8px tw--top-3px">Off-Boarding for Employees
                      </div>

                      <div class="tw-text-secondary tw-font-rubik tw-pl-20px tw-relative  tw-mb-12px">
                        <img src="../assets/images/library/interview_skills.png" width="26" class="tw-absolute tw--left-8px tw--top-3px">Customer Facing Roles
                      </div>

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
          <VueSlickCarousel v-bind="slider_settings_quote" class="quote_slider_home">
            <div>
            <div class="tw-font-rubik tw-text-white tw-w-full tw-text-center quote_wrapper">
              <div class="tw-text-20px tw-mb-6px tw-font-medium tw-relative tw-inline-block tw-mx-50px sm:tw-mx-0px tw-leading-25px">
                <img class="tw-absolute tw--left-34px tw--top-10px" src="../assets/images/quote.svg"/>
                GLEAC showed me it is not only selling , to reach your goals and improve your performance there are a lot more factors involved.
                <img class="tw-absolute tw--right-34px tw-bottom-6px" src="../assets/images/quote_inverted.svg"/>
              </div>
              <div class="tw-text-13px tw-text-center tw-mr-10px tw-mt-12px">- Sales Team, PRADA USA</div>
            </div>
          </div>

            <div>
              <div class="tw-font-rubik tw-text-white tw-w-full tw-text-center quote_wrapper">
                <div class="tw-text-20px tw-mb-6px tw-font-medium tw-relative tw-inline-block tw-mx-50px sm:tw-mx-0px tw-leading-25px">
                  <img class="tw-absolute tw--left-34px tw--top-10px" src="../assets/images/quote.svg"/>
                  The Benchmark was Excellent and Bang on with actual science backing my intuition.
                  <img class="tw-absolute tw--right-34px tw-bottom-6px" src="../assets/images/quote_inverted.svg"/>
                </div>
                <div class="tw-text-13px tw-text-center tw-mr-10px  tw-mt-12px">- Founder, Tech Startup</div>
              </div>
            </div>

            <div>
              <div class="tw-font-rubik tw-text-white tw-w-full tw-text-center quote_wrapper">
                <div class="tw-text-20px tw-mb-6px tw-font-medium tw-relative tw-inline-block tw-mx-50px sm:tw-mx-0px tw-leading-25px">
                  <img class="tw-absolute tw--left-34px tw--top-10px" src="../assets/images/quote.svg"/>
                  I felt the benchmark articulated my nature and workplace behaviour almost perfectly.
                  <img class="tw-absolute tw--right-34px tw-bottom-6px" src="../assets/images/quote_inverted.svg"/>
                </div>
                <div class="tw-text-13px tw-text-center tw-mr-10px  tw-mt-12px">- Principal of High School</div>
              </div>
            </div>

            <div>
              <div class="tw-font-rubik tw-text-white tw-w-full tw-text-center quote_wrapper">
                <div class="tw-text-20px tw-mb-6px tw-font-medium tw-relative tw-inline-block tw-mx-50px sm:tw-mx-0px tw-leading-25px">
                  <img class="tw-absolute tw--left-34px tw--top-10px" src="../assets/images/quote.svg"/>
                  I practice active listening and staying calm to find a solution.
                  <img class="tw-absolute tw--right-34px tw-bottom-6px" src="../assets/images/quote_inverted.svg"/>
                </div>
                <div class="tw-text-13px tw-text-center tw-mr-10px  tw-mt-12px">- Aiesec University Student</div>
              </div>
            </div>

          </VueSlickCarousel>
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
                     <div class="tw-font-plex tw-text-12px">Founder and Chief Identity Hacker</div>
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
                  <div class="tw-font-medium tw-font-rubik tw-text-14px tw-mb-4px">Dr. Kathy Shalhoub <a href="https://www.linkedin.com/in/katniewiadomska/"><i class="linkedin large icon"></i></a></div>
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
                  <div class="tw-font-medium tw-font-rubik tw-text-14px tw-mb-4px">Ousamma Berqui <a href="https://www.linkedin.com/in/oussama-berqi-204b6073/"><i class="linkedin large icon"></i></a></div>
                  <div class="tw-font-plex tw-text-12px">Advisor and Partner</div>
                  <p class="tw-font-plex tw-mt-13px tw-text-12px">Formerly Chief Data Scientist and Head of Engineering at Careem (acquired by Uber for $3.1 billion), Ousamma guides the Tech and Data team on dev. ops, machine learning and architecture. </p>
                </div>
              </div>
            </div>
            <div>
              <div class="ui stackable grid">
                <div class="three wide column">
                  <img src="../assets/images/team/eden.png" width="120" class="tw-rounded-full">
                </div>
                <div class="thirteen wide column">
                  <div class="tw-font-medium tw-font-rubik tw-text-14px tw-mb-4px">Eden Millon <a href="https://www.linkedin.com/in/eden-m-7b5579149/"><i class="linkedin large icon"></i></a></div>
                  <div class="tw-font-plex tw-text-12px">Lead Curriculum Designer</div>
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
                  <input type="text" name="name" placeholder="Full Name" v-model="contact_name">
                </div>
                <div class="field">
                  <input type="text" name="company-name" placeholder="Company Name" v-model="contact_company">
                </div>

                <div class="field">
                  <input type="email" name="email" placeholder="Email ID" v-model="contact_email">
                </div>
                <p class="tw-text-14px error_message" :class="{'success': contact_message_success}" v-html="contact_message" v-if="contact_message"></p>
                <button class="ui primary button"  :class="{'loading':contact_form_submitting}" @click.prevent="submit_contact_request">Talk to me &nbsp;&nbsp;<i class="heart icon"></i></button>
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

        <div class="tw-flex tw-justify-center tw-items-stretch" style="border-bottom: 1px solid #0065ad;">
          <div class="tw-w-1/2 tw-bg-primary tw-justify-center tw-items-center tw-flex tw-flex-col">
            <div class="tw-font-medium tw-font-rubik tw-text-28px tw-mb-4px tw-text-white">Case Study<br>
              accenture</div>
          </div>

          <div class="tw-w-1/2 tw-justify-center tw-items-center tw-flex tw-flex-col">
            <img src="../assets/images/case_study_header.png" style="width: 100%;margin-bottom: 12px;">
          </div>

        </div>
        <div class="modal_content tw-p-30px">

            <div class="text-center tw-text-primary">Case study coming soon</div>

        </div>
      </div>
      <!-- case study modal end-->


      <!-- white paper modal start-->
      <div class="ui small modal whitepaper">
        <template v-if="!show_whitepaper_download">
          <div class="tw-font-rubik tw-font-medium tw-text-24px">Gleac Whitepaper</div>
          <div class="tw-font-rubik tw-text-16px tw-text-secondary tw-mt-10px tw-mb-24px">Please share your details to download the whitepaper</div>
          <form class="ui big form">
            <div class="field">
              <label>First Name*</label>
              <input type="text" name="first-name" placeholder="Enter your first name" v-model="whitepaper_fname">
            </div>
            <div class="field">
              <label>Last Name*</label>
              <input type="text" name="last-name" placeholder="Enter your last name" v-model="whitepaper_lname">
            </div>
            <div class="field">
              <label>Email ID*</label>
              <input type="email" name="email" placeholder="Email ID" v-model="whitepaper_email">
            </div>
            <p class="tw-text-14px error_message" v-html="whitepaper_message" v-if="whitepaper_message"></p>
            <button class="ui primary large button" :class="{'loading': white_paper_submitting}" @click.prevent="whitepaper_submit">Submit</button>
          </form>
        </template>

        <div class="ui stackable middle aligned grid" v-if="show_whitepaper_download">
					<div class="ten wide column">
						<div class="tw-font-rubik tw-font-medium tw-text-24px">Thank you lovely human <i class="icon heart" style="color: #2185D0;"></i> </div>
					</div>
					<div class="six wide column">
						<a class="ui primary large fluid button" href="../../static/documents/whitepaperbrochure.pdf"><span class="tw-relative tw-pr-34px">Download <img src="../assets/images/donwload_icon.svg" class="tw-absolute tw--top-1px tw-right-10px"/></span></a>
					</div>
        </div>
      </div>
      <!-- white paper modal end-->



      <!-- contact_tracer modal start-->
      <div class="ui large modal case_study contact_tracer">
        <i class="close icon"></i>

        <div class="tw-flex tw-justify-center tw-items-stretch" style="border-bottom: 1px solid #0065ad;">
          <div class="tw-w-1/2 tw-bg-primary tw-justify-center tw-items-center tw-flex tw-flex-col">
            <div class="tw-font-medium tw-font-rubik tw-text-28px tw-mb-4px tw-text-white">Case Study</div>
            <div class="tw-font-medium tw-font-rubik tw-text-20px tw-text-white tw-mt-10px">Emerging Job Roles</div>

          </div>

          <div class="tw-w-1/2 tw-justify-center tw-items-center tw-flex tw-flex-col">
            <img src="../assets/images/case_study_header.png" style="width: 100%;margin-bottom: 12px;">
          </div>

        </div>
        <div class="modal_content tw-p-30px">

          <div class="tw-font-rubik tw-font-medium tw-text-primary tw-text-20px tw-mt-20px tw-mb-20px">
            Objective
          </div>

          <div class="tw-font-rubik tw-text-16px tw-leading-20px">
            To create an output off our 10-15 min mater behavioral assessment SAAS to identify, map and
            measure the behaviors needed and in what quantities for the job role Contact Tracer. <br> <br>
            Pre-Covid this was a fairly non-emerging role. In the last 60 days, there are over 100k jobs for
            this role in the US alone.<br> <br>
            You can take the test <a class="tw-underline hover:tw-underline tw-font-medium" href="static/benchmark-login.html">here</a> and check your fit for the role.  </div>

          <div class="tw-font-rubik tw-font-medium tw-text-primary tw-text-20px tw-mt-38px tw-mb-20px">
            The Solution and Result
          </div>

          <div class="tw-font-rubik tw-text-16px tw-leading-20px">
            After clustering a variety of similar job role descriptions such as Aid Worker, Investigator,
            Researcher etc. and the underlying behaviors pertinent to the Contact Tracer role e.g. Rule-
            Following, Learning Agility etc. a combination of behaviors were identified and a dynamic tool
            for measuring same was created off our Saas dashboard. This was and will continue to be stress
            tested on the Contact Tracer population to validate our baselines.
          </div>

          <div class="text-center" style="text-align: center">
            <img src="../assets/images/case_study/contact_tracer/1.png" style="width: 100%">
            <img src="../assets/images/case_study/contact_tracer/2.png" style="width: 70%">
            <img src="../assets/images/case_study/contact_tracer/3.png" style="width: 100%">


              <a href="../../static/documents/case_study_emerging_job_roles.pdf" style="margin-bottom: 15px;margin-top: 20px;" class="ui primary button">Download PDF</a>

              <div class="tw-font-rubik tw-text-center">©GLEAC 2020. All Rights Reserved</div>
          </div>

        </div>
      </div>
      <!-- contact_tracer modal end-->



      <!-- Prada case study modal start-->
      <div class="ui large modal case_study prada">
        <i class="close icon"></i>

        <div class="tw-flex tw-justify-center tw-items-stretch" style="border-bottom: 1px solid #0065ad;">
          <div class="tw-w-1/2 tw-bg-primary tw-justify-center tw-items-center tw-flex tw-flex-col">
            <div class="tw-font-medium tw-font-rubik tw-text-28px tw-mb-10px tw-text-white">Case Study</div>
            <div class="tw-font-medium tw-font-rubik tw-text-20px tw-text-white tw-mt-10px">Prada</div>
          </div>

          <div class="tw-w-1/2 tw-justify-center tw-items-center tw-flex tw-flex-col">
            <img src="../assets/images/case_study_header.png" style="width: 100%;margin-bottom: 12px;">
          </div>

        </div>
        <div class="modal_content tw-p-30px">

          <div class="ui stackable grid">
            <div class="ten wide column">
              <div class="tw-font-rubik tw-font-medium tw-text-primary tw-text-20px tw-mt-38px tw-mb-20px">
                Objective
              </div>
              <div class="tw-font-rubik tw-text-16px tw-leading-20px">
                Improve Sales Team KPIS and customer experience.
              </div>
            </div>

            <div class="six wide center aligned column">
              <img src="../assets/images/press/prada.png" style="width: 180px;">
            </div>

          </div>


          <div class="tw-font-rubik tw-font-medium tw-text-primary tw-text-20px tw-mt-38px tw-mb-20px">
            The Solution
          </div>

          <div class="tw-font-rubik tw-text-16px tw-leading-20px">
            Wrapped in 3 core Prada values, determine the behavioral drivers of the company culture and
            top + bottom performing employees and design a upskilling campaign for the entire population
            based on the cultural and top performing behavioral drivers <br><br>
            Metrics included engagement, learning agility of each team member, behavioral shift and
            relation to KPIS etc.

            <img src="../assets/images/case_study/prada/1.png" style="width: 100%">

          </div>

          <div class="tw-font-rubik tw-font-medium tw-text-primary tw-text-20px tw-mt-38px tw-mb-20px">
            The Result
          </div>

          <div class="tw-font-rubik tw-text-16px tw-leading-20px">
            100% recommendation for global roll out.
          </div>


          <div class="centered grid">
            <div class="twn wide column">
              <div class="ui three column stackable grid">
                 <div class="column">
                   <img src="../assets/images/case_study/prada/2.png" style="width: 100%;margin-top: 6px;">
                 </div>

                <div class="column">
                  <img src="../assets/images/case_study/prada/3.png"  style="width: 100%">

                </div>

                <div class="column">
                  <img src="../assets/images/case_study/prada/3.png"  style="width: 100%">
                </div>

              </div>
            </div>

          </div>


          <div class="tw-text-center">

            <a href="../../static/documents/prada_case_study.pdf" style="margin-bottom: 15px;margin-top: 20px;" class="ui primary button">Download PDF</a>

            <div class="tw-font-rubik tw-text-center">©GLEAC 2020. All Rights Reserved</div>

          </div>


        </div>
      </div>
      <!-- Prada case study modal end-->


      <!-- Coming soon case study modal start-->
      <div class="ui large modal case_study coming_soon">
        <i class="close icon"></i>

        <div class="tw-flex tw-justify-center tw-items-stretch" style="border-bottom: 1px solid #0065ad;">
          <div class="tw-w-1/2 tw-bg-primary tw-justify-center tw-items-center tw-flex tw-flex-col">
            <div class="tw-font-medium tw-font-rubik tw-text-28px tw-mb-10px tw-text-white">Case Study</div>
            <div class="tw-font-medium tw-font-rubik tw-text-20px tw-text-white tw-mt-10px">{{case_study_coming_soon_title}}</div>
          </div>

          <div class="tw-w-1/2 tw-justify-center tw-items-center tw-flex tw-flex-col">
            <img src="../assets/images/case_study_header.png" style="width: 100%;margin-bottom: 12px;">
          </div>

        </div>
        <div class="modal_content tw-p-30px tw-text-center">
            <div class="tw-text-20px tw-text-primary text-text-center tw-font-medium">Coming soon</div>
        </div>
      </div>
      <!-- Coming soon case study modal end-->



  </div>
</template>

<script>
	import jsonp from 'jsonp';
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
        white_paper_submitting:false,
        contact_form_submitting:false,
        contact_message_success: false,
        case_study_coming_soon_title: '',
        slider_settings_quote:{
          "arrows":false,
          "autoplay": true,
          "infinite": true,
          "slidesToShow": 1,
           "slidesToScroll": 1,
        },
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
				whitepaper_fname: "",
				whitepaper_lname: "",
				whitepaper_email: "",
				show_whitepaper_download: false,
				whitepaper_message: "",
				contact_name: "",
				contact_company: "",
				contact_email: "",
				contact_message: "",
      }
    },
    methods:{
      // open_case_study_modal(){
      //   $('.ui.modal.case_study')
      //     .modal('show')
      //   ;
      // },
      open_case_study_modal_prada(){
        $('.ui.modal.case_study.prada')
          .modal('show')
        ;
      },
      open_case_study_modal_coming_soon(title){
        if(title === 'pwc')
        {
          this.case_study_coming_soon_title = 'PWC'
        }
        else if(title === 'expo'){
          this.case_study_coming_soon_title = 'Expo 2020 Dubai UAE'
        }
        else if(title === 'korn'){
          this.case_study_coming_soon_title = 'Korn Ferry'
        }
        else if(title === 'accenture'){
          this.case_study_coming_soon_title = 'Accenture'
        }

        $('.ui.modal.case_study.coming_soon')
          .modal('show')
        ;
      },
      open_contact_tracer_modal(){
        $('.ui.modal.contact_tracer')
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
			},
			whitepaper_submit() {
				const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				const fname = this.whitepaper_fname;
				const lname = this.whitepaper_lname;
				const email = this.whitepaper_email;
				if (fname === "" || lname === "" || email === "") {
					this.whitepaper_message = "Please fill out all the details"
				} else if (!reg.test(email.toLowerCase())) {
					this.whitepaper_message = "Please enter a valid email address"
				} else {
					this.whitepaper_message = "";
          this.white_paper_submitting = true;
/* 					const response = this.axios.get(`https://gleac.us16.list-manage.com/subscribe/post-json?u=5f51f150a24c51e9eefd7b405&id=9a79d535d4&subscribe=Subscribe&EMAIL=${email}&FNAME=${fname}&LNAME=${lname}`)
						.then(res => {
							console.log(res);
							console.log("Parsed", res.data.splilt("(")[1].split(")")[0])
							if (res.data.result === "success") {
								this.show_whitepaper_download = true;
								return;
							} else {
								let msg = res.data.msg;
								if (msg.indexOf("0 - ") > -1) {
									msg = msg.split("0 - ")[1];
								}
								this.whitepaper_message = msg;
              }
              this.white_paper_submitting = false;
						})
						.catch(err => {
							console.log(err);
              this.white_paper_submitting = false;
							this.whitepaper_message = "Something went wrong. Please try again later"
						}) */
						jsonp(`https://gleac.us16.list-manage.com/subscribe/post-json?u=5f51f150a24c51e9eefd7b405&id=9a79d535d4&subscribe=Subscribe&EMAIL=${email}&FNAME=${fname}&LNAME=${lname}&c=ng_jsonp_callback_0`, { name: "ng_jsonp_callback_0" }, (err, data) => {
							if (err) {
								console.log(err);
								this.white_paper_submitting = false;
								this.whitepaper_message = "Something went wrong. Please try again later"
							} else {
								if (data.result === "success") {
									this.show_whitepaper_download = true;
									return;
								} else {
									let msg = data.msg;
									if (msg.indexOf("0 - ") > -1) {
										msg = msg.split("0 - ")[1];
									}
									this.whitepaper_message = msg;
								}
								this.white_paper_submitting = false;
							}
						});
				}
			},
			submit_contact_request() {
				const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				const name = this.contact_name;
				const company = this.contact_company;
				const email = this.contact_email;
				this.contact_message = "";
				if (name === "" || company === "" || email === "") {
					this.contact_message = "Please fill out all the details"
				} else if (!reg.test(email.toLowerCase())) {
					this.contact_message = "Please enter a valid email address"
				} else {
					const body = {
						name,
						email,
						organization: company,
					}
          this.contact_form_submitting = true;
					const response = this.axios.post("https://dashboardapi.gleac.com/api/Dashboard/contact", body).then(res => {
            this.contact_form_submitting = false;
            this.contact_message_success = true,
						this.contact_message = res.data.result;
            this.contact_name ='';
            this.contact_company='';
            this.contact_email = '';
					}).catch(err => {
            this.contact_form_submitting = false;
						this.contact_message = "Something went wrong. Please try again later."
					})
				}
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

  p.error_message{
    color:#e53e3e;
    position: relative;
    padding-left: 20px;
    &:before{
      content: '';
      background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTdweCIgaGVpZ2h0PSIxN3B4IiB2aWV3Qm94PSIwIDAgMTcgMTciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+YWxlcnQtbGluZSAoMik8L3RpdGxlPgogICAgPGcgaWQ9IldlbGNvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb2dpbi00LWNvcHkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02OTcuMDAwMDAwLCAtNTk0LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDY5My4wMDAwMDAsIDEwMy4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDIwNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDEyOS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgODQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNi1Db3B5Ij4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMDAwMDAwLCA3Mi4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImFsZXJ0LWxpbmUtKDIpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoIiBwb2ludHM9IjAgMCAxNyAwIDE3IDE3IDAgMTciPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjExMzQxNjY3LDIuMTI1IEwxNS44NjEsMTMuODEyNSBDMTUuOTg3NTMsMTQuMDMxNjU2MyAxNS45ODc1MzE3LDE0LjMwMTY2NzYgMTUuODYxMDA0NSwxNC41MjA4MjU1IEMxNS43MzQ0NzczLDE0LjczOTk4MzUgMTUuNTAwNjQzMiwxNC44NzUgMTUuMjQ3NTgzMywxNC44NzUgTDEuNzUyNDE2NjcsMTQuODc1IEMxLjQ5OTM1Njc1LDE0Ljg3NSAxLjI2NTUyMjY3LDE0LjczOTk4MzUgMS4xMzg5OTU1LDE0LjUyMDgyNTUgQzEuMDEyNDY4MzMsMTQuMzAxNjY3NiAxLjAxMjQ3MDA0LDE0LjAzMTY1NjMgMS4xMzksMTMuODEyNSBMNy44ODY1ODMzMywyLjEyNSBDOC4wMTMxMTk2LDEuOTA1ODU4NDcgOC4yNDY5NDk3MywxLjc3MDg2NDUgOC41LDEuNzcwODY0NSBDOC43NTMwNTAyNywxLjc3MDg2NDUgOC45ODY4ODA0LDEuOTA1ODU4NDcgOS4xMTM0MTY2NywyLjEyNSBaIE0yLjk3OTI1LDEzLjQ1ODMzMzMgTDE0LjAyMDc1LDEzLjQ1ODMzMzMgTDguNSwzLjg5NTgzMzMzIEwyLjk3OTI1LDEzLjQ1ODMzMzMgWiBNNy43OTE2NjY2NywxMS4zMzMzMzMzIEw5LjIwODMzMzMzLDExLjMzMzMzMzMgTDkuMjA4MzMzMzMsMTIuNzUgTDcuNzkxNjY2NjcsMTIuNzUgTDcuNzkxNjY2NjcsMTEuMzMzMzMzMyBaIE03Ljc5MTY2NjY3LDYuMzc1IEw5LjIwODMzMzMzLDYuMzc1IEw5LjIwODMzMzMzLDkuOTE2NjY2NjcgTDcuNzkxNjY2NjcsOS45MTY2NjY2NyBMNy43OTE2NjY2Nyw2LjM3NSBaIiBpZD0iU2hhcGUiIGZpbGw9IiNGRjUyNTIiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=) no-repeat;
      width: 15px;
      height: 15px;
      background-size: 15px;
      position: absolute;
      left: 0;
      top: 1px;
    }

    &.success{
      padding-left: 0;
      &:before{
        display: none;
      }
      font-weight: 600;
      color: #27AE60 !important;
    }

  }

  .job-dropdown .vs__dropdown-toggle,
  .job-dropdown .vs__dropdown-menu {
    background: #fff;
    border-left: 2px solid #eaeaea;
    border-right: 2px solid #eaeaea;
    border-top: 2px solid #eaeaea;
  }


  .job-dropdown .vs__search, .vs__selected{
    font-size: 18px;
    font-family: Montserrat, sans-serif;
  }

  .job-dropdown .vs__dropdown-toggle:focus{
    border-color: #0065ad;
  }

  .job-dropdown .vs__search{
    opacity: 0.5;
  }

  .job-dropdown .vs__search:focus{
    opacity: 1;
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
      .quote_slider_home{
        div:focus{
          outline: none;
        }
        .quote_wrapper{
          max-width: 647px;
          margin: 0 auto;
        }
        .tw-leading-25px{
          line-height: 25px !important;
        }
        .slick-slide{
          padding-top: 20px;
        }
        .tw-bottom-6px{
          bottom:6px !important;
        }
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


  .case_study{
    .modal_content{
      padding: 44px 72px;
    }
  }


</style>
