import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'
import Cart from './components/shopcart/ShopCart'
import Tabbar from './components/tabbars/Ttabbar'
import MovieList from './components/movie/MovieList'
//引入路由
import { Router, Stack, Scene } from 'react-native-router-flux'
export default class extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
         return <Router sceneStyle={{ backgroundColor: 'white' }}>
          <Stack key="root">
            {/* 配置路由规则 */}
            {/* 注意，所有的路由规则，都应该写到这个位置 */}
            {/* 第一个 Scene 就是默认要展示的首页 */}
            {/* key 属性，表示路由的规则名称，将来可以使用这个 key ，进行编程式导航，每一个路由规则，都应该提供一个 唯一的key， key不能重复 */}
            <Scene key="tabbar" component={Tabbar} title=""hideNavBar={true}/>
           
            <Scene key="movieList" component={MovieList} title="热映电影列表"></Scene>
            {/* 电影列表的路由规则 */}
          </Stack>
        </Router>
        // return <Tabbar></Tabbar>
        // return <Text>哈哈哈</Text>
    }
}