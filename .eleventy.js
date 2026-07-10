module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/media");

    eleventyConfig.addFilter("groupBy", function (collection, key) {

        if (!Array.isArray(collection)) {
            return {};
        }
    
        const groups = {};
    
        collection.forEach(item => {
    
            const value = item.data[key] || "Unknown";
    
            if (!groups[value]) {
                groups[value] = [];
            }
    
            groups[value].push(item);
    
        });
    
        return groups;
    
    });

    eleventyConfig.addFilter("sortBy", function (collection, key) {

        if (!Array.isArray(collection)) {
            return [];
        }
    
        return [...collection].sort((a, b) => {
    
            const aValue = a.data[key];
            const bValue = b.data[key];
    
            if (aValue < bValue) return -1;
            if (aValue > bValue) return 1;
    
            return 0;
    
        });
    
    });

    eleventyConfig.addFilter("dateFormat", function(date) {

        return new Date(date).toLocaleDateString("en-GB", {
    
            day: "numeric",
            month: "long",
            year: "numeric"
    
        });
    
    });

    eleventyConfig.addFilter("articles", function(collection) {

        if (!Array.isArray(collection)) {
            return [];
        }
    
        return collection.filter(page => page.data.library);
    
    });

    return {

        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",

        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },

        pathPrefix: "/tsikhi-csk/" //Comment this, for local devving ONLY!
    };

};