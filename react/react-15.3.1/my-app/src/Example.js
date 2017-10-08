import React, { Component } from 'react';
    class Example extends Component{
    render(){
          var myStyle = {
              fontSize:100,
              color:'#FF0000'
          }

          var arr = [<h1>数组元素1</h1>,<h2>数组元素2</h2>]

        return(
            <div className="Example">
                <h1 style={myStyle}>这是div root</h1>
                <h1>{arr}</h1>
                <h1></h1>
            </div>
        );
    }
}
    
   
export default Example;