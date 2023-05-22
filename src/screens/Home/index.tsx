import { Text , View,  TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from './styles';
import { Participant } from "../../components/Participant";

export default function Home(){
  const participants = [
    'Luiz Fernando', 
    'Rayanne', 
    'Leticia', 
    'Nando', 
    'Ray', 
    'Fiama',
    'Tamy',
    'Taynara',
    'Tay',
    'Tamires',
    'Pietro',
    'Grazy',
    'Loloh',
    'Kakah'
  ];

  function handleParticipantAdd(){
    if(participants.includes("Luiz Fernando")){
      return Alert.alert("Participante Existe", "Já existe um participante na Lista com esse nome")
    }
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove(name:string){
    Alert.alert("Remove", `Remover o participante ${name}?`,[
    {
      text:'Sim',
      onPress: () => Alert.alert("Deletado!", "O participante foi deletado com sucesso!")
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
        Sexta, 4 de Novembro de 2022
      </Text>

      <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
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