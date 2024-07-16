
const MusicDetails = (props) => {
   
    if(!props.selectedMusic) {
        return (
            <div>
            <h2>No Details</h2>
          </div> 
        )
    }
    
    return(
        <div>
            <h2>Artist: {props.selectedMusic.artist}</h2>
            <h2>Title: {props.selectedMusic.title}</h2>
            <button onClick={() => props.handleFormView(props.selectedMusic)}>Edit</button>
            <button onClick={() => props.handleRemoveMusic(props.selectedMusic._id)}>Delete</button>
        </div>
    )

};

export default MusicDetails;