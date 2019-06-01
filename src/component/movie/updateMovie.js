import React, { Component } from 'react'
import { Grid, Form, Message,Loader} from 'semantic-ui-react'
import { connect } from 'react-redux';
import MovieForm from './MovieForm';
import { getUpdateMovie } from '../../store/updateMovieReducer';


class UpdateMovie extends Component {

    componentDidMount(){
        this.props.getMovie(this.props.movie_info);
        //이거 하려는데 map으로 스테이트를 받아야 하는데 
    }
    
    
    render() {
        if(this.props.movie){
            const {error, isLoading} = this.props;
            const {name,openedAt,description,imageURL,director} = this.props.movie;
            console.log(this.props.movie);
            
            return (
                <Form>
                    <MovieForm ref="form" name={name} director={director} openedAt={openedAt} description={description} image={imageURL}/>
                    <Grid>
                        <Grid.Row centered>
                            <Grid.Column mobile={16} tablet={10} computer={10}>
                                {
                                    error ? <Message content={error} /> : null
                                }
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column mobile={16} tablet={10} computer={10}>
                                <Form.Button loading={isLoading} onClick={this.onAddMovie} >수정 완료</Form.Button>
                                <Form.Button loading={isLoading} onClick={this.test} >돌아 가기</Form.Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form >
            )
        }else{
            return <Loader active style={{margin : 16}}/>
        }
    }
}


const mapStateToProps = (state) => {
    return {
        // description : state.updateMovie.doc.description,
        // director : state.updateMovie.doc.director,
        // imageURL : state.updateMovie.doc.imageURL,
        // openedAt : state.updateMovie.doc.openedAt,
        movie : state.updateMovie.doc
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovie : (id) => dispatch(getUpdateMovie(id))
       }
    }


export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovie)


