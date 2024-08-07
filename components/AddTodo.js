import React, {useState} from 'react';
import axios from 'axios';

const AddTodo = () => {
    const [title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/api/todo/createTodo', {
                title,
                description
            }) ;

            console.log('to-do created sucessfully:', response.data);
        } catch (error) {
            console.error('error craeting to-do', error);
        }
    }

    return(
        <form onSubmit={ handleSubmit}>
            <div>
                <label> Title: </label>
                <input type ="text" value ={title} onChange={(e) => setTitle(e.target.value)}
                required />
            </div>
            <div >
                <label> description: </label>
                <input type ="text" value ={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <button type="submit" > AddTodo</button>
        </form>
    )
}

export default AddTodo;

