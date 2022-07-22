import  React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';







export default function Excluir({navigation}) {

    const [id, setId] = useState('');
   

    function Del(id){
        
        db.transaction((tx) => {
            tx.executeSql(
              'DELETE FROM  table_user where user_id=?',
              [id],
              (tx, results) => {
                console.log('Results', results.rowsAffected);
                Alert.alert("Aviso","ID Apagado")
               // navigation.navigate('Home')
              }
            );
          });
       
     }
    

  return (
    
    <View style={styles.container}>
        <View style={styles.titulo}>
        <TouchableOpacity  onPress={()=> navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" />
        </TouchableOpacity>
            <View style={styles.caixa_txt}>
            <Text style={styles.txt_titulo}>Excluir Chamados</Text>
            </View>

      </View>

        <Text>Deletando...</Text>
    
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

});
