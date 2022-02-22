module.exports = function(eleventyConfig) {
     eleventyConfig.addPlugin(eleventyNavigationPlugin);
     eleventyConfig.addPassthroughCopy('css')
     eleventyConfig.addPassthroughCopy('img')
     eleventyConfig.setBrowserSyncConfig({
      files: './_site/css/**/*.css'
      });
 }
 
 const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");


