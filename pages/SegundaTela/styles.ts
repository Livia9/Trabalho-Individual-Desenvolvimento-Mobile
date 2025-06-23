import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCDDF2',
        paddingTop: 60,
        // paddingHorizontal: 10
    },
    play: {
        width: 40,
        height: 40,
        margin: 10
    },
    tocando: {
        backgroundColor: '#FFF6D5',
        borderRadius: 20,
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10
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
    pesquisar: {
        width: 40,
        height: 30,
        marginRight: 10
    },
    input: {
        backgroundColor: "#F8BEE1",
        borderRadius: 20,
        width: 300
    },
    seta: {
        width: 50,
        height: 50
    },
    barrapesquisa: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconeslaterais: {
        width: 20,
        height: 20,
    },
    touchable: {
        backgroundColor: '#F8BEE1',
        padding: 8,
        borderRadius: 20,
        marginTop: 5,
        marginRight: 10
    },
    nomepesquisa: {
        color: '#6D4C64',
        fontSize: 12
    },
    ultimapesq: {
        flexDirection: 'row',
        marginTop: 10
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6D4C64'
    },
    conteudo: {
        paddingHorizontal: 10,
    },
    redessociais: {
        width: 40,
        height: 40,
        borderRadius: 60
    },
    sites: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        marginTop: 40,
        alignItems: 'center'
    },
    secoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50
    },
    nomeRede: {
        marginTop: 10,
        color: 'gray',
        fontSize: 12
    }

})