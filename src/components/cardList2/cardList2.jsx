import { useEffect, useState } from "react";
import superagent from 'superagent';
import { Grid } from "@mui/material";
import Header from "../header/header";
function CardList2() {
    const [movies,setMovies] = useState([]);
    const fitchMovies = () => {
        superagent.get(`https://api.themoviedb.org/3/discover/movie?api_key=83ec22411e40b2fa6ecdbe268a523d4c&sort_by=popularity.desc`)
        .then((res) => {
          const result = res.body.results;
          const moviesData = result.map((item) => {
            return item;
          })
          setMovies(moviesData);
        })
      }
      fitchMovies();
      useEffect(() => {
         
    },[movies]);
      return(
          <>
           <Header/>
          <Grid container spacing={2}  style={{"paddingTop":"5%", "paddingLeft":"1.5%"}}>
          { movies.map(items=>{
             return(
                 <>
                 <Grid  item xs={3}>
                 <Grid  >
           <h1>Title:{items.title}</h1>
         {items.poster_path? <img src={`https://image.tmdb.org/t/p//w500//${items.poster_path}`} style={{'width':"100px"}}></img> :
         <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Movies_Coverart.jpg/220px-The_Movies_Coverart.jpg"></img>} 

           <p>Release Date:{items.release_date}</p>
           <p>Vote :{items.vote_average}</p>
           <p>Genre :{items.genre_ids}</p>
           </Grid>
</Grid>
           </>
                  )         })} 
                  </Grid>
          </>
      )
}
export default CardList2;