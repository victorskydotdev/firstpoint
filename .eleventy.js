module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('./src/assets/');
	eleventyConfig.addPassthroughCopy('./src/js/');
	eleventyConfig.addPassthroughCopy('./src/css/main.css');

	// Return your Object options:
	return {
		dir: {
			input: 'src',
			output: 'public',
		},
	};
};
