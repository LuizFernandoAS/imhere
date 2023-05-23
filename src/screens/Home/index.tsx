import { Text , View,  TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './styles';
import { Participant } from "../../components/Participant";
import { useState } from "react";

export default function Home(){
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantName] = useState('');

  function handleParticipantAdd(){
    if(participants.includes(participantsName)){
      return Alert.alert("Participante Existe", "Já existe um participante na Lista com esse nome")
    }
    
    setParticipants( prevState => [...prevState, participantsName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name:string){
    Alert.alert("Remove", `Remover o participante ${name}?`,[
    {
      text:'Sim',
      onPress: () => 
        setParticipants(prevState => prevState.filter(
          participant => participant !== name))
    },
    {
      text: 'Não',
      style: 'cancel'
    }
  ])
  }

  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>
          Nome do evento
      </Text>
      
      <Text style={styles.eventDate}>
        Terça, 23 de Maio de 2023
      </Text>

      <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
            onChangeText={setParticipantName}
            value={participantsName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item })=>(
          <Participant 
            key={item}
            name={item} 
            onRemove={ () => handleParticipantRemove(item) }
          />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={()=>(
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença.
            </Text>
          )}
          
        
      />
    </View>
  )
}