import { useState } from 'react';
import './App.css'

function taskForm() {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Task Title:', title);
    console.log('Task Description:', description);

    setTitle('');
    setDescription('');
  };

  return (
    <>

      <div>
        <form className='parentDiv' onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Task Title' value={title} onChange={handleTitleChange} className='inputField' required />
          <textarea placeholder='Enter Task Description' value={description} onChange={handleDescriptionChange} className='textArea' required></textarea>
          <button type='submit' className='submitButton'>Add Task</button>
        </form>
      </div>

    </>
  );
}

export default taskForm
