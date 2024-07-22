import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	SafeAreaView,
	ScrollView,
	View,
	Text,
	Image,
	TextInput,
	TouchableOpacity,
	Button,
	Platform,
	StatusBar,
} from "react-native";
import PieChart from "react-native-pie-chart";
import { LinearGradient } from "expo-linear-gradient";

import {
	FIREBASE_APP,
	FIREBASE_AUTH,
	FIREBASE_DATA,
} from "../firebase/FirebaseConfig";
import { ref, onValue, set, push } from "firebase/database";

export default function TempScreen({ navigation }) {
	// Fetch Water Level from Firebase
	const db = FIREBASE_DATA;

	// Send Stop Pump events
	const [stop, setStop] = useState([]);
	const stopPump = async () => {
		try {
			const reference = ref(db, "pump/");
			set(reference, {
				stop: true,
			});
			console.log("Stop pump: " + typeof stop);
			setStop("");
		} catch (error) {
			console.error("Error sending Stop pump event:", error);
		}
	};

	// Fetch Temperature from Firebase
	const [tempC, setTempC] = useState([]);
	useEffect(() => {
		const startCountTempC = ref(db, "data/tempC/");
		onValue(startCountTempC, (snapshot) => {
			const dataTempC = snapshot.val();
			// console.log(dataTempC);
			setTempC(dataTempC);
		});
	}, []);

	// Fetch Humidity from Firebase
	const [humidity, setHumidity] = useState([]);
	useEffect(() => {
		const startCountHumidity = ref(db, "data/humidity/");
		onValue(startCountHumidity, (snapshot) => {
			const dataHumidity = snapshot.val();
			// console.log(dataHumidity);
			setHumidity(dataHumidity);
		});
	}, []);

	// Fetch Light from Firebase
	const [light, setLight] = useState([]);
	useEffect(() => {
		const startCountLight = ref(db, "data/outdoorLight/");
		onValue(startCountLight, (snapshot) => {
			const dataLight = snapshot.val();
			// console.log(dataLight);
			setLight(dataLight);
		});
	}, []);

	// Fetch Fan from Firebase
	const [fan, setFan] = useState([]);
	useEffect(() => {
		const startCountFan = ref(db, "data/fan/");
		onValue(startCountFan, (snapshot) => {
			const dataFan = snapshot.val();
			// console.log(dataFan);
			setFan(dataFan);
		});
	}, []);

	return (
		<SafeAreaView style={styles.view}>
			<LinearGradient
				colors={["#66ffff", "#3b5998", "#192f6a"]}
				style={styles.gradient}
			>
				<ScrollView style={styles.scrollView}>
					<TouchableOpacity
						style={styles.board}
						onPress={() =>
							alert(
								`Average tempC: ${tempC}°C\nTotal tempC: 57°C\nOutdoor tempC: 30°C`,
							)
						}
					>
						<Text style={styles.title}>Temperature</Text>
						<Text style={styles.text}>{tempC}°C</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.board}
						onPress={() =>
							alert(
								`Average humidity: ${humidity}%\nTotal humidity: 25%\nOutdoor humidity: 19%`,
							)
						}
					>
						<Text style={styles.title}>Humidity</Text>
						<Text style={styles.text}>{humidity}%</Text>
					</TouchableOpacity>
					<View style={styles.board}>
						<Text style={styles.title}>Outdoor Lights</Text>
						{light == true ? (
							<Text style={styles.text}>On</Text>
						) : (
							<Text style={styles.text}>Off</Text>
						)}
					</View>
					<View style={styles.board}>
						<Text style={styles.title}>Fan</Text>
						{fan == true ? (
							<Text style={styles.text}>On</Text>
						) : (
							<Text style={styles.text}>Off</Text>
						)}
					</View>
				</ScrollView>
			</LinearGradient>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	view: {
		height: "100%",
		width: "100%",
		// backgroundColor: '#67e6ff',
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	gradient: {
		height: "100%",
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	board: {
		// borderWidth: 0.5,
		height: 200,
		width: 350,
		backgroundColor: "#c9e5ff",
		marginTop: 20,
		alignItems: "center",
		borderRadius: 20,
	},
	title: {
		marginVertical: 12,
		fontWeight: "500",
		fontSize: 20,
	},
	text: {
		fontSize: 60,
		fontWeight: "700",
		color: "#192f6a",
		marginVertical: 12,
	},
});
