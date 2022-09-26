/*
 * @Author: czx
 * @Date: 2022-09-20 11:30:45
 * @LastEditTime: 2022-09-26 14:18:58
 * @LastEditors: czx
 * @Description:
 */
import React, { Component } from 'react'
import proTypes from 'prop-types'

export default class HelloWorld extends Component {
  constructor(props) {
    //TODO 显示保存props 供下面的render函数使用
    //: 但是如果不加这个 React这个也会自动保存props
    super(props)

    this.state = {}
  }
  render() {
    return <div>HelloWorld-{this.props.name} </div>
  }
}

HelloWorld.propTypes = {
  name: proTypes.object,
}
