import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Lista from '../../componentes/Lista';



export default function Home({navigation}) {



  return (
    <View style={styles.container}>

      <View style={styles.titulo}>
        <View>
          <Text style={styles.txt_titulo}>HelpDesk</Text>
          <Text style={styles.sub_txt_titulo}>Contate-nos e resolveremos!</Text>
        </View>
      </View>

      <View >
        <View style={styles.btn_caixa}>
          <TouchableOpacity style={styles.btn_aberto}>
            <Text style={styles.btn_txt}>Aberto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_fechado}>
            <Text style={styles.btn_txt}>Fechado</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.caixa_chamados}>
        <View style={styles.chamados}>
          <Text style={styles.txt_titulo}>Chamados</Text>
          <Text style={styles.sub_txt_titulo}>0</Text>
        </View>

        <Lista navigation={navigation}/>

      </View>

    <View style={styles.add}>
      <TouchableOpacity style={styles.add_btn} onPress={()=> navigation.navigate('New')}>
        <Text style={styles.btn_txt}>Novo Chamado</Text>
      </TouchableOpacity>
    </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20
  },
  titulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: 50,
    marginBottom: 50,
  },
  txt_titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sub_txt_titulo: {
    fontSize: 15,
  },
  btn_caixa:{
    flexDirection:'row',
    width:'100%',
    marginBottom: 45,
  },
  btn_aberto:{
    width: '50%',
    height: 40,
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: '#D92525',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,

  },
  btn_fechado:{
    width: '50%',
    height: 40,
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: '#044040',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
  },
  btn_txt:{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  caixa_chamados:{
    flex:1,
  },
  chamados: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems : 'center',
  },
  add_btn:{
    width:'100%',
    height:40,
    backgroundColor: '#044040',
    borderRadius: 10,
    alignItems : 'center',
    justifyContent: 'center',
  }
  
});
