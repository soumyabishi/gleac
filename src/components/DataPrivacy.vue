<template>
  <div class="DataPrivacy">
    <app-nav></app-nav>

    <div class="content_wrapper_page">
      <div class="ui container tw-font-rubik">

         <h2>Technical and Organizational Measures of Data Protection at GLEAC
         </h2>
        <p>GLEAC is aware that the processing of data is a major responsibility. Especially when this processing is performed by using new technologies with high computing power. That's why we at GLEAC take privacy very seriously.</p>
        <p>In terms of new European General Data Protection Regulation (hereinafter GDPR) and in line with standard industry practices for data security and compliance, it is necessary to ensure data protection by selecting and implementing technical and organizational measures (hereinafter TOMs). The type and extent of the TOMs implemented depends on the state of art, the implementation costs and the nature, scope, circumstances and purpose of the processing, as well as the different likelihood and severity of the risk to the rights and freedoms of those concerned.
        </p>
        <p>The measures described hereinafter are subject to permanent change of technology and can be adjusted, if and insofar this will be required to ensure the security standards.
        </p>
        <ol>
          <li><b>Confidentiality</b>
            <ul>
              <li><b>Physical Access Control</b> – All our data centers and office and other data processing facilities ensure that unauthorized physical access is restricted. Therefore, GLEAC implements personalized chip cards, electronic door openers, facility security services or entrance security staff, as well as alarm systems, video surveillance systems in all of our worldwide data processing facilities.
              </li>

              <li><b>Electronic Access Control</b> – GLEAC ensures only authorized use of data processing and data storage system by two-factor authentication, a password policy following BSI standards, automatic blocking and locking mechanisms as well as encryption of data carriers and storage media.
              </li>

              <li><b>Internet Access Control</b> – (permission for user rights of access to and amendment of data) – GLEAC ensures permission for user rights of access to and amendment of data, such as no unauthorized reading, copying, changing or deletion of personal data with our IT systems, following a strict rights authorization concept with need based rights of access, and surveillance of by logging of system access events.

              </li>

              <li><b>Isolation Control</b> – GLEAC keeps data of different interests, clients and purposes strictly separated.

              </li>
              <li>
                <b>Pseudonymisation</b> -  GLEAC is aware of the principles of data minimization and data avoidance and takes measures of privacy by design and privacy by default, ensuring the processing of personal data in such method, that the data cannot be associated with a specific data subject without the assistance of additional key information, provided that this additional information is stored separately, and is subject to appropriate technical and organisational measures, wherever such measures are applicable and sufficient.
              </li>
            </ul>
          </li>
          <li>
               <b>Integrity</b>
            <ul>
              <li><b>Data Transmission Control</b> -  GLEAC ensures authorized reading, copying, changing or deletion of personal data by electronic transfer or transport implementing high standards of encryption, providing access to our server spaces for external environments only via Virtual Private Network (VPN).</li>
              <li><b>Data Entry Control</b> – All IT systems implemented at GLEAC guarantee verification, whether and by whom personal data is entered into a data processing system, is changed or deleted.</li>
            </ul>
          </li>

          <li> <b>Availability and Resilience</b>

             <ul>
               <li><b>Availability Control</b> – GLEAC Backup Strategy provides the prevention of accidental or willful destruction or loss of personal data, including state of the art virus protection, firewall, reporting procedures and contingency planning and a rapid recovery in emergency situations.</li>
             </ul>
          </li>

          <li><b>Procedure for regular testing, assessment and evaluation</b>
            <ul>
              <li>GLEAC implements a Data Protection Management System following the advice of our external legal experts from privacy and IT law.
              </li>
              <li>
                Order or Contract Control -  GLEAC requires a formalized order and contract management, ensuring that no third party data processing takes place without consent and corresponding instructions from our clients, as well as strict controls on the selection of the service provider by pre-evaluating the technical and organizational measures of data protection and its security and supervisory of follow-up checks.
              </li>
            </ul>

          </li>
        </ol>
      </div>
    </div>

    <app-footer></app-footer>

  </div>
</template>

<script>
export default {
    name: 'DataPrivacy',
    data() {
      return {}
    },
    methods:{
    },
    components:{
    }
  }
</script>

<style lang="scss">
  // Custom styles for twilwind
  .tw-m-auto{
    margin: 0 auto;
  }

  .content_wrapper_page {
    padding-top: 200px;
    padding-bottom: 200px;
  }
</style>

