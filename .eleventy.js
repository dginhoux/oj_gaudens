const isProd = process.env.NODE_ENV === "production";

module.exports = function (eleventyConfig) {
  /* =========================
     COPIE DES FICHIERS STATIQUES
  ========================== */
  eleventyConfig.addPassthroughCopy("src/assets"); // CSS, JS, images

  /* =========================
     CONFIG GÉNÉRALE
  ========================== */
  return {
    pathPrefix: isProd ? "/oj-gaudens/" : "/", // ⚠️ NOM EXACT DU REPO
    dir: {
      input: "src",
      includes: "_includes",
      output: "docs"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};
