import React, { useState } from "react";

function CreateNote(props) {

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
        });
    
        
        event.preventDefault();
    }

    return (
    <form>
        <input name="title" type="text" value={note.title} onChange={handleChange} placeholder="Note Title"></input>
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..."></textarea>
        <button onClick={submitNote}>Add</button>
    </form>
    )
}


export default CreateNote;