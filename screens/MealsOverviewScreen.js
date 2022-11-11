import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

//route and navigation is automatically passed to all the screens (screens only)
function MealsOverviewScreen({ route }) {
  const { categoryId } = route.params;

  //getting the meals
  const displayedMeals = MEALS.filter((item) =>
    item.categoryIds.includes(categoryId)
  );
  const renderMealItem = (itemData) => {
    return (
      <MealItem item = {itemData.item} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
