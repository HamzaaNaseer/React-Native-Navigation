import { Pressable, Text, View, StyleSheet, Platform } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        //pressed is provided automatically by react native
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : "null",
        ]}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 16,
    borderColor: "black",
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible", // so that the ripple effect does not go outside the div
  },

  button: { flex: 1 }, //this is given to the pressable bcz by default it takes 0 space
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
