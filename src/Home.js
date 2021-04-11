import Bloglist from './Bloglist.js';
import useFetch from'./useFetch.js';
const Home = () =>{
	const {data:blogs,isPending,error}=useFetch('http://localhost:4000/blogs');
	return(
		<div className="home">
			{error && <div>{error}</div>}
			{isPending && <div> Loading......</div>}
			{blogs && <Bloglist blogs={blogs}/>}
		</div>
		);
}
export default Home;