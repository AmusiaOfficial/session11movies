import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.loadMovies();
  }

  loadMovies() {
    // go grab (aka get) all the data from some url
    const url = "https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";
    axios.get(url)
      .then(response =>
      {
        // then put just the movies (not everything) into the state
        console.log(response.data.results)
        this.setState({movies: response.data.results});
      });

  }
  render() {
    // let movies = [];
    // for(let i = 0; i < this.state.movies.length; i++)
    // {
    //   movies.push(<h2>{this.state.movies[i].title}</h2>)
    // }
      const imagePath = "https://image.tmdb.org/t/p/w500";
    return (
      
        <div className="App">
          <img className="background" src="https://i.pinimg.com/originals/d4/b3/e3/d4b3e3e114a251ed9d7d53e652210e25.jpg"/>
          <div className="Block">
          <h1>Check out these movies!!!!!!</h1>
          <h4>Hover over posters for movie overviews.</h4>
          {this.state.movies.map(movie =>
            {
            
              return <h2 className="tooltip"><img className="Image" src={imagePath + movie.poster_path}/><br></br>{movie.title} ({movie.vote_average + "/10"})<br/><span className="tooltiptext">{movie.overview}</span></h2>;
              

              // return <div>
              //   <img className="Image" src={imagePath + movie.poster_path}/>

              // </div>
            })}
            </div>
        </div>
      
    );
  } 
}

export default App;
