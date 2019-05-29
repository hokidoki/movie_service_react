import React, { Component } from 'react'
import { Grid, Form, Message} from 'semantic-ui-react'
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
            const {name,opendAt,description,imageURL} = this.props.movie;
            console.log(name);
            return (
                <Form>
                    <MovieForm ref="form" />
                    <Grid>
                        <Grid.Row centered>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                {
                                    error ? <Message content={error} /> : null
                                }
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                <Form.Button loading={isLoading} onClick={this.onAddMovie}>수정 완료</Form.Button>
                                <Form.Button loading={isLoading} onClick={this.test}>돌아 가기</Form.Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form >
            )
        }else{
            const {error, isLoading} = this.props;
            console.log(this.props);
            return (
                <Form>
                    <MovieForm ref="form"/>
                    <Grid>
                        <Grid.Row centered>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                {
                                    error ? <Message content={error} /> : null
                                }
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column mobile={16} tablet={8} computer={8}>
                                <Form.Button loading={isLoading} onClick={this.onAddMovie}>수정 완료</Form.Button>
                                <Form.Button loading={isLoading} onClick={this.test}>돌아 가기</Form.Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Form >
            )
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


