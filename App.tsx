import React from "react";
import { View, Text, Image, Button } from 'react-native';
import { styles } from './styles';
import logo from './assets/LarkPlayer.png'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        {/* nao preciso de pasta navbar pq so essa tela tem essa, a outra sera input */}
        <Image source={logo} style={styles.image} />
        <Text style={styles.title}>Lark Player</Text>
        <Button
          title="Clique aqui"
          onPress={() => alert('Você clicou!')}
        />
        <Text style={styles.subtitulo}> Musica Testando</Text>

      </View>
      <Button
        title="Clique aqui"
        onPress={() => alert('Você clicou!')}
      />
      <Text style={styles.subtitulo}> Musica Testando</Text>
    </View >
  );
}
export default App;