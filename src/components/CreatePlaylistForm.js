import React from 'react';

const CreatePlaylistForm = (props) => {
    return (
        <div>
           <form onSubmit={props.handleSubmit}>
                <input type="text" placeholder="Add Playlist Title" name="title" value={props.title} onChange={props.handleChange}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePlaylistForm