import React, {Component} from 'react';
import FormHeader from './FormHeader';
import AudioPlayer from './AudioPlayer';
import QualityChechkBox from './QualCheckBox';
import PronounceCheckBox from './PronounceCheckBox';
import MistakeCheckBox from './TypicalMistakeCheckBox';
import CommentField from './CommentField';
import Bookmark from './Bookmark';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{},
            quality:'',
            pronounce:'',
            mistake:'',
            comment:'',
            bookmarkValue:'',
        };
        this.qualityHandleChange = this.qualityHandleChange.bind(this);
        this.pronounceHandleChange = this.pronounceHandleChange.bind(this);
        this.mistakeHandleChange = this.mistakeHandleChange.bind(this);
        this.commentHandleChange = this.commentHandleChange.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    componentWillMount(){
        this.props.getData();
    }

    qualityHandleChange(event){
        this.setState({
            quality: event.target.value
        })
    }

    pronounceHandleChange(event){
        this.setState({
            pronounce: event.target.value
        })
    }

    mistakeHandleChange(event){
        this.setState({
            mistake:event.target.value
        })
    }

    commentHandleChange(event){
        let data = this.state.comment.push(event.target.value);
        this.setState({
            comment: data
        })
    }

    bookmarkHandleChange(event){
        this.setState({
            bookmarkValue: event.target.value
        })
    }

    buttonHandler(){
        let data = {};
        this.props.sendData(data);
    }

    render() {
        return (
            <div className="container">
                <FormHeader props={this.state.data}/>
                <AudioPlayer props={this.state.data.Path}/>
                <QualityChechkBox handleChange={this.qualityHandleChange}/>
                <PronounceCheckBox handleChange={this.pronounceHandleChange} props={this.state.data.Cue}/>
                <MistakeCheckBox handleChange={this.mistakeHandleChange}/>
                <CommentField handleChange={this.commentHandleChange} props={this.state.data.LabelerLastComments}/>
                <Bookmark handleChange={this.bookmarkHandleChange}/>
                <Button onClick={buttonHandler}></Button>
            </div>
        )
    }
}