import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCDDF2',
        paddingTop: 60,
        paddingHorizontal: 30
    },
    navbar: {
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'space-between',
        alignItems: 'stretch',

    },
    title: {
        color: '#000',
        fontSize: 35,
        fontWeight: 'bold'
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
        width: 30,
        height: 30
    },
    ordem: {
        width: 30,
        height: 30
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
        color: 'white',
        padding: 8,
        borderRadius: 20,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 5
    },
    botaovideo: {
        padding: 6,
        borderRadius: 20,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgvideo: {
        width: 20,
        height: 20,
        marginRight: 8
    }


})