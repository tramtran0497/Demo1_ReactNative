import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
export default function App() {
  const [listGoals, setListGoals] = useState([]);
  const [visibleModal, setVisibleModal] = useState(false);

  function startAddGoalHandler () {
    setVisibleModal(true);
  };

  function endAddGoalHandler () {
    setVisibleModal(false);
  };

  function addGoalHandler (enteredText) {
    if(enteredText){
      setListGoals(currentlist => [...currentlist, {text: enteredText, id: Math.random().toString()}]);
    } else{
      alert("Empty goal!")
    }
    setVisibleModal(false);
  };

  function deleteItemHandler (id) {
    setListGoals((currentGoals) => {
      return currentGoals.filter(goal => goal.id !== id)
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add New Goal" onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal={addGoalHandler} visible={visibleModal} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        {/*<ScrollView alwaysBounceVertical={false}> 
          {
            listGoals.map(goal => {
              return (
                <View key={goal} style={styles.goalWrap}>
                  <Text style={styles.text}>{goal}</Text>
                </View>
              )
            })
          }
        </ScrollView> */}
        <FlatList 
          data={listGoals}
          renderItem ={(itemData) => {
            return <GoalItem item={itemData.item} onDeleteItem={deleteItemHandler}/>;
          }}
          keyExtractor = {(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false} 
          >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  goalsContainer:{
    height: 600,
  }
});

