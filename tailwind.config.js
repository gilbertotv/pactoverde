module.exports = {
	content: ["./src/**/*.tsx"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "45px",
				sm: "1rem",
				lg: "2rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		extend: {
			colors: {
				greenmain: "#05472C",
				bluehome: "#0D497F",
				pinkhome: "#FF4A53",
				green1: "#4C9A5A",
				green2: "#C2D8B5",
				green3: "#00663C",
				green4: "#4E9E5C",
				green5: "#3D854A",
				green6: "#6CB384",
				gray1: "#808080",
				gray2: "#B3B3B3",
				gray3: "#666666",
				red1: "#FF4A53",
				red2: "rgba(255, 74, 83, 0.3)",
			},
			minHeight: {
				head: "600px",
				headmob: "600px",
			},
		},
	},
	plugins: [],
};
