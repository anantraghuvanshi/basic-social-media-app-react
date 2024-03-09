const Post = ({ post }) => {
  return (
    <>
      <div class="card post-card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <p class="card-text">{post.body}</p>
          {post.tags.map({tag} => (<span className="badge text-bg-primary">{tag}</span>))}
          
        </div>
      </div>
    </>
  );
};

export default Post;
