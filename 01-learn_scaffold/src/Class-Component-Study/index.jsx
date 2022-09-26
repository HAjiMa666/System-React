/*
 * @Author: czx
 * @Date: 2022-09-19 23:47:31
 * @LastEditTime: 2022-09-20 11:31:23
 * @LastEditors: czx
 * @Description:
 */
import React, { Component } from 'react'
import HelloWorld from './HelloWorld'

class ClassComponent extends Component {
  constructor() {
    console.log('1. 执行constructor方法')
    super()

    this.state = {
      info: 'Hello World',
    }
  }
  render() {
    console.log('2. 执行render方法')
    const { info } = this.state
    return (
      <>
        <h1>ClassComponent---{info}</h1>
        <HelloWorld name="曹志贤" />
      </>
    )
  }
}

export default ClassComponent
