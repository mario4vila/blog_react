import React, {Component} from "react";
import Greeting from "./Greeting";
class Movies extends Component {
    render (){
        return(
            <div>
                <h4>soy el componente de pelicuñas</h4>
                <Greeting/>
            </div>
        )
    }
}

export default Movies;