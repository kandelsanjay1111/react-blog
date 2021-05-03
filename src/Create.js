import {useState} from 'react';
import {useHistory} from 'react-router-dom';
const Create = () => {
	const [title,setTitle]=useState('');
	const [body,setBody]=useState('');
	const [author,setAuthor]=useState('yoshi');
	const history=useHistory();
	const handleSubmit = (e)=>{
		e.preventDefault();
		const blog={title,body,author};
		fetch('http://localhost:5000/blogs',{
			method:'POST',
			headers:{'content-Type':'application/json'},
			body:JSON.stringify(blog)
		}).then(()=>{
			console.log('new blog inserted');
			history.push('/');
		})
	}
  return (
    <div className="create">
    	<h2>Add New Blog</h2>
    	<form onSubmit={handleSubmit}>
	    	<label>Blog Title</label>
	    	<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>

	    	<label>Blog Body</label>
	    	<textarea value={body} onChange={(e)=>setBody(e.target.value)}></textarea>

	    	<label>Blog author</label>
	    	<select value={author} onChange={(e)=>setAuthor(e.target.value)}>
	    		<option value="mario">mario</option>
	    		<option value="yoshi">yoshi</option>
	    	</select>

	    	<button>Add Blog</button>
    	</form>
    </div>
  )
}

export default Create;