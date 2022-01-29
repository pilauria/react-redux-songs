import { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  // this.props === {songs:state.songs}
  renderList = () => {
    return this.props.songs.map(song => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button className='ui button primary'>Select</button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  };
  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList); // function that return another function

// function connect() {
//   return function () {
//     return 'Hi there';
//   };
// }
// connect()()
