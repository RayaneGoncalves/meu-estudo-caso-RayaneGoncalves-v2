import React, {useEffect, useState} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import api from '../Api';
import { globalStyles, colors } from '../styles';

export default function Detalhe({route}) {
  const { id } = route.params;
  const [aluno, setAluno] = useState(null);

  useEffect(()=>{
    api.get('/alunos/'+id)
      .then(r=>setAluno(r.data))
      .catch(()=>{});
  },[id]);

  if(!aluno) {
    return (
      <View style={globalStyles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <View style={globalStyles.detalheContainer}>
      <View style={globalStyles.detalheCard}>
        <Text style={globalStyles.detalheName}>{aluno.nome}</Text>
        <Text style={globalStyles.detalheId}>ID: {aluno.id}</Text>
      </View>
    </View>
  );
}
