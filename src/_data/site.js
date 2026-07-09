module.exports = {
    baseurl: process.env.ELEVENTY_ENV === "production"
        ? "/tsikhi-csk"
        : ""
};