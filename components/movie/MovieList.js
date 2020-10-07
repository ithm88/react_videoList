import React, {Component} from 'react'
import {View,Image,Text,ActivityIndicator,FlatList, StyleSheet,TouchableHighlight} from 'react-native'



export default class MonvieList extends Component{
    constructor(props){
        super(props)
    }

    state = {
        movies:[], //电影列表
        nowPage: 1, //当前的页码
        totalpage:0, //总页数
        pageSize:15, //每页显示的记录条数
        isloading:true //是否正在加载数据
    }

    componentWillMount(){
        this.getMoviesByPage()
        this.gethubList()
    }
    render(){
        return <View>
            {this.renderList()}
        </View>
    }

    //根据页码获取电影列表
    getMoviesByPage = () => {
        const start = (this.state.nowPage -1) * this.state.pageSize //起始页
        //const url = `https://api.douban.com/v2/movie/in_theaters?start=${start}&count=${this.state.pageSize}`
        const url = `http://www.liulongbin.top:3005/api/v2/movie/in_theaters?start=${start}&count=${this.state.pageSize}`
        //http://www.liulongbin.top:3005/api/v2/movie/?start=${start}&count=${this.state.pageSize}')
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            //console.warn(data)
            //console.warn(data.subjects)
            //console.warn(Math.ceil(data.total / this.state.pageSize))
            console.warn(data.subjects.length)
            this.setState({
                isloading:false,
                movies:data.subjects,
                totalPage: Math.ceil(data.total / this.state.pageSize)
            })
            
        })
    }
    
    //测试用的
    gethubList= ()=>{
        const newListUrl =  "http://v.juhe.cn/toutiao/index?type=%E5%A4%B4%E6%9D%A1&key=bc832488834738f5c2dd34054a86a18c"
        fetch(newListUrl)
        .then(res=>res.json())
        .then(data=>{
            //console.warn(data)
            
        })
    }
    

    //渲染电影列表的方法
    renderList = ()=>{
        if(this.state.isloading){
            return <ActivityIndicator size="large"></ActivityIndicator>
        }
        return <View>
            <Text>{this.state.movies.length}</Text>
            <Text>嘻嘻嘻</Text>
        </View>
    }
}