import React from 'react';
import { connect } from 'react-redux';


const AllPosts = ({newPost}) => {
  return (

             <div>
      <ul>
        {newPost.map(post => {
          return(
             <li key={post.id}>
          <img
            width="30px"
            height="30px"
            src="https://hardiagedcare.com.au/wp-content/uploads/2019/02/default-avatar-profile-icon-vector-18942381.jpg"
            alt=""
          />
          <h3>{post.name}</h3>
          <p>{post.message}</p>
        </li>
          )
          
        })}
   
      </ul>
    </div>
  
  );
};

const mapStateToProps = state => ({
  newPost: state.newPost.posts,
});

export default connect(mapStateToProps, null)(AllPosts);

