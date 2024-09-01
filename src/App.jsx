import { useState } from 'react';
import './App.css'
import './index.css';


function taskForm() {

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const [todoTask, settodoTask] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('Task Title:', title);
    // console.log('Task Description:', description);

    settodoTask([...todoTask, { title, description }]);
    console.log(todoTask);

    setTitle('');
    setDescription('');
  };

  let renderTask = <h2 className='text-center'><b>No Task Available</b></h2>;

  if(todoTask.length > 0){
  renderTask = todoTask.map((task, index) => {
    return <li>
      <div>
        <h4><b>Title:</b> {task.title}</h4>
        <h6><b>Description:</b> {task.description}</h6>
      </div>
      <hr className='h-1 my-3 bg-black' />
    </li>
  })
  }

  return (
    <>

      <div>
        <form className='parentDiv' onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter Task Title' value={title} onChange={handleTitleChange} className='inputField' required />
          <textarea placeholder='Enter Task Description' value={description} onChange={handleDescriptionChange} className='textArea' required></textarea>
          <button type='submit' className='submitButton'>Add Task</button>
        </form>

        <hr />

        <div className='p-8 bg-slate-200'>
          <ul>
            {renderTask}
          </ul>
        </div>


      </div>

    </>
  );
}

export default taskForm
