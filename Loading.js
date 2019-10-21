import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function Loading(){
	return (
		<View style={styles.container}>
		<StatusBar barStyle="dark-content"/>
			<Text style = {styles.text}>2019년 10월 21일 완성한 날씨앱</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"flex-end",
		paddingHorizontal : 30,
		paddingVertical : 200,
		backgroundColor : "#FDF6AA"
	},
	text : {
		color : "#2c2c2c",
		fontSize : 30
	}
})