import React , {Component} from 'react';
import './Babita.css';
import Babitalist from './Babitalist';
import 'tachyons';


 class Babita extends Component{
     constructor(){
         super();
        this.state ={
            name: "welcome to ravinder word"
        }
    
 }
 namechange (){
     this.setState({
         name : "subscribe to thapatechical channel"
     })
 }


     render(){

        const babitalistarray =[
            {
                id:1,
                name: "Ravinder",
                work: "web developer"
            },
            {
                id:2,
                name: "Renu",
                work: "web developer"
            },
            {
                id:3,
                name: "Promila",
                work: "web developer"
            },
            {
                id:4,
                name: "Manisha",
                work: "web developer"
            }
        ]
    
       const arraybabitacard =  babitalistarray.map( (babitacard,i) => {
            return <Babitalist key ={i} id={babitalistarray[i].name}
                               name={babitalistarray[i].name}
                               work={babitalistarray[i].work}/>
    
        })

        return(<div className="mainpage">
        <h1> {this.state.name} </h1>
     {arraybabitacard}<br></br>
    <button onClick=  { () => this.namechange() }>Subcribe</button>
    </div>
    )

     }
 }

export default Babita;