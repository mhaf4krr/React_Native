import React,{useState,useE} from 'react'
import { View, Text } from 'react-native'
import SearchBar from "../components/SearchBar"

import useResults from "../hooks/useResults"

export default function HomeScreen() {

    let [search,setSearch] = useState("")
    
    let [results,searchApi] = useResults()
    return (
        <View>
            <SearchBar handleSubmit={(term)=>{
                setSearch(term)
                searchApi(search)
            }}/>

            <Text> {results.length} </Text>
        </View>
    )
}
