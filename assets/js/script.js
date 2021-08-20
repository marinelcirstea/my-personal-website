// FREQUENTLY ASKED
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
        q: `How long does it take to build a business website?`,
        a: `It depends on the size of the website, but it usually takes between 3 an 7 days. Very large websites can take up to a month`,
      },
      {
        q: `What is the price for a business website?`,
        a: `Again, it depends on the size of the website, but for a "normal" business website with 3-5 pages(example: Landing page, About, Contact, Services, etc) the price starts from 600GBP`,
      },
      {
        q: `How long does it take to build an e-commerce website?`,
        a: `It depends on the size of the website, but it usually takes about one week.`,
      },
      {
        q: `What is the price for an e-commerce website?`,
        a: `It depends on the size of the website, but for a "normal" e-commerce website with a landing page(Homepage), Categories, Product and Checkout page the price starts from 1.200GBP`,
      },
      {
        q: `How long does it take to build a bespoke content management system?`,
        a: `It depends on the requirements of the project. I can not really give an estimate without proper briefing, but a basic content management system should take about one to two weeks to write.`,
      },
      {
        q: `What is the price for a bespoke content management system?`,
        a: `The price depends on the requirements and size of the application, but for a basic system the price starts at 900GBP.`,
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

const projectList = [
  {
    section: "Test section",
    projects: [
      {
        title: "JustGetInTouch.com",
        summary:
          "JustGetInTouch sends your site's form submission directly to your inbox without the need of any backend code or SMTP setup.",
        github: "",
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
          "Full responsivity for Mobile, Tablet and PC. This is part of my free snippets project created on GitHub. Feel free to use it for your website or future project. You do not have to create a backlink or even mention you have got it from me.",
        github: "https://github.com/marinelcirstea/html-design-snippets/tree/main/snippets/footers/footer_2",
        codepen:"https://codepen.io/marinelc/pen/qBmvMgJ",
        webLink: "",
        image: "assets/images/project_images/footer_1.PNG",
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
                <a href="#contact" class="button button-primary">Contact</a>
                ${project.webLink?`<a href="${project.webLink}" class="button">See Live</a>`:``}
                ${project.github?`<a href="${project.github}" class="button">GitHub</a>`:``}
                ${project.codepen?`<a href="${project.codepen}" class="button">CodePen</a>`:``}
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
