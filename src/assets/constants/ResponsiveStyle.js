import React from "react";
import { ScaledSize, StyleProp, StyleSheet } from "react-native";

export default function CreateResponsiveStyle(mobileStyles, webStyles) {
  console.log("CreateResponsiveStyle: webStyles: ", webStyles);
  const web = StyleSheet.create(webStyles);
  const mobile = StyleSheet.create(mobileStyles);

  return (layout) => (style) => {
    console.log("CreateResponsiveStyle: layout: ", layout);
    console.log("CreateResponsiveStyle: style: ", style);
    // return null;
    // if (layout.width < 720 && mobile.hasOwnProperty(style)) {
    if (layout.width < 720) {
      return mobile[style];
    } else return StyleSheet.compose(mobile[style], web[style]);
  };
}
