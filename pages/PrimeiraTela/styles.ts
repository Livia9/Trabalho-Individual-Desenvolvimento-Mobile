import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCDDF2',
        paddingTop: 60,
        paddingHorizontal: 10
    },
    navbar: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 38,
        fontWeight: 'bold',
        marginRight: 50
    },
    image: {
        width: 50,
        height: 50
    },
    subtitulo: {
        color: '#FF00FF',
        fontWeight: 'bold',
    },
    pesquisar: {
        width: 40,
        height: 30,
        marginRight: 10
    },
    ordem: {
        width: 40,
        height: 30,
        marginRight: 10
    },
    settings: {
        width: 30,
        height: 30
    },
    botoes: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    botao: {
        color: 'black'

    },
    touchable: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 20,
        marginTop: 5,
        marginRight: 10
    },
    btmusica: {
        backgroundColor: '#FF00FF',
        padding: 8,
        borderRadius: 20,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 5
    },
    botaovideo: {
        padding: 6,
        borderRadius: 25,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgvideo: {
        width: 20,
        height: 20,
        marginRight: 8
    },
    musica: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    capa: {
        width: 60,
        height: 60,
        borderRadius: 15,
        marginRight: 10,
    },
    info: {
        flex: 1
    },
    titulomusica: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black'
    },
    artista: {
        fontSize: 12,
        color: 'gray'
    },
    play: {
        width: 40,
        height: 40,
        margin: 10
    },
    tocando: {
        backgroundColor: '#FFF6D5',
        borderRadius: 20,
        flex: 1
    }

})