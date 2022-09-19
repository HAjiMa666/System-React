/*
 * @Author: czx
 * @Date: 2022-09-19 23:47:31
 * @LastEditTime: 2022-09-19 23:53:44
 * @LastEditors: czx
 * @Description:
 */
import React, { Component } from 'react'

class ClassComponent extends Component {
  constructor() {
    super()

    this.state = {
      info: 'Hello World',
    }
  }
  render() {
    const { info } = this.state
    return (
      <>
        <h1>ClassComponent---{info}</h1>
      </>
    )
  }
}

export default ClassComponent
