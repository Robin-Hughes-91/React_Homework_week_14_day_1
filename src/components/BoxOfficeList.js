import React, {Component} from "react";
import FilmTitle from "./FilmTitle"
import UpComingReleases from "./UpComingReleases"



class BoxOfficeList extends Component{
  render(){


    const filmTitleNodes = this.props.data.map(filmTitle => {
      return(
        <FilmTitle author={filmTitle.name} key={filmTitle.id}>{filmTitle.url}</FilmTitle>
      )
    });

    return(

    <>

    <div className="box-office-list">
    {filmTitleNodes}
    </div>
    <div className="new-releases-link">
    <UpComingReleases/>
    </div>

    </>


  )};
};


export default BoxOfficeList;
