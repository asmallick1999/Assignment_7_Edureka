import React, { Component } from 'react'
import "../Styles/quickSearch.css"

import MealType from './MealType';

export default class QuickSearch extends Component {
    constructor(){
        super();
        this.state={
            mealType:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:4500/mealType',{method:'GET'})
        .then(Response=>Response.json())
        .then(data=>this.setState({mealType:data.data}))
    }
  render() {
    let mealTypeList = this.state.mealType.length && this.state.mealType.map(item=><MealType item={item} key={item.name}/>)
    return (
        <section className="container-fluide">
        <h2>Quick Searches</h2>
        <p>Discover restaurants by type of meal</p>

        {/* <!-------------------- Quick Search Items ------------------> */}

        <div className="container-menu">

            {/* <!---------- Items ----------> */}
            <div className="container-menu-items row">

                {mealTypeList} 
                
            </div>

        </div>
    </section>
    )
  }
}
