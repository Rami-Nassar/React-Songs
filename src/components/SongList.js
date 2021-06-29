import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

    renderedList() {
        return this.props.songs.map(song => {
            return(
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>

                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render(){
        // this.props === { songs: state.songs }       
        return(
            <div className="ui divided list">
                {this.renderedList()}
            </div>
        );
    }
}

//Take our state from our store and map it to our props
//Can call this function anything; convention is mapStateToProps
const mapStateToProps = (state) => {
    //console.log(state);
    return { songs: state.songs };
}

//connect is a function that returns another function
//That is why the second () is used to invoke that returned function
//In this case that returned function takes a parameter which in this case
//(SongList) is the component
//connect is a react component 
export default connect(
    mapStateToProps, 
    { selectSong: selectSong }
)(SongList);