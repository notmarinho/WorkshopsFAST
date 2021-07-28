import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';

import AnalisadorClass from '../AnalisadorDePresenca';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

//Components
import FlatListColaboradores from '../components/FlatListColaboradores';

const AnalisadorDePresenca = ({ casosDeTeste }) => {
    const [atas, setAtas] = useState(casosDeTeste)
    const [funcionarios, setFuncionarios] = useState([])

    const getColaboradores = (listaAtas) => {
        const analisador = new AnalisadorClass(listaAtas);
        const colaboradores = analisador.colaboradoresQueViram2WorkshopsSeguidos();
        setFuncionarios(colaboradores)
    }

    return (
        <View style={styles.container}>
            <FlatListColaboradores data={funcionarios} />
            <View style={styles.buttonContainer}>
                <ScrollView
                    horizontal
                    contentContainerStyle={{ flexGrow: 1 }}>
                    {atas.map((ata, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => getColaboradores(ata)}
                                style={styles.button}>
                                <Text style={styles.buttonLabel}>{index + 1}° Caso</Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    buttonContainer: {
        flex: 1,
    },
    button: {
        width: (SCREEN_WIDTH / 6),
        height: (SCREEN_WIDTH / 6),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#4bd68c",
        borderRadius: 5,
        marginHorizontal: 5
    },
    buttonLabel: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#fff'
    }
})

export default AnalisadorDePresenca;
