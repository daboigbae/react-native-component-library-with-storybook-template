// Button.stories.js

import React from "react";

import {text} from "@storybook/addon-knobs";

import { storiesOf } from "@storybook/react-native";

import { View, Alert } from "react-native";
import { Button } from "../../../src";

storiesOf("Sample Button", module)
	.addDecorator((getStory) => <View style={{flex: 1}}>{getStory()}</View>)
	.add("Sample Button Story", () => {
		return (
			<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
				<Button
					label={(text("label", "Button Label"))} 
					onPress={() => Alert.alert("Button was pressed")}/>
			</View>
		)}
	)
	
