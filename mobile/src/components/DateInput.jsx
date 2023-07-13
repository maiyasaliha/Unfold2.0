import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const DateInput = () => {
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const handleDayChange = (text) => {
        setDay(text);
        console.log('Date Entered')
    };

    const handleMonthChange = (text) => {
        setMonth(text);
        console.log('Month Entered')
    };

    const handleYearChange = (text) => {
        setYear(text);
        console.log('Year Entered')
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="DD"
                placeholderTextColor="#937CA7"
                maxLength={2}
                keyboardType="numeric"
                value={day}
                onChangeText={handleDayChange}
            />
            <TextInput
                style={styles.input}
                placeholder="MM"
                placeholderTextColor="#937CA7"
                maxLength={2}
                keyboardType="numeric"
                value={month}
                onChangeText={handleMonthChange}
            />
            <TextInput
                style={styles.input}
                placeholder="YYYY"
                placeholderTextColor="#937CA7"
                maxLength={4}
                keyboardType="numeric"
                value={year}
                onChangeText={handleYearChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: 50,
        marginLeft: 70,
        top: 200,

    },
    input: {
        width: '30%',
        height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
        color: "#937CA7",
        fontFamily: 'CabinCondensed-Regular',
    },
});

export default DateInput;
