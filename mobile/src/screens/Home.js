import React, {useEffect, useState} from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function Home({navigation}) {
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    axios.get('http://localhost:3001/alunos').then(r=>setAlunos(r.data)).catch(()=>{}).finally(()=>setLoading(false))
  },[])

  if(loading) return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><ActivityIndicator/></View>

  return (
    <View style={{flex:1, padding:20, backgroundColor:'#fff0f6'}}>
      <Text style={{fontSize:22, color:'#cc2b75', marginBottom:12}}>Lista de Alunos</Text>
      <FlatList data={alunos} keyExtractor={i=>String(i.id)}
        renderItem={({item})=>(
          <TouchableOpacity onPress={()=>navigation.navigate('Detalhe',{id:item.id})} style={{padding:12, backgroundColor:'#ffd6e8', marginBottom:10, borderRadius:8}}>
            <Text style={{fontSize:16}}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
