require("ts-node").register({
	compilerOptions: {
		module: "commonjs",
		target: "es2017",
	},
});

module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-postcss",
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Barlow`, `Barlow\:100,300,500,700`],
				display: "swap",
			},
		},
	],
};
