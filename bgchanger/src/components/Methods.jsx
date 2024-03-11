
import React from "react";

class Methods extends React.Component{

    constructor (props) {
        console.log("inside Constructor...");
        super(props);
        this.state = {
            // products : []
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("inside getDerivedFromProps...");
       console.log("Props", props);
       console.log("State", state);
       
        return {
            fname: "Rahil"
        }
    }
    componentDidMount (){
        console.log("inside componentDidMount");
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=> this.setState({
        //         products : json
        //     }))
    }
    render (){
        console.log("inside Render....");
        // console.log(this.state.products);
        return (
            <>
            {/* <div >{this.state.fname}</div> */}
            </>
        );
    }
}

export default Methods;