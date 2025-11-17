import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import api from '../Api';
import { globalStyles, colors } from '../styles';

export default function Home({navigation}) {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    api.get('/alunos')
      .then(r=>setAlunos(r.data))
      .catch(()=>{})
      .finally(()=>setLoading(false))
  },[])

  if(loading) {
    return (
      <View style={globalStyles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={globalStyles.homeContainer}>
      <FlatList 
        data={alunos} 
        keyExtractor={i=>String(i.id)}
        contentContainerStyle={globalStyles.homeContent}
        ListHeaderComponent={
          <Text style={globalStyles.homeTitle}>Lista de Alunos</Text>
        }
        renderItem={({item})=>(
          <TouchableOpacity 
            onPress={()=>navigation.navigate('Detalhe',{id:item.id})} 
            style={globalStyles.alunoCard}
          >
            <Text style={globalStyles.alunoCardText}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
} 
