import { Button, StyleSheet, Text, View } from "react-native";

function UserScreen({ navigation }) {
  const OpenDrawerHandler = () => {
    navigation.toggleDrawer();
  };
  return (
    <View style={styles.rootContainer}>
      <Text>
        This is <Text style={styles.highlight}>"User"</Text>screen
      </Text>
      <Button title="Open Drawer" onPress={OpenDrawerHandler} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#eb1064",
  },
});
