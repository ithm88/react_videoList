
import React,{Component} from 'react';
//引入组件
import Home from '../home/Home'
import Me from '../me/Me'
import Search from '../search/Search'
import ShopCart from '../shopcart/ShopCart'
//拷入图标组件
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView, 
  View,
  Text,
  StatusBar,
} from 'react-native';

//盗图Tabbar 相关的组件
import TabNavigator from 'react-native-tab-navigator';



class Tabbar extends Component{
constructor(props){
  super(props)
}

state = {
  selectedTab:'home' //选中的tab栏名称
}

  render(){
    return(
      <View style={styles.container}>
       <TabNavigator>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'home'}
    title="主页" //标识tabbar 上展示的内容
    renderIcon={() => <Icon name="home" size={25} color="gray"  />}  
    renderSelectedIcon={() => <Icon name="home" size={25} color="#0079FF"  />}
    badgeText="1"
    onPress={() => this.setState({ selectedTab: 'home' })}
    >
    <Home></Home>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'search'}
    title="搜索"
    renderIcon={() => <Icon name="search" size={25} color="gray"  />}
    renderSelectedIcon={() => <Icon name="search" size={25} color="#0079FF"  />}
    onPress={() => this.setState({ selectedTab: 'search' })}
    >
    <Search></Search>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'shopCart'}
    title="购物车"

    renderIcon={() => <Icon name="shopping-cart" size={25} color="gray"  />}
    renderSelectedIcon={() => <Icon name="shopping-cart" size={25} color="#0079FF"  />}
    onPress={() => this.setState({ selectedTab: 'shopCart' })}
    >
    <ShopCart></ShopCart>
  </TabNavigator.Item>
  <TabNavigator.Item
    selected={this.state.selectedTab === 'me'}
    title="我的"
    badgeText="0"
    renderIcon={() => <Icon name="user" size={25} color="gray"  />}
    renderSelectedIcon={() => <Icon name="user" size={25} color="#0079FF"  />}
    onPress={() => this.setState({ selectedTab: 'me' })}
    >
    <Me></Me>
  </TabNavigator.Item>
</TabNavigator>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
});

export default Tabbar

// 不推荐使用npm 下载包,首先: 下载速度慢,其次如果是npm 5.x 在装包的时候,会把一些老包删除
// 推荐使用facebook 开发的yarn 来安装包 yarn add 