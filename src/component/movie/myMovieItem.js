import React, { Component,Fragment } from 'react'
import { Card,Button } from 'semantic-ui-react'
import MyModal from '.././modal/deleteModal';
import ModalPortal from '../../modal/modalPotal';

class MyMovieItem extends Component {
    static defaultProps ={
        imageUrl : '',
        name : '',
        opendAt : '',
        description : '',
        likeCnt : '',
        id : null,
        onDeleteClick : null,
        onUpdateClick: null,
        }

        state = {
            modal : false
        }
        movieDeleteModal = () =>{
            this.props.onDeleteClick(this.props.id);
            this.setState({
                modal : false
            })
        }

        handCloseModal = () =>{
            this.setState({
                modal : false
            })
        }
        onUpdate = ()=>{
            if(this.props.onUpdateClick && this.props.id){
                this.props.onUpdateClick(this.props.id);
            }
        }

        onDelete = ()=>{
            if(this.props.onDeleteClick && this.props.id){
                this.setState({
                    modal : true
                })
            }
        }
    render() {
        const {
            imageURL,
            name,
            opendAt,
            description,
            
        } = this.props;
        return (
            
            <Fragment>
            <Card fluid>
                <div style={{
                    height:300,
                    backgroundImage : `url(${imageURL})`,
                    backgroundPosition : 'center',
                    backgroundSize : "cover",
                    backgroundRepeat : "no-repeat"
                }}/>

                
                {/* <Image src={imageUrl} wrapped ui={false}/> */}
                    <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{opendAt}</span>
                    </Card.Meta>
                    <Card.Description>
                        {description}
                    </Card.Description>
                <Card.Content extra>
                <Button onClick={this.onUpdate}>수정하기</Button>
                <Button onClick={this.onDelete}>삭제하기</Button>
                </Card.Content>
            </Card>
            {this.state.modal ? <ModalPortal>
                <MyModal delete={this.movieDeleteModal} onClose={this.handCloseModal}></MyModal> 
                </ModalPortal>: null}

            </Fragment>
        )
    }
}

export default MyMovieItem;