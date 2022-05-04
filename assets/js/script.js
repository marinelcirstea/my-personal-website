const projectList = [
  {
    section: "Test section",
    projects: [
      {
        title: "Open source ecommerce platform",
        summary:
          `This project is still under active development. The plan is to reach a fully functional ecommerce platform built on top of Node and Next.js, that is open source and can be used by anyone.`,
        github: "https://github.com/marinelcirstea/ecommerce",
        codepen:"",
        webLink: "",
        image: "assets/images/project_images/ecommerce-platform.png",
        imageAltText: "abcd",
        tech: "",
      },
      {
        title: "Live front-end environment",
        summary:
          `Fully fledged development environment allowing you to write, test, and discover front-end code. Fully integrated Monaco Editor(VS Code) with live preview, syntax highlighting, code formatting, intellisense and hot reloading available out of the box.`,
        github: "https://github.com/marinelcirstea/live-front-end-environment",
        codepen:"",
        webLink: "https://live-front-end-environment.vercel.app/",
        image: "assets/images/project_images/live-front-end-env.png",
        imageAltText: "abcd",
        tech: "",
      },
      {
        title: "JustGetInTouch.com",
        summary:
          `JustGetInTouch sends your site's form submission directly to your inbox without the need of any backend code or SMTP setup. Fun fact: I'm actually using it on this exact website!`,
        github: "https://github.com/marinelcirstea/express-mailer-with-sendgrid",
        codepen:"",
        webLink: "https://www.justgetintouch.com/",
        image: "assets/images/project_images/justgetintouch.PNG",
        imageAltText: "abcd",
        tech: "",
      },
      {
        title: "Responsive Pricing Cards",
        summary:
          "Full responsivity for Mobile, Tablet and PC. This is part of my free snippets project created on GitHub. Feel free to use it for your website or future project. You do not have to create a backlink or even mention you have got it from me.",
        github: "https://github.com/marinelcirstea/html-design-snippets/tree/main/snippets/cards/pricing_1",
        codepen:"https://codepen.io/marinelc/pen/RwVddxj",
        webLink: "",
        image: "assets/images/project_images/pricing_1.PNG",
        imageAltText: "abcd",
        tech: "",
      },
      {
        title: "Responsive Footer",
        summary:
          `Full responsivity for Mobile, Tablet and PC. This is part of my free snippets project created on GitHub. Feel free to use it for your website or future project. You do not have to create a backlink or even mention you've got it from me. You can find more on the live environment projects page.`,
        github: "https://github.com/marinelcirstea/html-design-snippets/tree/main/snippets/footers/footer_2",
        codepen:"https://codepen.io/marinelc/pen/qBmvMgJ",
        webLink: "",
        image: "assets/images/project_images/footer_1.PNG",
        imageAltText: "abcd",
        tech: "",
      },
      {
        title: "EspressoUnderground.co.uk",
        summary:
          `Rewritten the design, implemented analytics and improved loading speed for EspressoUnderground.co.uk. They used quite an old platform - it was a real pain to make it do what we wanted it to do. All of these resulted in their traffic and revenue increasing 4 times in only a few months.`,
        github: "",
        codepen:"",
        webLink: "https://www.espressounderground.co.uk/Default.asp",
        image: "assets/images/project_images/espressounderground.png",
        imageAltText: "abcd",
        tech: "",
      },
    ],
  },
];

for (section of projectList) {
  for (project of section.projects) {
    document.querySelector(".projects__list").innerHTML += `
        <div class="project">
            <div class="project__copy">
                <h3 class="project__title">${project.title}</h3>
                <p class="project__summary">
                    ${project.summary}
                </p>
                <div class="project__cta">
                <a href="#contact" class="button button-primary">Contact</a>
                ${project.webLink?`<a href="${project.webLink}" class="button" target="_blank">See Live</a>`:``}
                ${project.github?`<a href="${project.github}" class="button" target="_blank">GitHub</a>`:``}
                ${project.codepen?`<a href="${project.codepen}" class="button" target="_blank">CodePen</a>`:``}
                </div>
            </div>
            <div class="project__image">
                <img
                    src="${project.image}"
                    alt="${project.imageAltText}"
                />
            </div>
        </div>
        
        `;
  }
}

// SERVICES-----------------------------------

