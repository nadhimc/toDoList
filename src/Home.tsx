import React from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    TouchableOpacity
  } from 'react-native';

const Home = () =>{
    return(
        <View style={{backgroundColor:'#f5f6fb', flexGrow:1, justifyContent:'flex-start'}}>
            <View style={styles.header}>
                <Text style={{...styles.text,flexGrow:1, fontSize: 16, fontWeight: "bold"}}>Hai, Nadhim</Text>
                <Image style={styles.userLogo} source={{uri:"https://img.icons8.com/ios-filled/50/000000/user-male-circle.png"}} />
            </View>
            <TouchableOpacity style={styles.addIcon} onPress={()=>console.log('pressed')}>
                <Text style={{textAlign:"center",position:'absolute', flex: 1, color: 'white', fontSize: 38}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text:{
        color : "#504b8c"
    },
    header:{
        padding: 20,
        flexDirection: 'row',
        alignItems: "center"
    },
    userLogo: {
        width: 32,
        height: 32,
    },
    addIcon: {
        width: 50,
        height: 50,
        position: "absolute",
        bottom : 20,
        right : 20,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4044c9'
    }
  });

export default Home