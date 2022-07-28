import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useCallback } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Lista from '../../componentes/Lista';

import {getRealm} from '../../databases/realm';



export default function Home({navigation}, item) {

  const [onFilter, setOnFilter] = useState([]);

  function hendleStatusOpen() { 
    setOnFilter('open');
    }
  function hendleStatusClosed() { 
    setOnFilter('closed');
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titulo}>
        <View>
          <Text style={styles.txt_titulo}>HelpDesk</Text>
          <Text style={styles.sub_txt_titulo}>Registre seu Chamado!</Text>
        </View>
        <TouchableOpacity style={styles.user_btn}>
         <FontAwesome name="user" size={25} color="black" />
        </TouchableOpacity>
      </View>

      <View >
        <View style={styles.btn_caixa}>
          <TouchableOpacity style={styles.btn_aberto} onPress={() => hendleStatusOpen()} >
            <Text style={styles.btn_txt}>Aberto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_fechado} onPress={() => hendleStatusClosed()}>
            <Text style={styles.btn_txt}>Fechado</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.caixa_chamados}>
        <View style={styles.chamados}>
          <Text style={styles.txt_titulo}>Chamados</Text>
          <Text style={styles.sub_txt_titulo}>{onFilter}</Text>
        </View>

        <Lista navigation={navigation} /> 

      </View>

    <View style={styles.add}>
      <TouchableOpacity style={styles.add_btn} onPress={()=> navigation.navigate('New')}>
        <Text style={styles.btn_txt_add}>+</Text>
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
    marginTop: 30,
    marginBottom: 50,
  },
  txt_titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sub_txt_titulo: {
    fontSize: 15,
  },
  user_btn:{
    width:60,
    height:60,
    backgroundColor: '#F8F8F8',
    borderRadius: 50,
    alignItems : 'center',
    justifyContent: 'center',
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
    backgroundColor: '#04B2D9',
    borderTopLeftRadius:15,
    borderBottomLeftRadius:15,

  },
  btn_fechado:{
    width: '50%',
    height: 40,
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: '#CF0620',
    borderTopRightRadius:15,
    borderBottomRightRadius:15,
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
  add:{
    alignItems : 'flex-end',

  },
  add_btn:{
    width:60,
    height:60,
    backgroundColor: '#04B2D9',
    borderRadius: 50,
    alignItems : 'center',
    justifyContent: 'center',
  },
  btn_txt_add:{
    fontSize: 40,
    fontWeight: '300',
    color: '#fff',
  },
  
});
