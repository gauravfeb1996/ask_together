import classes from './PostCard.module.css'

function PostCard({ userName, postContent }) {
  return (
    <div className="flex-1">
      <h2 className={classes.userName}>{userName}</h2>
      <p className={classes.postContent}>{postContent}</p>
    </div>
  );
}

export default PostCard;