import { useState } from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

function GoalInput ({onAddGoal, visible, onCancel}) {
    const [enteredGoal, setEnteredGoal] = useState("");

    function textInputHandler (enteredText) {
        setEnteredGoal(enteredText);
    };

    function addGoalHandler() {
        onAddGoal(enteredGoal);
        setEnteredGoal("");
    }

    return (
        <Modal visible={visible}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={textInputHandler} value={enteredGoal}></TextInput>
                <View style={styles.buttonWrapper}>
                    <View style={styles.buttonInput}>
                        <Button title='Add goal' onPress={addGoalHandler}></Button> 
                    </View>
                    <View style={styles.buttonInput}>
                        <Button title='Cancel' onPress={onCancel}></Button> 
                    </View>
                </View> 
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        marginBottom: 10,
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
    buttonInput: {

    },
});

export default GoalInput;