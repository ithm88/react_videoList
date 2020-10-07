import React,{Component} from 'react';
import Tabbar from './components/tabbars/Ttabbar'
import Texts from './Texts'
import Main from './Main'
import {View} from 'react-native'
export default class App extends Component{
constructor(props){
  super(props)
}
state = {
  
}

  render(){
    return(
      <>
      <Main></Main>
      </>
    )
  }
  
}





// 不推荐使用npm 下载包,首先: 下载速度慢,其次如果是npm 5.x 在装包的时候,会把一些老包删除
// 推荐使用facebook 开发的yarn 来安装包 yarn add 