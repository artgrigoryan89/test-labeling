import React, {Component} from 'react';
import FormHeader from './FormHeader';
import AudioPlayer from './AudioPlayer';
import QualityChechkBox from './QualCheckBox';
import PronounceCheckBox from './PronounceCheckBox';
import MistakeCheckBox from './TypicalMistakeCheckBox';
import CommentField from './CommentField';
import Bookmark from './Bookmark';
import {Button} from 'reactstrap';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                TaskId: 1,
                UttId: 11,
                Path: "/run10/batch2/5707-jw3r",
                Cue: "this",
                SpeakerIdHash: "hash1",
                SpeakerGender: "Male",
                SpeakerAge: "30",
                LabelerLastComments: [
                    "comment1",
                    "comment2"
                ]
            },
            RecordingQuality: '',
            PronunciationQuality: '',
            Mistakes: '',
            Comment: '',
            IsBookmarked: '',
        };
        this.qualityHandleChange = this.qualityHandleChange.bind(this);
        this.pronounceHandleChange = this.pronounceHandleChange.bind(this);
        this.mistakeHandleChange = this.mistakeHandleChange.bind(this);
        this.commentHandleChange = this.commentHandleChange.bind(this);
        this.bookmarkHandleChange = this.bookmarkHandleChange.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
    }

    componentWillMount() {
        /* this.state.data = this.props.getData(); */
    }

    qualityHandleChange(event) {
        this.setState({
            RecordingQuality: event.target.value
        })
    }

    pronounceHandleChange(event) {
        this.setState({
            PronunciationQuality: event.target.value
        })
    }

    mistakeHandleChange(event) {
        this.setState({
            Mistakes: event.target.value
        })
    }

    commentHandleChange(event) {
        this.setState({
            Comment: event.target.value
        })
    }

    bookmarkHandleChange(event) {
        this.setState({
            IsBookmarked: event.target.value
        })
    }

    buttonHandler() {
        event.preventDefault();
        const data = {
            RecordingQuality: this.state.RecordingQuality,
            PronunciationQuality: this.state.PronunciationQuality,
            Mistakes: this.state.Mistakes,
            Comment: this.state.Comment,
            IsBookmarked: this.state.IsBookmarked,
        };
        /* this.props.sendData(data); */
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <div className="panel panel-info">
                        <FormHeader props={this.state.data}/>
                        <div className="panel-body">
                            <form id="labelling-form" className="form-horizontal" onSubmit={this.buttonHandler}>
                                <AudioPlayer props={this.state.data.Path}/>
                                <QualityChechkBox handleChange={this.qualityHandleChange}/>
                                <PronounceCheckBox handleChange={this.pronounceHandleChange} props={this.state.data.Cue}/>
                                <MistakeCheckBox handleChange={this.mistakeHandleChange}/>
                                <CommentField handleChange={this.commentHandleChange} props={this.state.data.LabelerLastComments}/>
                                <Bookmark handleChange={this.bookmarkHandleChange}/>
                                <div className="form-group text-center no-gutter">
                                    <Button type="submit" className="btn btn-primary">Відправити</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}