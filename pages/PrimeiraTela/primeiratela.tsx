import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import logo from '../../assets/LarkPlayer.png'
import pesquisar from '../../assets/pesquisar.png'
import settings from '../../assets/settings.png'
import ordem from '../../assets/ordem.png'
import imgvideo from '../../assets/video.png'

const PrimeiraTela = () => {

    return (

        <View style={styles.container}>
            <View style={styles.navbar}>
                {/* nao preciso de pasta navbar pq so essa tela tem essa, a outra sera input */}
                <Image source={logo} style={styles.image} />
                <Text style={styles.title}>Lark Player</Text>
                <Image source={pesquisar} style={styles.pesquisar} />
                <Image source={ordem} style={styles.ordem} />
                <Image source={settings} style={styles.settings} />
            </View>


            <View style={styles.botoes}>

                <TouchableOpacity
                    onPress={() => alert('Login Realizado com sucesso!')}
                    style={styles.botaovideo}
                >
                    <Image source={imgvideo} style={styles.imgvideo} />
                    <Text> Vídeos </Text>
                </TouchableOpacity>




                <Text>|</Text>
                <TouchableOpacity
                    onPress={() => alert('Login Realizado com sucesso!')}
                    style={styles.btmusica}
                >
                    <Text> Músicas </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Login Realizado com sucesso!')}
                    style={styles.touchable}
                >
                    <Text style={styles.botao}> Playlists </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Login Realizado com sucesso!')}
                    style={styles.touchable}
                >
                    <Text style={styles.botao}> Pastas </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Login Realizado com sucesso!')}
                    style={styles.touchable}
                >
                    <Text style={styles.botao}> Artistas </Text>
                </TouchableOpacity>
            </View>


            <Text style={styles.subtitulo}> Musica Testando</Text>
        </View >

    )
}

export default PrimeiraTela;