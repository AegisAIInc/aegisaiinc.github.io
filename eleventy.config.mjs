import htmlMinifier from "html-minifier-terser";

export default function (eleventyConfig) {
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());
  eleventyConfig.addGlobalData("siteUrl", "https://aegisai.io");

  eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
    if (outputPath?.endsWith(".html")) {
      return await htmlMinifier.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: false,
      });
    }
    return content;
  });

  // Liquid as the sole template engine
  eleventyConfig.setTemplateFormats(["liquid", "md"]);
  eleventyConfig.setLiquidOptions({
    extname: ".liquid",
  });

  // Blog collection (posts in _posts/)
  eleventyConfig.addCollection("blog", function (collectionApi) {
    return collectionApi.getFilteredByGlob("**/_posts/*.md").sort((a, b) => b.data.date - a.data.date);
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
