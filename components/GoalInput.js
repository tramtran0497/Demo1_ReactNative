import { useState } from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

function GoalInput ({onAddGoal}) {
    const [enteredGoal, setEnteredGoal] = useState("");

    function textInputHandler (enteredText) {
        setEnteredGoal(enteredText);
    };

    function addGoalHandler() {
        onAddGoal(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={textInputHandler} value={enteredGoal}></TextInput> 
            <Button title='Add goal' style={styles.buttonInput} onPress={addGoalHandler}></Button> 
        </View>
    )
};

const styles = StyleSheet.create({
    inputContainer:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        marginRight: 8,
        padding: 8,
        marginBottom: 10,
    },
    buttonInput: {

    },
});

export default GoalInput;