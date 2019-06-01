import React, { Component } from 'react'
import { Grid, Form, Message,Loader} from 'semantic-ui-react'
import { connect } from 'react-redux';
import MovieForm from './MovieForm';
import { getUpdateMovie,initialMovieState,updateMovie } from '../../store/updateMovieReducer';


class UpdateMovie extends Component {
    
    constructor(props, context) {
        super(props, context);
     
        this.onUpdateMovie = this.onUpdateMovie.bind(this);
     }
    componentDidMount(){
        this.props.getMovie(this.props.movie_info);
        //이거 하려는데 map으로 스테이트를 받아야 하는데 
        
    }

    componentWillUnmount(){
        this.props.initialMovieState()
    }
    
    onUpdateMovie(){
        const { name, director, openedAt, description,image} = this.refs.updateForm.getValue();
        // 유효성검사 
        if (!name) {
            this.props.addMovieValidationFailed(new Error("영화명을 적어주세요"));
            return;
        }
        if (!director) {
            this.props.addMovieValidationFailed(new Error("감독을 적어주세요"));
            return;
        }
        if (!openedAt) {
            this.props.addMovieValidationFailed(new Error("개봉일자를 적어주세요"));
            return;
        }
        if (!description) {
            this.props.addMovieValidationFailed(new Error("설명을 적어주세요"));
            return;
        }

        const file = image ? image.file : null;

        // console.log( name, director, openedAt, description,image)
        updateMovie(name,director,openedAt,description,file);
    }
    render() {
        if(this.props.movie){
            const {error, isLoading} = this.props;
            const {name,openedAt,description,imageURL,director} = this.props.movie;
            return (
                <Form>
                    <MovieForm  name={name} director={director} openedAt={openedAt} description={description} image={imageURL} ref="updateForm"/>
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
                                <Form.Button loading={isLoading} onClick={this.onUpdateMovie} >수정 완료</Form.Button>
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
        getMovie : (id) => dispatch(getUpdateMovie(id)),
        initialMovieState : ()=>dispatch(initialMovieState()),
        updateMovie : (name,director,openedAt,description,file)=>dispatch(updateMovie(name,director,openedAt,description,file))

       }
    }


export default connect(mapStateToProps, mapDispatchToProps)(UpdateMovie)


