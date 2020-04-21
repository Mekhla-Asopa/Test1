const siteConfig = {
  title: "Learn Selenium book", // Title for website.
  tagline: "markdown-book-generator ",
  url: "https://learnselenium.bigbinary.com/docs/", // website URL
  baseUrl: "/",

  projectName: "bigbinary-ebook",
  organizationName: "bigbinary",

  //Nav bar
  headerLinks: [],

  //Logo
  headerIcon: "img/logo.png",
  footerIcon: "img/logo.png",
  favicon: "img/logo.png",

  //Website Color
  colors: {
    primaryColor: "#2979FF",
    secondaryColor: "#00E5FF"
  },
  editUrl:
    "https://github.com/bigbinary/learn-selenium-book/blob/master/book",
  //copyright in footer
  copyright: `Copyright © ${new Date().getFullYear()} BigBinary`,

  //codeblock highlight
  highlight: {
    theme: "default"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/prism.js",
    "/js/custom.js"
  ],
  stylesheets: ["/css/prism.css", "/css/custom.css"],
  scrollToTop: true,

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg"
};

module.exports = siteConfig;
