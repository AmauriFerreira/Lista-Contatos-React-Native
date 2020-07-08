import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, ToastAndroid, Alert, TouchableNativeFeedback,TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {


  const [nome, setNome] = useState(''); 
  const [numero, setNumero] = useState(''); 
  
  const [contato, setContatos] = useState ([]);
  
  const [contadorContatos, setContadorContatos] = useState(0);
  
  const capturaNome = (nome) => {
    setNome(nome);
  }
  const capturaNumero = (numero) => {
    setNumero(numero);
  }
  
  const addContato = (lembrete) => {
    setContatos((contato) => {
      setContadorContatos(contadorContatos + 1);
      return [...contato, { key: contadorContatos.toString(), nome,numero }]
    });}
    
    const apagarLembretes = () => {
      setContatos([]);
    }
  
    const removerLembrete = (keyASerRemovida) => {
      setContatos(contato => {
        return contato.filter((contato) => {
          return contato.key !== keyASerRemovida
         
        })
        
      })
    
      Alert.alert( "Lembrete Apagado!");
         
    }
  
  return (
    <View style={styles.telaPrincipalView}>
   
      <View style={styles.lembreteView}>
           
           <TextInput
               placeholder="Nome do contato..."
               style={styles.lembreteTextInput1}
               onChangeText={(t) => setNome(t)}
               value={nome}
           />

           <TextInput
            placeholder="Número do contato..." 
               style={styles.lembreteTextInput2}
               onChangeText={(t) => setNumero(t)}
               value={numero}
               />
           <View
           
               style={styles.botao}>
               <Button
                   title="Adicionar Contato"
                   onPress ={addContato}
                   
               />
              
           </View>
           <View
               style={styles.botao}>
               <Button
                   title="Apagar tudo"
                   onPress={apagarLembretes} />
           </View>
       </View>
  

      <View>
      <FlatList
        data={contato}
        renderItem={
          contato => (
            
          
            <TouchableNativeFeedback>

            <TouchableOpacity  >
            
        <View style={styles.itemNaLista}>
        <Text style={{fontSize:12, color:"#EEE", marginTop: 7}}>Nome: {contato.item.nome}</Text> 
        <Text style={{fontSize:12, color:"#EEE", marginTop: 7}}>  Contato: {contato.item.numero}</Text>
          
           <Icon.Button 
           name="trash" 
           size={30} 
           color="#EEE" 
           backgroundColor="transparent"  
           onPress={() => removerLembrete(contato.item.key)}>
         
           </Icon.Button>
    
             </View>
    
            </TouchableOpacity>  
    
            </TouchableNativeFeedback>
            
       
          )
        }
        
      />
       
      </View>

    </View>
    
  );

}

const styles = StyleSheet.create({
  itemNaLista: {
    //fontSize: 20,
    padding: 12,
    backgroundColor: '#b966ff',
    borderBottomColor: '#3f3160',
    borderBottomWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
},
  
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2
  },
  lembreteTextInput1: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginVertical: '2%',
    padding: 2,
    
},
lembreteTextInput2: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
     
},

lembreteView: {
    marginBottom: 8,
    alignItems: 'center'

},
botao: {
    width: '100%',
    marginTop: 8
}
  
});