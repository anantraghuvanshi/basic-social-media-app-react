const Post = ({ post }) => {
  return (
    <>
      <div class="card post-card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">
            {post.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bag-danger">
              {post.reactions}
            </span>
          </h5>
          <p class="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span className="badge text-bg-primary hashtag">{tag}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
