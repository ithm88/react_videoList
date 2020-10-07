import RNLocation from 'react-native-location';

import React,{Component} from 'react'

import {View,Text} from 'react-native'

export default class Search extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }

    componentWillMount(){
        // console.warn("哈哈哈")

        RNLocation.configure({
            distanceFilter: 5.0
        })
        RNLocation.requestPermission({
            ios: "whenInUse",
            android: {
              detail: "coarse"
            }
          }).then(granted => {
              if (granted) {
                this.locationSubscription = RNLocation.subscribeToLocationUpdates(locations => {
                    console.warn(this.locationSubscription)


                  /* Example location returned
                  {
                    speed: -1,
                    longitude: -0.1337,
                    latitude: 51.50998,
                    accuracy: 5,
                    heading: -1,
                    altitude: 0,
                    altitudeAccuracy: -1
                    floor: 0
                    timestamp: 1446007304457.029
                  }
                  */
                })
              }
            })

    }

    render(){
        return <View>
            <Text>这是搜索框</Text>
        </View>
    }
}