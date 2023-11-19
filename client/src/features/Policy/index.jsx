import React from "react";

const Policy = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDate = () => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = today.getDate();
    return `${months[month]} ${date}, ${year}`;
  };

  return (
    <div className="w-full h-full pt-36">
      <div className="p-20 space-y-10">
        {/* heading */}
        <div className="space-y-5">
          <h1 className="text-center text-4xl font-bold">PRIVACY POLICY</h1>

          <p>
            <strong>Last updated {getDate()}</strong>
          </p>

          <p>
            This privacy notice for Chemys Limited ('we', 'us', or 'our'),
            describes how and why we might collect, store, use, and/or share
            ('process') your information when you use our services ('Services'),
            such as when you:
          </p>

          <p>
            Visit our website at chemyslimited.com, or any website of ours that
            links to this privacy notice
          </p>
          <p>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </p>

          <p>
            <strong>Questions or concerns?</strong> Reading this privacy notice
            will help you understand your privacy rights and choices. If you do
            not agree with our policies and practices, please do not use our
            Services. If you still have any questions or concerns, please
            contact us at info.chemys.co.uk.
          </p>

          <h2 className="text-center text-2xl font-bold">
            SUMMARY OF KEY POINTS
          </h2>

          <p className="italic font-bold">
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our table of contents
            below to find the section you are looking for.
          </p>
          <ul className="list-square space-y-5 pl-10">
            <li>
              <strong>What personal information do we process?</strong> When you
              visit, use, or navigate our Services, we may process personal
              information depending on how you interact with us and the
              Services, the choices you make, and the products and features you
              use. Learn more about{" "}
              <a>personal information you disclose to us.</a>
            </li>

            <li>
              <strong>Do we process any sensitive personal information?</strong>{" "}
              We may process sensitive personal information when necessary with
              your consent or as otherwise permitted by applicable law. Learn
              more about <a>sensitive information we process.</a>
            </li>

            <li>
              <strong>Do we receive any information from third parties?</strong>{" "}
              We may receive information from public databases, marketing
              partners, social media platforms, and other outside sources. Learn
              more about <a>information collected from other sources</a>.
            </li>

            <li>
              <strong>How do we process your information?</strong> We process
              your information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to
              comply with law. We may also process your information for other
              purposes with your consent. We process your information only when
              we have a valid legal reason to do so. Learn more about{" "}
              <a>how we process your information.</a>
            </li>

            <li>
              <strong>
                In what situations and with which parties do we share personal
                information?
              </strong>{" "}
              We may share information in specific situations and with specific
              third parties. Learn more about{" "}
              <a>when and with whom we share your personal information.</a>
            </li>

            <li>
              <strong>What are your rights?</strong> Depending on where you are
              located geographically, the applicable privacy law may mean you
              have certain rights regarding your personal information. Learn
              more about <a>your privacy rights.</a>
            </li>

            <li>
              <strong>How do you exercise your rights?</strong> The easiest way
              to exercise your rights is by submitting a{" "}
              <a>data subject access request</a>, or by contacting us. We will
              consider and act upon any request in accordance with applicable
              data protection laws.
            </li>
          </ul>

          <p>
            Want to learn more about what we do with any information we collect?{" "}
            <a>Review the privacy notice in full.</a>
          </p>
        </div>
        {/* table of contents */}
        <div>
          <h2 className="text-xl font-bold py-5">TABLE OF CONTENTS</h2>
          <ol className="pl-10 space-y-5 font-semibold">
            <li>1. WHAT INFORMATION DO WE COLLECT?</li>
            <li>2. HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL
              INFORMATION?
            </li>
            <li>
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </li>
            <li>5. HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>6. DO WE COLLECT INFORMATION FROM MINORS?</li>
            <li>7. WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>8. CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>9. DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            <li>
              11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </li>
          </ol>
        </div>
        {/* 1 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            1. WHAT INFORMATION DO WE COLLECT?
          </h2>
          <div className="pl-5">
            {/* 1a */}
            <div>
              <h3 className="text-lg font-bold py-5">
                Personal information you disclose to us
              </h3>
              <div className="pl-5 space-y-5">
                <p className="italic">
                  <strong>In Short:</strong> We collect personal information
                  that you provide to us.
                </p>
                <p>
                  We collect personal information that you voluntarily provide
                  to us when you express an interest in obtaining information
                  about us or our products and Services, when you participate in
                  activities on the Services, or otherwise when you contact us.
                </p>
                <div>
                  <p className="font-bold">
                    Personal Information Provided by You.
                  </p>
                  <p>
                    The personal information that we collect depends on the
                    context of your interactions with us and the Services, the
                    choices you make, and the products and features you use. The
                    personal information we collect may include the following:
                  </p>

                  <ul className="list-square space-y-2 py-5 pl-5 font-bold capitalize">
                    <li>name</li>
                    <li>phone number</li>
                    <li>email address</li>
                    <li>company</li>
                  </ul>
                </div>
                <div>
                  <p>
                    <strong>Sensitive Information.</strong> When necessary, with
                    your consent or as otherwise permitted by applicable law, we
                    process the following categories of sensitive information:
                  </p>
                  <ul className="list-square space-y-2 py-5 pl-5 font-bold capitalize">
                    <li>health data</li>
                    <li>financial data</li>
                  </ul>
                </div>
                <p>
                  All personal information that you provide to us must be true,
                  complete, and accurate, and you must notify us of any changes
                  to such personal information.
                </p>
              </div>
            </div>
            {/* 1b */}
            <div>
              <h3 className="text-lg font-bold py-5">
                Information collected from other sources
              </h3>
              <div className="pl-5 space-y-5">
                <p className="italic">
                  <strong>In Short:</strong> We may collect limited data from
                  public databases, marketing partners, and other outside
                  sources.
                </p>
                <p>
                  In order to enhance our ability to provide relevant marketing,
                  offers, and services to you and update our records, we may
                  obtain information about you from other sources, such as
                  public databases, joint marketing partners, affiliate
                  programs, data providers, and from other third parties. This
                  information includes mailing addresses, job titles, email
                  addresses, phone numbers, intent data (or user behaviour
                  data), Internet Protocol (IP) addresses, social media
                  profiles, social media URLs, and custom profiles, for purposes
                  of targeted advertising and event promotion.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </h2>
          <div className="pl-5 space-y-5">
            <p className="italic">
              <strong>In Short:</strong> We process your information to provide,
              improve, and administer our Services, communicate with you, for
              security and fraud prevention, and to comply with law. We may also
              process your information for other purposes with your consent.
            </p>

            <p className="font-bold">
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>

            <ol className="list-square pl-5 space-y-5">
              <li>
                <strong>
                  To deliver and facilitate delivery of services to the user.
                </strong>{" "}
                We may process your information to provide you with the
                requested service.
              </li>
              <li>
                <strong>
                  To respond to user inquiries/offer support to users.
                </strong>{" "}
                We may process your information to respond to your inquiries and
                solve any potential issues you might have with the requested
                service.
              </li>
              <li>
                <strong>To send administrative information to you.</strong> We
                may process your information to send you details about our
                products and services, changes to our terms and policies, and
                other similar information.
              </li>
              <li>
                <strong>To fulfil and manage your orders.</strong> We may
                process your information to fulfil and manage your orders,
                payments, returns, and exchanges made through the Services.
              </li>
              <li>
                <strong>To enable user-to-user communications.</strong> We may
                process your information if you choose to use any of our
                offerings that allow for communication with another user.
              </li>
              <li>
                <strong>To request feedback.</strong> We may process your
                information when necessary to request feedback and to contact
                you about your use of our Services.
              </li>
              <li>
                <strong>To protect our Services.</strong> We may process your
                information as part of our efforts to keep our Services safe and
                secure, including fraud monitoring and prevention.
              </li>
              <li>
                <strong>
                  To save or protect an individual's vital interest.
                </strong>{" "}
                We may process your information when necessary to save or
                protect an individual's vital interest, such as to prevent harm.
              </li>
            </ol>
          </div>
        </div>
        {/* 3 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
          </h2>
          <div className="pl-5 space-y-5">
            <p>
              <strong>In Short:</strong> We only process your personal
              information when we believe it is necessary and we have a valid
              legal reason (i.e. legal basis) to do so under applicable law,
              like with your consent, to comply with laws, to provide you with
              services to enter into or fulfil our contractual obligations, to
              protect your rights, or to fulfil our legitimate business
              interests.
            </p>
            <div className="space-y-5">
              <h4 className="font-bold">
                If you are located in the EU or UK, this section applies to you.
              </h4>

              <p>
                The General Data Protection Regulation (GDPR) and UK GDPR
                require us to explain the valid legal bases we rely on in order
                to process your personal information. As such, we may rely on
                the following legal bases to process your personal information:
              </p>

              <ol className="list-square pl-5 space-y-5">
                <li>
                  <strong>Consent.</strong> We may process your information if
                  you have given us permission (i.e. consent) to use your
                  personal information for a specific purpose. You can withdraw
                  your consent at any time. Learn more about{" "}
                  <a>withdrawing your consent.</a>
                </li>
                <li>
                  <strong>Performance of a Contract.</strong> We may process
                  your personal information when we believe it is necessary to
                  fulfil our contractual obligations to you, including providing
                  our Services or at your request prior to entering into a
                  contract with you.
                </li>
                <li>
                  <p>
                    <strong>Legitimate Interests.</strong> We may process your
                    information when we believe it is reasonably necessary to
                    achieve our legitimate business interests and those
                    interests do not outweigh your interests and fundamental
                    rights and freedoms. For example, we may process your
                    personal information for some of the purposes described in
                    order to:
                  </p>
                  <ol>
                    <li>
                      Diagnose problems and/or prevent fraudulent activities
                    </li>
                    <li>
                      Understand how our users use our products and services so
                      we can improve user experience
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Legal Obligations.</strong> We may process your
                  information where we believe it is necessary for compliance
                  with our legal obligations, such as to cooperate with a law
                  enforcement body or regulatory agency, exercise or defend our
                  legal rights, or disclose your information as evidence in
                  litigation in which we are involved.
                </li>
                <li>
                  <strong>Vital Interests</strong>. We may process your
                  information where we believe it is necessary to protect your
                  vital interests or the vital interests of a third party, such
                  as situations involving potential threats to the safety of any
                  person.
                </li>
              </ol>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </h2>
          <div className="pl-5 space-y-5">
            <p className="italic">
              <strong>In Short:</strong> We may share information in specific
              situations described in this section and/or with the following
              third parties.
            </p>
            <p>
              We may need to share your personal information in the following
              situations:
            </p>
            <ol className="list-square pl-5 space-y-5">
              <li>
                <strong>Business Transfers.</strong> We may share or transfer
                your information in connection with, or during negotiations of,
                any merger, sale of company assets, financing, or acquisition of
                all or a portion of our business to another company.
              </li>
              <li>
                <strong>Affiliates.</strong> We may share your information with
                our affiliates, in which case we will require those affiliates
                to honour this privacy notice. Affiliates include our parent
                company and any subsidiaries, joint venture partners, or other
                companies that we control or that are under common control with
                us.
              </li>
              <li>
                <strong>Business Partners.</strong> We may share your
                information with our business partners to offer you certain
                products, services, or promotions
              </li>
            </ol>
          </div>
        </div>
        {/* 5 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
          </h2>
          <div className="pl-5 space-y-5">
            <p className="italic">
              <strong>In Short:</strong> We keep your information for as long as
              necessary to fulfil the purposes outlined in this privacy notice
              unless otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements). No purpose in this
              notice will require us keeping your personal information for
              longer than 6 months.
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymise such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </div>
        </div>
        {/* 6 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            6. DO WE COLLECT INFORMATION FROM MINORS?
          </h2>
          <div className="pl-5 space-y-5">
            <p className="italic">
              <strong>In Short:</strong> We do not knowingly collect data from
              or market to children under 18 years of age.
            </p>
            <p>
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the Services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent’s use of the Services. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we may have collected from
              children under age 18, please contact us at{" "}
              <a>info.chemys.co.uk.</a>
            </p>
          </div>
        </div>
        {/* 7 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            7. WHAT ARE YOUR PRIVACY RIGHTS?
          </h2>
          <div className="pl-5 space-y-5">
            <p>
              <strong>In Short:</strong> In some regions, such as the European
              Economic Area (EEA), United Kingdom (UK),and Switzerland, you have
              rights that allow you greater access to and control over your
              personal information. You may review, change, or terminate your
              account at any time.
            </p>
            <p>
              In some regions (like the EEA, UK,and Switzerland), you have
              certain rights under applicable data protection laws. These may
              include the right (i) to request access and obtain a copy of your
              personal information, (ii) to request rectification or erasure;
              (iii) to restrict the processing of your personal information;
              (iv) if applicable, to data portability; and (v) not to be subject
              to automated decision-making. In certain circumstances, you may
              also have the right to object to the processing of your personal
              information.
            </p>
            <p>
              We will consider and act upon any request in accordance with
              applicable data protection laws.
            </p>
            <p>
              If you are located in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your Member State data protection authority
              or UK data protection authority.
            </p>
            <p>
              If you are located in Switzerland, you may contact the Federal
              Data Protection and Information Commissioner.
            </p>
            <p>
              <strong>Withdrawing your consent:</strong> If we are relying on
              your consent to process your personal information, which may be
              express and/or implied consent depending on the applicable law,
              you have the right to withdraw your consent at any time. You can
              withdraw your consent at any time.
            </p>
            <p>
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </p>
            <p>
              If you have questions or comments about your privacy rights, you
              may email us at{" "}
              <a
                href="mailto:info.chemys.co.uk"
                className="font-bold hover:text-tertiary"
              >
                info.chemys.co.uk.
              </a>
            </p>
          </div>
        </div>
        {/* 8 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            8. CONTROLS FOR DO-NOT-TRACK FEATURES
          </h2>
          <div className="pl-5">
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ('DNT') feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognising and
              implementing DNT signals has been finalised. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this privacy notice.
            </p>
          </div>
        </div>
        {/* 9 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            9. DO WE MAKE UPDATES TO THIS NOTICE?
          </h2>
          <div className="pl-5 space-y-5">
            <p className="italic">
              <strong>In Short:</strong> Yes, we will update this notice as
              necessary to stay compliant with relevant laws.
            </p>
            <p>
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated 'Revised' date and the
              updated version will be effective as soon as it is accessible. If
              we make material changes to this privacy notice, we may notify you
              either by prominently posting a notice of such changes or by
              directly sending you a notification. We encourage you to review
              this privacy notice frequently to be informed of how we are
              protecting your information.
            </p>
          </div>
        </div>
        {/* 10 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h2>
          <div className="pl-5 space-y-5">
            {" "}
            <p>
              If you have questions or comments about this notice, you may email
              us at{" "}
              <a
                href="mailto:info.chemys.co.uk"
                className="font-bold hover:text-tertiary"
              >
                info.chemys.co.uk
              </a>{" "}
              or contact us by post at:
            </p>
            <div className="font-bold">
              <p>Chemys Limited</p>
              <p>
                Unit 8 The Acorn Centre, Hainault Business Park, Roebuck Road,
              </p>
              <p>Ilford IG6 3TU</p>
              <p>United Kingdom</p>
            </div>
          </div>
        </div>
        {/* 11 */}
        <div>
          <h2 className="text-xl font-bold py-5">
            11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
            YOU?
          </h2>
          <div className="pl-5">
            <p>
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it. To request to
              review, update, or delete your personal information, please
              contact us on{" "}
              <a
                href="mailto:info.chemys.co.uk"
                className="font-bold hover:text-tertiary"
              >
                info.chemys.co.uk
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
