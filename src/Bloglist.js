import {Link} from 'react-router-dom'
const Bloglist = ({blogs}) => {
	//const blogs=props.blogs;
  return (
    <div className="blog-list">
    	{blogs.map((blog)=>(
				<div className="blog-preview" key={blog.id}>
				<Link to={`/blog/${blog.id}`}><h2>{blog.title}</h2></Link>
				<p>Written By {blog.author}</p>
				</div>
		))}
    </div>
  )
}

export default Bloglist;