const servicesList = [
  {
    img: "icons8-ui-design-64.png",
    title: "Ui Design",
    copy: `New websites built from the ground up with your business in mind.`,
  },
  {
    title: "Web Development",
    copy: `I can work on existing projects too, add new functionalities or fix those stubborn, annoying bugs.`,
    img: "icons8-web-development-64.png",
  },
  {
    title: "Ecommerce",
    copy: `E-commerce sites built from scratch or on popular platforms such as Magento, PrestaShop or WooCommerce.`,
    img: "icons8-commerce-64.png",
  },
  {
    title: "SEO",
    copy: `Rest assured that good SEO practices are at the forefront of
    my design and development process.`,
    img: "icons8-search-engine-optimization-64.png",
  },
  {
    title:"Content management systems",
    copy:`Whether you need a Wordpress site, Joomla or something
    completely bespoke I can help you decide depending on your
    budget and needs.`,
    img:"icons8-content-management-68.png",
  },
  {
    title:"Responsive design",
    copy: `Mobile first approach to ensure your website scales to any device, no matter what size.`,
    img: "icons8-responsive-design-64.png",
  }
];

const servicesEl = document.querySelector(".servicesList");

for(const service of servicesList){
  servicesEl.innerHTML += `
  <div class="service">
  <div class="serviceImg">
    <img src="/assets/images/services/${service.img}" alt="icon" />
  </div>

  <h2 class="serviceHeadline">${service.title}</h2>

  <div class="serviceCopy">
    <p>${service.copy}</p>
  </div>
</div>
`
}

// FREQUENTLY ASKED QUESTIONS -----------------------
const faq = [
  // web dev/design
  {
    subtitle: "Web development/Design",
    questions: [
      {
        q: `What types of websites can you build?`,
        a: `Any type, from personal to business/e-commerce websites and bespoke content management platforms.`,
      },
      {
        q: `How long does it take to build a website?`,
        a: `It depends on the size of the website, but a small one takes between 3 an 7 days. Very large websites can take months.`,
      },
      {
        q: `What is the price for a website?`,
        a: `Again, it depends on the size of the website, but for a "normal" website with 3-5 pages(example: Landing page, About, Contact, Services, etc) the price starts from 600GBP`,
      },
      {
        q: `Are the prices different for e-commerce sites?`,
        a: `Yes, the prices for e-commerce sites are higher than for normal websites and they start at 1200gbp.`,
      },
      {
        q: `Are the prices different for content management platforms?`,
        a: `If I have to write a bespoke system, yes, the prices start at 900gbp. If you want me to edit an existing system, we'll have to talk about the requirements before giving you an estimate.`,
      },
    ],
  },

  // SEO
  // {
  //   subtitle: "Search Engine Optimization",
  //   questions: [
  //     {
  //       q: `What types of websites can you build?`,
  //       a: `Any type, from personal to business/e-commerce websites and bespoke content management platforms.`,
  //     },
  //     {
  //       q: `How long does it take to build a business website?`,
  //       a: `It depends on the size of the website, but it usually takes between 3 an 7 days. Very large websites can take up to a month`,
  //     },
  //   ],
  // },
];
const faqList = document.querySelector(".faq__list");
for (const section of faq) {
//   faqList.innerHTML += `<div class="faq__subtitle"><p>${section.subtitle}</p></div>`;
  for (const question of section.questions) {
    faqList.innerHTML += `
    <div class="faq__item">
        <div class="faq__question">
            <h4>${question.q}</h4>
            <span class="faq__question-arrow"></span>
        </div>
        <div class="faq__answer">
            <p>
                ${question.a}
            </p>
        </div>
    </div>
    `;
  }
}
//CODE FOR SINGLE TOGGLE
for (const faqItem of document.querySelectorAll(".faq__question")) {
  faqItem.addEventListener("click", (e) => {
    const hasClass =
      e.currentTarget.parentNode.classList.contains("faq__show-answer");

    //if it doesn't have the class when we click, it means another element has it, so remove it from the others
    if (!hasClass) {
      for (const el of document.querySelectorAll(".faq__show-answer")) {
        el.classList.remove("faq__show-answer");
      }
    }
    //toggle the class on parent element('.faq__item')
    e.currentTarget.parentNode.classList.toggle("faq__show-answer");
  });
}

//CODE FOR MULTIPLE TOGGLEs
// for (const faqItem of document.querySelectorAll(".faq__question")) {
//   faqItem.addEventListener("click", (e) =>
//     e.currentTarget
//       .parentNode.classList.toggle("faq__show-answer")
//   );
// }
