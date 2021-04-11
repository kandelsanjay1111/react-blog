const Create = () => {
  return (
    <div className="create">
    	<h2>Add New Blog</h2>
    	<form>
	    	<label>Blog Title</label>
	    	<input type="text"></input>

	    	<label>Blog Body</label>
	    	<textarea></textarea>

	    	<label>Blog author</label>
	    	<select>
	    		<option value="mario">mario</option>
	    		<option value="yoshi">yoshi</option>
	    	</select>

	    	<button>Add Blog</button>
    	</form>
    </div>
  )
}

export default Create;