import { StyleSheet } from "react-native";

const s = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    paddingLeft: 25,
  },

  unit: {
    position: "absolute",
    fontSize: 30,
    alignSelf: "flex-end",
    paddingRight: 10,
  },

  container: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
});

export { s };
