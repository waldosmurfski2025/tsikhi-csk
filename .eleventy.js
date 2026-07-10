module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/media");

    return {

        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },

        //pathPrefix: "/tsikhi-csk/" //Comment this, for local devving ONLY!
    };

};