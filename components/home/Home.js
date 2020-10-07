import React,{Component} from 'react'

import {View,Text,StyleSheet,Image,TouchableHighlight} from 'react-native'

//Actions 表示要进行路由的js操作了,可以跳转到新路由
import {Actions} from 'react-native-router-flux'
//引入轮播图
import Swiper from 'react-native-swiper'

export default class Home extends Component{

    constructor(props){
        super(props)
    }
    state = {
        swiperList:[], //轮播图
    }

    //组件挂在前发请求
    componentWillMount(){
        fetch("http://115.29.148.10:8989/swiperList")
        .then(res=> res.json())
        .then(data=>{
            console.warn(JSON.stringify(data,null,' '))
            this.setState({
              swiperList:data
            })
        })
    }
    render(){``
        return <View>
            {/* 轮播图的结构 */}
            <View style={{height:220}}>
            <Swiper style={styles.wrapper} 
            autoplay={true}
            loop={true}
            showsButtons={true}>


                {this.state.swiperList.map((v,i)=>{
                  return <View key={i}>
                    <Image source={{uri: v.image_src}} style={{width:'100%',height:'100%'}}></Image>
                  </View>
                })}


            </Swiper>
            </View>

              {/* 产品列表区域,在rn中默认就已经使用盒模型了 */}
              <View style={{flexDirection: 'row',flexWrap:'wrap'}}>
                <View style={styles.box}>
                  <Image source={require('../../images/menu1.png')} style={{width:60,height:60}}></Image>
                  <Text>新闻资讯</Text>
                </View>

                <View style={styles.box}>
                  <Image source={require('../../images/menu2.png')} style={{width:60,height:60}}></Image>
                  <Text>图片分享</Text>
                </View>

                <View style={styles.box}>
                  <Image source={require('../../images/menu3.png')} style={{width:60,height:60}}></Image>
                  <Text>商品购买</Text>
                </View>

                <View style={styles.box}>
                  <Image source={require('../../images/menu4.png')} style={{width:60,height:60}}></Image>
                  <Text>留言反馈</Text>
                </View>

                <TouchableHighlight onPress={this.goMovieList} underlayColor="white" style={styles.box}>
                  {/* 在TouchableHighlight 内部,只能放置唯一一个元素 */}
                <View>
                  <Image source={require('../../images/menu5.png')} style={{width:60,height:60}}></Image>
                  <Text>热映电影</Text>
                </View>
                </TouchableHighlight>

                <View style={styles.box}>
                  <Image source={require('../../images/menu6.png')} style={{width:60,height:60}}></Image>
                  <Text>联系我们</Text>
                </View>

              </View>
        </View>
    }

    //去电影列表页面
    goMovieList = ()=>{
      console.warn("来了")
      //需要使用编程式,加入小括号可以传参
      //相比react.js this.props.history.push
      Actions.movieList({id:10})
    }
}

//轮播图样式

const styles = StyleSheet.create({
    box:{
      width:'33.33%',
      alignItems:'center',
      marginTop:15
    }
  })
  //轮播图接口
  //http://115.29.148.10:8989/swiperList