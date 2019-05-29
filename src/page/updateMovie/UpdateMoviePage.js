import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import UpdateMovie from '../../component/movie/updateMovie'
// import {getUpdateMovie} from '../../store/updateMovieReducer'
// import {connect} from 'react-redux';

class UpdateMoviePage extends Component {

     
    componentDidMount(){
       
    }
    
    
    render(){
        const movie = this.props.match.params.movieId;
        return(
            <Grid centered>
                <Grid.Column mobile={16} tablet={12} computer={10}>
                     <UpdateMovie movie_info={movie}/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default withRouter(UpdateMoviePage);