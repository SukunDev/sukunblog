import MainLayout from "@/layouts/MainLayout/MainLayout";

export const metadata = {
  alternates: {
    canonical: "/privacy-policy",
  },
  title: `Privacy Policy - ${process.env.NEXT_PUBLIC_TITLE}`,
  openGraph: {
    title: `Privacy Policy - ${process.env.NEXT_PUBLIC_TITLE}`,
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    url: `${process.env.NEXT_PUBLIC_URL}/privacy-policy`,
    siteName: process.env.NEXT_PUBLIC_TITLE,
    locale: "id_ID",
    type: "article",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/thumbnail.png`,
      },
    ],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    "@id": `${process.env.NEXT_PUBLIC_URL}/#webpage`,
    name: `Privacy Policy - ${process.env.NEXT_PUBLIC_TITLE}`,
    url: `${process.env.NEXT_PUBLIC_URL}/`,
    lastReviewed: "2024-03-27T15:49:31.176021+00:00",
    dateCreated: "2024-03-27T15:49:31.176021+00:00",
    inLanguage: "id",
    description: process.env.NEXT_PUBLIC_DESCRIPTION,
    mainEntity: {
      "@type": "Article",
      mainEntityOfPage: `${process.env.NEXT_PUBLIC_URL}/`,
      headline: `Privacy Policy - ${process.env.NEXT_PUBLIC_TITLE}`,
      description: process.env.NEXT_PUBLIC_DESCRIPTION,
      keywords: "",
      datePublished: "2024-03-27T15:49:31.176021+00:00",
      dateModified: "2024-03-27T15:49:31.176021+00:00",
      author: {
        "@type": "Person",
        name: process.env.NEXT_PUBLIC_AUTHOR,
        description: "A passionate fullstack developer from Indonesia",
        url: `${process.env.NEXT_PUBLIC_URL}/about`,
        sameAs: [process.env.NEXT_PUBLIC_URL],
        image: {
          "@type": "ImageObject",
          url: "https://avatars.githubusercontent.com/u/83165558?v=4",
          height: 96,
          width: 96,
        },
      },
      publisher: {
        "@type": "Organization",
        name: process.env.NEXT_PUBLIC_TITLE,
        url: process.env.NEXT_PUBLIC_URL,
        logo: {
          "@type": "ImageObject",
          url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
          width: "500",
          height: "500",
        },
      },
      image: {
        "@type": "ImageObject",
        "@id": `${process.env.NEXT_PUBLIC_URL}/#primaryimage`,
        url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
        width: "3544",
        height: "3544",
      },
    },
    reviewedBy: {
      "@type": "Organization",
      name: process.env.NEXT_PUBLIC_TITLE,
      url: process.env.NEXT_PUBLIC_URL,
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
        width: "500",
        height: "500",
      },
    },
  },
  {
    "@context": "https://schema.org/",
    "@type": "NewsMediaOrganization",
    "@id": `${process.env.NEXT_PUBLIC_URL}#Organization`,
    name: process.env.NEXT_PUBLIC_TITLE,
    url: `${process.env.NEXT_PUBLIC_URL}`,
    sameAs: [],
    logo: {
      "@type": "ImageObject",
      url: `${process.env.NEXT_PUBLIC_URL}/uploads/lutfi-cartoon.png`,
      width: "500",
      height: "500",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+62-813-2532-4102",
      url: `${process.env.NEXT_PUBLIC_URL}/contact/`,
    },
  },
];

