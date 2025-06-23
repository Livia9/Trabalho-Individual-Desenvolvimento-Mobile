import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import voltacp from '../../assets/voltacp.avif'
import skip from '../../assets/skip.webp'
import play from '../../assets/play.jpg'
import pesquisar from '../../assets/pesquisar.png'
import seta from '../../assets/seta.png'
import lixeira from '../../assets/lixeira.png'
import info from '../../assets/info.png'

const SegundaTela = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barrapesquisa} >

        <Image source={seta} style={styles.seta} />
        <TextInput style={styles.input} placeholder="Procurar minhas músicas & vídeos" />
        <Image source={pesquisar} style={styles.pesquisar} />

      </View>

      <Text style={styles.titulo}>Histórico</Text>
      <Image source={lixeira} style={styles.lixeira} />

      <View style={styles.ultimapesq}>
        <TouchableOpacity
          onPress={() => alert('Botão ultima pesquisa 1!')}
          style={styles.touchable}
        >
          <Text>the boy is mine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert('Botão ultima pesquisa 2!')}
          style={styles.touchable}
        >
          <Text>never lose me</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.titulo}> Sites</Text>
      <Image source={info} style={styles.lixeira} />

      {/* trocar nome style */}
      <Text>Youtube</Text>
      <Text>Instagram</Text>
      <Text>Facebook</Text>
      <Text>SoundCloud</Text>
      <Text>X</Text>

      <View style={styles.tocando}>
        <View style={styles.musica}>
          <Image source={voltacp} style={styles.capa} />
          <View style={styles.info}>
            <Text style={styles.titulomusica}>Volta</Text>
            <Text style={styles.artista}>O Terno</Text>
          </View>
          <Image source={play} style={styles.play} />
          <Image source={skip} style={styles.play} />
        </View>
      </View>

    </View>
  )
}
export default SegundaTela;