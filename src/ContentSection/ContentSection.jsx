import PostCard from "../components/PostCard";
import classNames from './ContentSection.module.css'

function ContentSection({ posts }) {
  return (
    <div className={classNames.contentSection}>
      {posts.map((post, index) => (
        <PostCard key={index} userName={post.userName} postContent={post.postContent} />
      ))}

    </div>
  );
}

export default ContentSection;