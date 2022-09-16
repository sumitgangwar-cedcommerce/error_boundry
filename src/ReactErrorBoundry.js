import React, { Component } from 'react'

export class ReactErrorBoundry extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        hasError : false
      }
    }

    // componentDidCatch(error , errorInfo){
    //   console.log(error , errorInfo )
    // }

    static getDerivedStateFromError(error){
        return{
            hasError : error.message
        }
    }

    

  render() {
      if(this.state.hasError){
        return <h1 style={{color:'red'}} >{this.state.hasError}</h1>
      }
      return this.props.children
  }
}

export default ReactErrorBoundry