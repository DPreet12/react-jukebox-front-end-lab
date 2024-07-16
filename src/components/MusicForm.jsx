import { useState } from 'react';

const MusicForm = (props) => {
    
     const initialState = {
            artist: "",
            title: "",
        }
      
  // formData state to control the form
  const [formData, setFormData] = useState(props.selectedMusic ? props.selectedMusic : initialState);

 
  // handleChange function to update formData state
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // props.createMusic(formData);
    // setFormData({artist: "", title: ""})
    if( props.selectedMusic) {
        props.handleUpdateMusic(formData, props.selectedMusic._id);
    } else {
        props.createMusic(formData);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist"> Artist </label>
        <input
          id="artist"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          required
        />
        <label htmlFor="title"> Title </label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
       
        <button type="submit">{props.selected ? 'Update Track' : 'Add New Track'}</button>
      </form>
    </div>
  );
};

export default MusicForm;