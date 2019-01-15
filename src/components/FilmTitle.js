import React, {Component} from "react";

class FilmTitle extends Component{




  render(){

    return(
      <div className="film-title" href={this.props.children}>

      <a href={this.props.children}>
      <p>{this.props.author}</p>
      </a>

      </div>
    )
  }
}


export default FilmTitle;
