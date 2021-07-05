import React, { useState, useEffect } from 'react';
import axios from 'axios';
import post from '../../interfaces/PostsInterface';

const Table:React.FC = () => {

  const [posts, setPosts] = useState<post[]>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        setLoading(true);
        const { data } = await axios.get<post[]>('/api/advertisement', {
        params:{
          page:currentPage,
          limit:1,
        },
        });
        setPosts(data);
        setLoading(false);
      }
      catch (e) {
        console.error(e);
      }
    }

    fetchPosts();

  }, [currentPage]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className={"container mt-5"}>
      <h1>Advertisments List</h1>
        <ul className={"list-group mb-3"}>
        {posts?.map((post) => (
          <li key={post.id} className={"list-group-item"}>{post.title}</li>
        ))}
        </ul>
      <button onClick={()=>{setCurrentPage(currentPage+1);}} >Next</button>
    </div>
  )
};
export default Table;
