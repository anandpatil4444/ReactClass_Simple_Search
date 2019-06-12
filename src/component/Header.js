import React, {Component} from 'react'
class Header  extends Component {


    constructor(){
        super()
        
        this.state={
            title:'React App'
        }
    }


    inputChange(event){
        console.log(event.target.value);
    }
    render(){
        

        const mystyle={
            header:{
                background:'tomato'
            },
            logo:{
                color:'white',
                textAlign:'center',
                fontSize:'30px'
            },
            input:{
               
            }
        }
    return(
        <header style={mystyle.header}>
            <div style={mystyle.logo} onClick={()=> {console.log("clickk from logo")}} >{this.state.title}</div>
               <center> <input type="text" onChange={this.inputChange}/></center>
            <hr/>
        </header>
        )
    }
}
export default Header;