// create your App component here
import React from 'react'

export default class App extends React.Component{

    constructor(){
        super()
        this.state ={
           peopleInSpace: [] 
        }
    }

    render(){
        return (
            <div>
                app
                </div>
        )
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(peeps => this.setState({peopleInSpace: peeps.people}))

    }



}