export default async function PrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MainLayout>
        <div className="mx-auto text-3xl font-semibold capitalize w-fit">
          <h2>Privacy Policy</h2>
        </div>
        <div class="article mt-6">
          <p>
            sukundev.com is committed to protecting consumer privacy online. We
            believe that greater protection of personal privacy on the Web will
            not only protect our users, but also increase users confidence and
            ultimately their participation in online activities.
          </p>
          <p>
            The purpose of our policy is to inform you about the types of
            information we gather about you when you visit our site, how we may
            use that information, whether we disclose it to anyone, and the
            choices you have regarding our use of the information.
          </p>
          <p>
            sukundev.com strives to offer its visitors the many advantages of
            Internet technology and to provide an interactive and personalized
            experience. By using our site, you consent to our website’s privacy
            policy and Terms of use.
          </p>
          <h2>
            <strong>HOW WE GATHER INFORMATION AND TECHNOLOGIES WE USE?</strong>
          </h2>
          <p>
            This section provides information about the information we collect
            and how the technologies we utilize work.
          </p>
          <h3>
            <strong>1. Cookies</strong>
          </h3>
          <p>
            We use “cookies.” The cookies we place on your computer are very
            small text files that uniquely identify your browser and may be sent
            to your computer or mobile device. They are stored on your hard
            drive and communicate with our servers only when you are visiting
            our websites. We use cookies to improve the quality of sukundev.com.
            They allow us to monitor aggregate metrics such as total number of
            visitors and number of pages viewed. They also allow us to optimize
            sukundev.com to make sure that we are delivering the best possible
            experience to our users.
          </p>
          <p>
            Your web browser is likely already set to accept cookies, yet you
            may choose to block cookies in your web browser’s settings. Note
            that blocking cookies may result in some features not being able to
            function properly. To learn more about controlling browser cookies
            visit: http://www.aboutcookies.org/Default.aspx?page=1.
            Additionally, we allow third parties that display advertisements,
            search listings, and other content on portions of sukundev.com to
            set and access their cookies on your computer or device and any
            cookies are subject to the applicable third parties privacy policies
            and not ours.
          </p>
          <p>
            These companies may use non-personally identifiable information
            (e.g., click stream information, browser type, time and date,
            subject of advertisements clicked or scrolled over) during your
            visits to sukundev.com in order to provide advertisements about
            goods and services likely to be of greater interest to you. These
            companies typically use a cookie or third party web beacon to
            collect this information. We also partner with a limited number of
            interest-based advertising companies to serve ads and/or collect
            certain information when you visit our websites.
          </p>
          <p>
            Interest-based advertising companies may use cookies to collect
            non-personally identifiable information during your visit to our
            websites in order to help show advertisements on other websites
            likely to be more interesting to you. To learn more about this
            ‘interest-based advertising’ practice or to opt-out of this use of
            your anonymous information, you can go to the National Advertising
            Initiative’s website at
            http://www.networkadvertising.org/managing/opt_out.asp.
          </p>
          <h3>
            <strong>2. Device Information</strong>
          </h3>
          <p>
            We collect information regarding the Internet browser, computer,
            tablet, mobile phone, smartphone or other device utilized to access
            sukundev.com to ensure that sukundev.com is optimized for those
            devices.
          </p>
          <h3>
            <strong>3. Analytics</strong>
          </h3>
          <p>
            We use third party information, reports and analysis about the usage
            and browsing patterns of users of sukundev.com. We allow the third
            party analytics companies to include web beacons and cookies on
            sukundev.com. The collected information includes search terms,
            search parameters, click-throughs by users, and other similar
            information. We utilize this information to improve SukunDev and
            make sure we are delivering relevant content to our users. The
            Analytics we use do not identify individual users of SukunDev.
          </p>
          <h3>
            <strong>4. Log Files</strong>
          </h3>
          <p>
            We may also automatically log certain anonymous information about
            visitors to SukunDev, including, but not limited to, where the user
            came from to visit our site, IP address, search terms utilized,
            browser type and a reading history of the pages viewed.
          </p>
          <p>
            <strong>USE OF THIRD PARTY AD NETWORKS AND SOCIAL NETWORKS</strong>
          </p>
          <p>
            SukunDev expects its partners, advertisers to respect the privacy of
            our users. However, third parties, including our partners,
            advertisers and other content providers accessible through our site,
            may have their own privacy and data collection policies and
            practices. For example, during your visit to our site you may link
            to, or view as part of a frame on SukunDev page, certain content
            that is actually created or hosted by a third party. Also, through
            SukunDev you may be introduced to, or be able to access,
            information, Web sites, advertisements, features, contests or
            sweepstakes offered by other parties.
          </p>
          <p>
            SukunDev is not responsible for the actions or policies of such
            third parties. You should check the applicable privacy policies of
            those third parties when providing information on a feature or page
            operated by a third party. While on our site, our advertisers,
            promotional partners or other third parties may use cookies or other
            technology to attempt to identify some of your preferences or
            retrieve information about you. For example, some of our advertising
            is served by third parties and may include cookies that enable the
            advertiser to determine whether you have seen a particular
            advertisement before.
          </p>
          <p>
            Through features available on our site, third parties may use
            cookies or other technology to gather information. SukunDev does not
            control the use of this technology or the resulting information and
            is not responsible for any actions or policies of such third
            parties. We use third-party advertising companies to serve ads when
            you visit our Web site. These companies may use non-personal
            information (i.e., information that does not include your name,
            address, email address or telephone number) about your visits to
            this and other Web sites in an effort to provide advertisements
            about goods and services that may be of interest to you.
          </p>
          <p>
            To learn more about third-party advertising or to opt-out of such
            advertising, you can visit both the Network Advertising Initiative
            and the Digital Advertising Alliance. In addition to the above, we
            have implemented at SukunDev certain “Google Analytics” features
            that support display advertising, including re-targeting. Visitors
            to SukunDev may opt out of Google Analytics, customize the Google
            Display Network ads by using the Google Ad Preferences Manager and
            learn more about how google serves ads by viewing its Customer Ads
            Help Center. If you do not wish to participate in Google Analytics,
            you may also download the Google Analytics pt-out browser add-on.
          </p>
          <p>
            <strong>PERSONAL INFORMATION PROVIDED BY YOU</strong>
          </p>
          <p>
            The personal information that we collect depends on the context of
            your interactions with us and the Services, the choices you make,
            <br />
            and the products and features you use. The personal information we
            collect may include the following:
          </p>
          <ul>
            <li>names</li>
            <li>phone numbers</li>
            <li>email addresses</li>
            <li>mailing addresses</li>
            <li>usernames</li>
            <li>passwords</li>
            <li>contact preferences</li>
          </ul>
          <p>
            We process your personal information for a variety of reasons,
            depending on how you interact with our Services, including:
          </p>
          <ul>
            <li>
              To facilitate account creation and authentication and otherwise
              manage user accounts. We may process your information so you can
              create and log in to your account, as well as keep your account in
              working order.
            </li>
            <li>
              To deliver and facilitate delivery of services to the user. We may
              process your information to provide you with the requested
              service.
            </li>
            <li>
              To respond to user inquiries/offer support to users. We may
              process your information to respond to your inquiries and solve
              any potential issues you might have the requested service.
            </li>
          </ul>
          <p>
            <strong>
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </strong>
          </p>
          <p>
            Based on the applicable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change that information, or delete it. To request to review, update,
            or delete your personal information, please submit a request form by{" "}
            <a
              href="mailto:sukundev32@gmail.com"
              target="_blank"
              rel="noopener"
            >
              clicking here
            </a>
            .
          </p>
          <p>
            <strong>CHANGES IN PRIVACY POLICY</strong>
          </p>
          <p>
            SukunDev reserves the right to change or update this Privacy Policy
            at any time by posting a notice at the Site explaining that we are
            changing our Privacy Policy.
          </p>
          <p>
            <strong>CONTACTING THE SITE</strong>
          </p>
          <p>
            This information is used to respond directly to your questions or
            comments. If you have any questions about this Privacy Policy,
            please feel free to contact us:&nbsp;
            <a href="mailto:sukundev32@gmail.com">sukundev32@gmail.com</a>
          </p>
        </div>
      </MainLayout>
    </>
  );
}
