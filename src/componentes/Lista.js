import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert} from 'react-native';
import  React, { useState, useEffect, useCallback } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';



import {getRealm} from '../../src/databases/realm'


export default function Lista({navigation}) {

  const [view, setView] = useState([]);
  const [status, setStatus] = useState('');

  async function exibir(){

    const realm = await getRealm();

    try {
      const response = realm
      .objects("Order")
      //.filtered(`status = '${status}'`)
      //.sorted('created_at')

      setView(response);
      
      console.log(response);
      
    } catch (error) {
       Alert.alert('Chamado', "Não foi possivel cadastrar o cahamado!")
      
    }finally{


    }

  }

  useFocusEffect(useCallback(() => {
    exibir();
   },[]));
  
   
  async  function del(key){
    const realm = await getRealm();

    try {
      realm.write(()=>{
        realm.delete(realm.objects("Order").filtered(`_id = '${key}'`));
      });
    } catch (error) {
      Alert.alert('Chamado', "Não foi possivel Deletar")
      realm.close();
      
    }
    exibir()
  }

  async function hendleStatus(){
    const realm = await getRealm();

    try {
      
        const select = realm
        .objects("Order")
        .filtered(`_id = '${id}'`)[0]
        realm.write(()=>{
         select.status = select.status === "open" ? "closed" : "open"; 
        });
    } catch (error) {
      Alert.alert('Chamado', "Não foi possivel Fechar")
      realm.close();
      
    }
    
  }

 const list = (item) =>{
    let key=item._id
    return(
        <TouchableOpacity key={item._id} style={styles.caixa} onPress={()=> hendleStatus()}>

          

           <View style={styles.row}>

           <View style={{width:5, height:"100%", backgroundColor: 'red', borderBottomLeftRadius:10,borderTopLeftRadius:10}}></View> 

              <View style={styles.content}>
              <View style={styles.box_1}>

                      <Text style={styles.txt}>{item.chamado}</Text>
                      <Text style={styles.txt}>{item.equipamento}</Text>
              </View>
                  
                  <View style={styles.box_2}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Editar')}>
                      <FontAwesome name="pencil" size={25} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> del(key)}>
                      <FontAwesome name="trash" size={25} color="black" />     
                    </TouchableOpacity>

                  </View>
              </View>

           </View>

        </TouchableOpacity>
    );
 }

  return (
    <View >

      <FlatList
        style={styles.lista}
        data={view }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => list(item)}
        showsVerticalScrollIndicator = {false}

      />

    </View>
  );
}


const styles=StyleSheet.create({
    container:{
        flex:1
    },
    lista: {
        width:'100%',
        backgroundColor: '#F5F5F5',
        height:'95%'
    },
    caixa: {
        alignItems: 'center',
        marginTop:5,
        marginBottom:5,
    },
    row:{
        flexDirection: 'row',
        height:80,
        justifyContent: 'center',
        width:'100%',
        borderBottomWidth: 1,
        borderColor: '#E7E7E7',
    },
    content:{
      flexDirection: 'row',
      width:'98%',
      justifyContent: 'space-between',
      padding: 10,
      alignItems:'center',
      borderBottomRightRadius:10,
      borderTopRightRadius:10,

    },
     box_1:{

    },
     box_2:{
      flexDirection: 'row',
      justifyContent:'space-between',
      width:60,

    },
    txt: {
        fontSize: 15,
        fontWeight: 'bold',
      },
  })