export default function(eleventyConfig) {
   eleventyConfig.addPassthroughCopy("src/images");
   eleventyConfig.addPassthroughCopy("src/documents");
   eleventyConfig.addPassthroughCopy("src/styles");
   return {
      dir: {
         input: "src",
         includes: "_includes",
         output: "dist"
      }
   };
}