import React from 'react';
import { View } from 'react-native';
import ListaColaboradores from './src/screen/ListaDeColaboradores';

const casosDeTeste = [
  ["hbas ies", "alco2 hbas", "pot alco2 hbas"],
  ["hbas ies alco", "alco hbas tst gkmo", "pot aacs alco aaosc fgrr", "till ies alco2 tst gkmo hbas"],
  ["hbas ies", "", "alco hbas gkmo"],
  [],
  ["hbas ies", "hbas ies"],
]

const AnalisadorDePresenca = () => {
  return (
    <View style={{ flex: 1 }}>
      <ListaColaboradores casosDeTeste={casosDeTeste} />
    </View>
  )
}


export default AnalisadorDePresenca;
