
const TrackList = (props) => {

    const tracks = props.musicListNew.map((music) => {
        return(
            
            <a  key = {music._id} onClick={ ()=> props.updateSelected(music)}>
            <li>{music.title}</li>
            </a>
            
            
        )
    });
    return(
        <>
        <h1>Music List</h1>
        {/* <ul>{tracks}</ul> */}
        {!props.musicListNew.length ? <h2>No Tracks Yet</h2> : <ul>{tracks}</ul>}
        <button onClick={props.handleFormView}>
            {props.isFormOpen ? "Close Form" : "New Track"}
        </button>
        </>
        
    )
};

export default TrackList;