import classes from './PostCard.module.css'

function PostCard({ userName, postContent }) {
  return (
    <div className={classes.postCard}>
      <h2 className={classes.userName}>{userName}</h2>
      <p className={classes.postContent}>{postContent}</p>
    </div>
  );
}

export default PostCard;