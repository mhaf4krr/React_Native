import React,{useState} from 'react'
import { View, TextInput , StyleSheet} from 'react-native'
import {Feather} from "@expo/vector-icons"

/* Handle Overflow text by adjusting margin and padding */

export default function SearchBar({handleSubmit}) {

    let [search,setSearch] = useState("")

    return (
        <View style={styles.background}>
            <Feather style={styles.iconStyle} size={32} name="search"/>
            <TextInput onChangeText={(text)=>setSearch(text)} value={search} 
        
            onEndEditing={()=>{
                handleSubmit(search)
            }}
            
            autoCorrect={false} style={styles.inputStyle} placeholder="Seach for Rest..asdsad"/>
        </View>
    )
}


let styles = StyleSheet.create({
    background:{
        backgroundColor:"gray",
        height:50,
        borderRadius:10,
        margin:15,
        flexDirection:"row",
        overflow:"hidden",
       
        
    },
    inputStyle:{
      
        fontSize:18,
   
        marginHorizontal:10,
        marginLeft:-35,
        paddingHorizontal:45
     
     
    }
    ,
    iconStyle:{
        alignSelf:"center",
        padding:7
    }
})