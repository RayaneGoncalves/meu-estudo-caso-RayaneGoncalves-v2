import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

export default function Detalhe({route}) {
  const { id } = route.params;
  const [aluno, setAluno] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost:3001/alunos/'+id).then(r=>setAluno(r.data)).catch(()=>{});
  },[id]);

  if(!aluno) return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}><Text>Carregando...</Text></View>

  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center', backgroundColor:'#ffd6e8'}}>
      <Text style={{fontSize:22, color:'#cc2b75'}}>{aluno.nome}</Text>
      <Text>ID: {aluno.id}</Text>
    </View>
  );
}
