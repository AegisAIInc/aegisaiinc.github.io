export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());

  // Liquid as the sole template engine
  eleventyConfig.setTemplateFormats(["liquid", "md"]);
  eleventyConfig.setLiquidOptions({
    extname: ".liquid",
  });

  // Blog collection (posts in blog/posts/)
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("blog/posts/*.md").sort((a, b) => b.data.date - a.data.date);
  });

  // Passthrough copy for assets (input -> output mapping)
  eleventyConfig.addPassthroughCopy({ "src/css/styles.css": "css/styles.css" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    htmlTemplateEngine: "liquid",
    markdownTemplateEngine: "liquid",
  };
}
