/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const baseUrl = '/sdk/va/';

const siteConfig = {
  title: 'SAS® Visual Analytics SDK', // Title for your website.
  tagline: 'Insights where you need them',
  url: 'https://developer.sas.com', // Your website URL
  baseUrl: baseUrl, // Base URL for your project

  // Used for publishing and more
  projectName: 'visual-analytics-sdk',
  organizationName: 'sassoftware',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: 'getting-started', label: 'Getting Started' },
    { doc: 'api-reference', label: 'API' },
    { doc: 'faq', label: 'FAQ' },
    { page: 'help', label: 'Help' },
    // Add | as a separator.  If headerLinks changes then custom.css needs to change as well.
    { label: '|' },
    { href: 'https://developer.sas.com', label: 'SAS Developer Portal', external: true}
  ],

  /* path to images for header/footer */
  headerIcon: 'img/sas-logo-wht.png',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#0074BE',
    secondaryColor: '#023559'
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} SAS Institute`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'solarized-dark'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    // NOTE: clipboard is needed for code-block-buttons
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    `${baseUrl}js/code-block-buttons.js`,
  ],
  stylesheets: [
    `${baseUrl}css/code-block-buttons.css`,
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/sassoftware/visual-analytics-sdk',
  communitiesUrl: 'http://communities.sas.com/visual-analytics',

  // Google Analytics
  gaTrackingId: 'GTM-PWTVHH'
};

module.exports = siteConfig;
