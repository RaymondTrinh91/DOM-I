const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// NAV
const nav = document.querySelectorAll("nav a");
// nav[0].textContent = siteContent["nav"]["nav-item-1"]
// nav[1].textContent = siteContent["nav"]["nav-item-2"]
// nav[2].textContent = siteContent["nav"]["nav-item-3"]
// nav[3].textContent = siteContent["nav"]["nav-item-4"]
// nav[4].textContent = siteContent["nav"]["nav-item-5"]
// nav[5].textContent = siteContent["nav"]["nav-item-6"]
navObj = 1;
nav.forEach(element => {
  element.textContent = siteContent.nav[`nav-item-${navObj}`];
  element.style.color = "green";
  navObj += 1;
})

//NEW NAV ITEMS
const newNav1 = document.createElement('a');
newNav1.textContent = "Home";
newNav1.style.color = "green";

const newNav2 = document.createElement('a');
newNav2.textContent = "Manipulate";
newNav2.style.color = "green";

const naver = document.querySelector('nav')
naver.prepend(newNav1);
naver.appendChild(newNav2);


// CALL TO ACTION
const callText = document.querySelector(".cta-text h1");
callText.textContent = siteContent["cta"]["h1"]
const callButton = document.querySelector(".cta-text button");
callButton.textContent = siteContent["cta"]["button"]
const callImg = document.querySelector("#cta-img");
callImg.src = siteContent["cta"]["img-src"]

// FEATURES
const firstContentTitle = document.querySelector(".top-content :nth-child(1) h4");
firstContentTitle.textContent = siteContent["main-content"]["features-h4"]
const firstContentP = document.querySelector(".top-content :nth-child(1) p");
firstContentP.textContent = siteContent['main-content']['features-content']

// ABOUT
const secondContentTitle = document.querySelector(".top-content :nth-child(2) h4");
secondContentTitle.textContent = siteContent['main-content']['about-h4']
const secondContentP = document.querySelector(".top-content :nth-child(2) p");
secondContentP.textContent = siteContent['main-content']['about-content']

// BANNER IMG
const midBanner = document.querySelector("#middle-img");
midBanner.src = siteContent['main-content']["middle-img-src"]


const thirdContentTitle = document.querySelector(".bottom-content :first-child h4");
thirdContentTitle.textContent = siteContent['main-content']["services-h4"]
const thirdContentP = document.querySelector(".bottom-content :first-child p");
thirdContentP.textContent = siteContent['main-content']["services-content"]

// PRODUCT
const fourthContentTitle = document.querySelector(".bottom-content :nth-child(2) h4");
fourthContentTitle.textContent = siteContent['main-content']["product-h4"]
const fourthContentP = document.querySelector(".bottom-content :nth-child(2) p");
fourthContentP.textContent = siteContent['main-content']["product-content"]

// VISION
const fifthContentTitle = document.querySelector(".bottom-content :nth-child(3) h4");
fifthContentTitle.textContent = siteContent['main-content']["vision-h4"]
const fifthContentP = document.querySelector(".bottom-content :nth-child(3) p");
fifthContentP.textContent = siteContent['main-content']["vision-content"]

// CONTACT
const contact = document.querySelector(".contact h4");
contact.textContent = siteContent['contact']['contact-h4']

const contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent['contact']["address"]
contactInfo[1].textContent = siteContent['contact']["phone"]
contactInfo[2].textContent = siteContent['contact']["email"]

// FOOTER
const footer = document.querySelector("footer p");
footer.textContent = siteContent.footer.copyright;