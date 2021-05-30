import React from 'react';

import './TrackList.css';

import Track from '../Track/Track';

class TrackList extends React.Component {
  render() {
    const tracksInfo = this.props.tracks
    return (
<div className="TrackList">{ tracksInfo.map(track => {
            return <Track track={track}key={track.id}
                          onAdd={this.props.onAdd}
                          isRemoval={this.props.isRemoval}
                          onRemove={this.props.onRemove} />
          })
        }
      </div>
    );
  }
}

export default TrackList;


// WEBPACK FOOTER //
// ./src/components/TrackList/TrackList.js