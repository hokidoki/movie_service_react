import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import AddMovie from '../../component/movie/addMovie'

import {withRouter} from 'react-router-dom';
import ReactGA from 'react-ga';

class AddMoviePage extends Component {
    componentDidMount(){
        
        console.log(this.props.location);
        ReactGA.pageview(this.props.location.pathname + this.props.location.search)
    }
    render(){
        
        return(
            <Grid centered>
                <Grid.Column mobile={16} tablet={12} computer={10}>
                     <AddMovie/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default withRouter(AddMoviePage);