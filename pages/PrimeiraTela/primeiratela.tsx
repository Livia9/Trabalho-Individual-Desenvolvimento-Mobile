import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import logo from '../../assets/LarkPlayer.png'
import pesquisar from '../../assets/pesquisar.png'
import settings from '../../assets/settings.png'
import ordem from '../../assets/ordem.png'
import imgvideo from '../../assets/video.png'
import ariana from '../../assets/ariana.jpg'
import OTerno from '../../assets/OTerno.jpg'

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
                    onPress={() => alert('Botão video!')}
                    style={styles.botaovideo}
                >
                    <Image source={imgvideo} style={styles.imgvideo} />
                    <Text> Vídeos </Text>
                </TouchableOpacity>

                <Text>| </Text>
                <TouchableOpacity
                    onPress={() => alert('Botão músicas!')}
                    style={styles.btmusica}
                >
                    <Text style={{ color: 'white' }}> Músicas </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Botão playlists!')}
                    style={styles.touchable}
                >
                    <Text style={styles.botao}> Playlists </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Botão pastas!')}
                    style={styles.touchable}
                >
                    <Text style={styles.botao}> Pastas </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => alert('Botão artistas!')}
                    style={styles.touchable}
                >
                    <Text style={styles.botao}> Artistas </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.musica}>
                <Image source={ariana} style={styles.capa} />
                <View style={styles.info}>
                    <Text style={styles.titulomusica}>Ariana Grande - we can't be friends (wait for your love)</Text>
                    <Text style={styles.artista}>ArianaGrandeVevo</Text>
                </View>
            </View>

            <View style={styles.musica}>
                <Image source={OTerno} style={styles.capa} />
                <View style={styles.info}>
                    <Text style={styles.titulomusica}>Atrás/Além </Text>
                    <Text style={styles.artista}> |LETRA| O Terno - {'<atrás/além>'}</Text>
                    {/* tive q colocar dentro das chaves p ele reconhecer como text e nao como uma tag */}
                </View>
            </View>

            <Text style={styles.subtitulo}> Musica Testando</Text>
        </View >
    )
}

export default PrimeiraTela;