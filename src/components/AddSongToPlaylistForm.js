import React from "react";

const AddSongToPlaylistForm = (props) => {
  return (
    <div>
      <label>
          <strong>Select Playlist:</strong>
        <select
          name="playlist"
          onChange={props.handlePlaylistSelection}
          value={props.playlist}
        >
            <option value="-">-</option>
          {props.userPlaylists.map((playlist) => (
            <option key={playlist.id} value={playlist.id}>{playlist.title}</option>
          ))}
        </select>
        <button onClick={() => props.addSongToPlaylist()}>Add To Playlist</button>
      </label>
    </div>
  );
};

export default AddSongToPlaylistForm;