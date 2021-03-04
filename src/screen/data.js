import React, { useEffect, useState } from 'react';
import {
    View, Text, ScrollView
} from 'react-native'
import axios from "axios";
import { DataTable } from "react-native-paper";
import { Header } from 'react-native-elements'
const data = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        let getData = async () => {
            try {
                console.log("useeffect1")

                const res = await axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')
                setData(res.data.Countries)
                // console.log(res.data.Countries)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])


    return (
        <ScrollView>
            <View style={{ display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor: "#7868e6", height: 80, width: "100%" }} >
                <Text style={{textAlign:"center"}}>
                LIVE UPDATE
                </Text>
                </View>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Region</DataTable.Title>
                    <DataTable.Title numeric>New Confirm</DataTable.Title>
                    <DataTable.Title numeric>Total</DataTable.Title>
                    <DataTable.Title numeric>Recover</DataTable.Title>
                    <DataTable.Title numeric>Deaths</DataTable.Title>
                </DataTable.Header>
                {data.map((item, index) => {
                    if (index == 0) return
                    return (
                        <DataTable.Row key={index}>
                            <DataTable.Cell>{item.Country}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.NewConfirmed}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalConfirmed}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalRecovered}</DataTable.Cell>
                            <DataTable.Cell numeric>{item.TotalDeaths}</DataTable.Cell>
                        </DataTable.Row>
                    )
                })}

              
            </DataTable>
        </ScrollView>
    );
};

export default data;
