import React, { useEffect,useState } from 'react';
import {
    View, Text, Button
} from 'react-native'
import axios from "axios";
import { Header } from 'react-native-elements'

const home1 = ({ navigation }) => {
    const [data, setData] = useState({
        NewConfirmed: 100282,
        TotalConfirmed: 1162857,
        NewDeaths: 5658,
        TotalDeaths: 63263,
        NewRecovered: 15405,
        TotalRecovered: 230845
      })
    useEffect(() => {
        let getData = async () => {
            try {
                console.log("useeffect1")

                const res = await axios.get('https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1')
                setData(res.data.Global)
                console.log(res.data.Global)
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])
    return (
        <View>
            <Header
              leftComponent={{ icon: 'menu', color: '#fff', onPress:() => navigation.openDrawer()}}
              centerComponent={{ text: 'COVID -19', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }} backgroundColor="#7868e6"
            />
            
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around",marginBottom:80 }}>
                <View style={{ backgroundColor: "#51c2d5", height: 90, width: 90 , borderRadius:8}} >
                <Text>
                Total:
                    {data.NewConfirmed}
                    
                </Text>
                <Text>{data.TotalConfirmed}</Text>
                </View>
                <View style={{ backgroundColor: "#51c2d5", height: 90, width: 90, borderRadius:8 }} >
                <Text>
                Recovered
                    {data.NewRecovered}
                    
                </Text>
                <Text>{data.TotalRecovered}</Text>
                </View>
                <View style={{ backgroundColor: "#51c2d5", height: 90, width: 90, borderRadius:8 }} >
                <Text>
                Deaths:
                    {data.TotalDeaths} 
                </Text>
                <Text>+ {data.NewDeaths}</Text>
                </View>


            </View>

                <Text style={{marginLeft:10,marginBottom:15}}>Health Tips</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around",flexWrap:"wrap" }}>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                <View style={{ backgroundColor: "#7868e6", height: 100, width: 100,marginTop:10 }} ></View>
                </View>
        </View>
    );
};

export default home1;
