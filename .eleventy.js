const isProd = process.env.NODE_ENV === "production";

module.exports = function (eleventyConfig) {
  // Copie des assets (CSS, JS, images)
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    pathPrefix: isProd ? "/oj.gaudens/" : "/",
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    }
  };
};
