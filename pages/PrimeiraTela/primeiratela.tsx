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
import djonga from '../../assets/Demoroadormir.jpg'
import volta from '../../assets/volta.jpg'
import voltacp from '../../assets/voltacp.avif'
import infinito from '../../assets/infinito.png'
import insista from '../../assets/insista.jpg'
import bb from '../../assets/bb.jpeg'
import lud from '../../assets/lud.jpg'
import skip from '../../assets/skip.webp'
import play from '../../assets/play.jpg'

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
                    <Text style={styles.artista}>|LETRA| O Terno - {'<atrás/além>'}</Text>
                    {/* tive q colocar dentro das chaves p ele reconhecer como text e nao como uma tag */}
                </View>
            </View>

            <View style={styles.musica}>
                <Image source={djonga} style={styles.capa} />
                <View style={styles.info}>
                    <Text style={styles.titulomusica}>DEMORO A DORMIR</Text>
                    <Text style={styles.artista}>Djonga, Milton Nascimento, Coyote Beatz - Quanto Mais Eu Como...</Text>
                </View>
            </View>

            <View style={styles.musica}>
                <Image source={infinito} style={styles.capa} />
                <View style={styles.info}>
                    <Text style={styles.titulomusica}>Infinito Particular</Text>
                    <Text style={styles.artista}>Marisa Monte</Text>
                </View>
            </View>

            <View style={styles.musica}>
                <Image source={insista} style={styles.capa} />
                <View style={styles.info}>
                    <Text style={styles.titulomusica}>Insista em Mim</Text>
                    <Text style={styles.artista}>|LETRA| Ana Frango Elétrico - Insista em Mim</Text>
                </View>
            </View>

            <View style={styles.musica}>
                <Image source={lud} style={styles.capa} />
                <View style={styles.info}>
                    <Text style={styles.titulomusica}>Paraíso</Text>
                    <Text style={styles.artista}>|LETRA| LUDMILLA - Paraíso</Text>
                </View>
            </View>

            <View style={styles.musica}>
                <Image source={bb} style={styles.capa} />
                <View style={styles.info}>
                    <Text style={styles.titulomusica}>Tim Bernardes - BB (Garupa de Moto Amarela)</Text>
                    <Text style={styles.artista}>Tim Bernardes</Text>
                </View>
            </View>

            <View style={styles.musica}>
                <Image source={volta} style={styles.capa} />
                <View style={styles.info}>
                    <Text style={styles.subtitulo}>Volta</Text>
                    <Text style={styles.artista}>|LETRA| O Terno - Melhor do Que Parece</Text>
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

export default PrimeiraTela;