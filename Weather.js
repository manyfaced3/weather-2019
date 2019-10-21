import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Thunderstorm: {
		iconName: "weather-lightning-rainy",
		gradient: ["#134E5E", "#71B280"],
		title:"Thunder, thunder",
		subtitle:"Lightening like a thunder"
	},
	Drizzle: {
		iconName: "weather-rainy",
		gradient: ["#83a4d4", "#b6fbff"],
		title:"Rain a little",
		subtitle:"Take your umbrella"
	},
	Rain: {
		iconName: "weather-pouring",
		gradient: ["#7095cc", "#b6fbff"],
		title:"It's raining Damn",
		subtitle:"Halleluya"
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#085078", "#85D8CE"],
		title:"Snow Snow White",
		subtitle:"Maybe White Christmas?"
	},
	Atmosphere: {
		iconName: "weather-sunny",
		gradient: ["#F09819", "#EDDE5D"],
		title:"Cleeen",
		subtitle:"Get some fresh air"
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#F09819", "#EDDE5D"],
		title:"Sunny!",
		subtitle:"It's so true, I love you"
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#2c3e50", "#bdc3c7"],
		title:"Clouds today",
		subtitle:"Don't be so gloomy"
	},
	Haze: {
		iconName: "weather-fog",
		gradient: ["#536976", "#BBD2C5"],
		title:"Foggy today",
		subtitle:"Drive carefully"
	},
	Mist: {
		iconName: "weather-fog",
		gradient: ["#536976", "#BBD2C5"],
		title:"Foggy today",
		subtitle:"Drive carefully"
	},
	Dust: {
		iconName: "weather-partlycloudy",
		gradient: ["#334d50", "#cbcaa5"],
		title:"Dustie",
		subtitle:"You have to have your mask on"
	}
};

export default function Weather({ temp, condition }) {
	return (
		<LinearGradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					name={weatherOptions[condition].iconName}
					size={96}
					color="white" />
				<Text style={styles.temp}>{temp}&#8451;</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer }}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
		</LinearGradient>

	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm",
		"Drizzle",
		"Rain",
		"Snow",
		"Atmosphere",
		"Clear",
		"Clouds",
		"Haze",
		"Mist",
		"Dust"
	]).isRequired
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		flex: 1,
		alignItems: "center"
	},
	temp: {
		fontSize: 42,
		color: "white"
	},
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"

	},
	title: {
		fontSize: 40,
		fontWeight: "300",
		color: "white",
		marginBottom: 10
	},
	subtitle: {
		fontSize: 24,
		fontWeight: "400",
		color: "white"

	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: "flex-start"
	}


})