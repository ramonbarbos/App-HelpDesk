import  React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';







export default function Editar({navigation}) {

  const [chamado, setChamado] = useState('')
  const [equipamento, setEquipamento] = useState('')
  const [descricao, setDescricao] = useState('');
    

  return (
    
    <View style={styles.container}>
        <View style={styles.titulo}>
        <TouchableOpacity  onPress={()=> navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
            <View style={styles.caixa_txt}>
            <Text style={styles.txt_titulo}>Editar Chamados</Text>
            </View>

      </View>

        
      <View style={styles.caixa_chamados}>
        <View style={styles.chamados}>
          
          <TextInput
            style={styles.input}
            placeholder='Numero do Chamado'
            onChangeText={setChamado}
          />

          <TextInput
            style={styles.input}
            placeholder='Equipameno'
            onChangeText={setEquipamento}
          />

          <TextInput
            style={styles.input}
            placeholder='Descrição do Chamado'
            onChangeText={setDescricao}
          />
          

        </View>
      </View>

    <View style={styles.add}>
      <TouchableOpacity style={styles.add_btn} onPress={()=> salvar()}>
        <Text style={styles.btn_txt}>Registrar Chamado</Text>
      </TouchableOpacity>
    </View>
    
    </View>
    
  );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    padding: 20
  },
  titulo: {
    flexDirection: 'row',
    alignItems:'center',
    marginTop: 50,
    marginBottom: 50,
  },
  caixa_txt:{
    marginLeft: 50,

  },
  txt_titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  sub_txt_titulo: {
    fontSize: 15,
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
    flexDirection: 'column',
    alignItems : 'center',

  },
  input: {
    width:'100%',
    height:40,
    borderBottomWidth: 1,
    fontSize: 15,
    padding: 10,
    marginTop: 40,
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
