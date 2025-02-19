import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function Story() {
    const Data = [
        { id: '1', name: 'Hero' },
        { id: '2', name: 'Joe' },
        { id: '3', name: 'Ramu' },
        { id: '4', name: 'Alice' },
        { id: '5', name: 'Bob' },
        { id: '6', name: 'Charlie' },
        { id: '7', name: 'David' },
        { id: '8', name: 'Eva' },
        { id: '9', name: 'Frank' },
        { id: '10', name: 'Grace' },
        { id: '11', name: 'Hannah' },
        { id: '12', name: 'Ivan' },
        { id: '13', name: 'Boss' },
        { id: '14', name: 'Hawa' }
    ];

    return (
        <View style={styles.container}>
            <FlatList
                data={Data}
                horizontal // ✅ Enables horizontal scrolling
                showsHorizontalScrollIndicator={false} // ✅ Hides scrollbar
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.circle}>
                        <Text style={styles.mainText}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    circle: {
        width: 80, // ✅ Circle width
        height: 80, // ✅ Circle height
        borderRadius: 40, // ✅ Makes it circular
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        marginHorizontal: 10, // ✅ Adds spacing between circles
        borderWidth: 3,
        borderColor: 'red', // ✅ Red border
    },
    mainText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
