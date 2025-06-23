import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';
import voltacp from '../../assets/voltacp.avif'
import skip from '../../assets/skip.webp'
import play from '../../assets/play.jpg'
import pesquisar from '../../assets/pesquisar.png'
import seta from '../../assets/seta.png'
import lixeira from '../../assets/lixeira.png'
import info from '../../assets/info.png'
import youtube from '../../assets/Youtube_logo.png'
import instagram from '../../assets/Instagram_icon.png'
import facebook from '../../assets/Facebook_icon.avif'
import soundcloud from '../../assets/soundcloud.webp'
import twitter from '../../assets/twittericon.avif'

const SegundaTela = () => {
  return (
    <View style={styles.container}>
      <View style={styles.barrapesquisa} >

        <Image source={seta} style={styles.seta} />
        <TextInput style={styles.input} placeholder="Procurar minhas músicas & vídeos" />
        <Image source={pesquisar} style={styles.pesquisar} />

      </View>

      <View style={styles.conteudo}>

        <View style={styles.secoes}>
          <Text style={styles.titulo}>Histórico</Text>
          <Image source={lixeira} style={styles.iconeslaterais} />
        </View>

        <View style={styles.ultimapesq}>

          <TouchableOpacity
            onPress={() => alert('Botão ultima pesquisa 1!')}
            style={styles.touchable}
          >
            <Text style={styles.nomepesquisa}>the boy is mine</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alert('Botão ultima pesquisa 2!')}
            style={styles.touchable}
          >
            <Text style={styles.nomepesquisa}>never lose me</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.secoes}>

          <Text style={styles.titulo}> Sites</Text>
          <Image source={info} style={styles.iconeslaterais} />
        </View>
        <View style={styles.sites}>
          <View style={styles.item}>
            <Image source={youtube} style={styles.redessociais} />
            <Text style={styles.nomeRede}>Youtube</Text>
          </View>
          <View style={styles.item}>
            <Image source={instagram} style={styles.redessociais} />
            <Text style={styles.nomeRede}>Instagram</Text>
          </View>
          <View style={styles.item}>
            <Image source={facebook} style={styles.redessociais} />
            <Text style={styles.nomeRede}>Facebook</Text>
          </View>
          <View style={styles.item}>
            <Image source={soundcloud} style={styles.redessociais} />
            <Text style={styles.nomeRede}>SoundCloud</Text>
          </View>
          <View style={styles.item}>
            <Image source={twitter} style={styles.redessociais} />
            <Text style={styles.nomeRede}>X</Text>
          </View>
        </View>

      </View>
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

    </View >
  )
}
export default SegundaTela;