import PostPreview from "../../components/PostPreview";
import SubNav from "../../components/SubNav";

export default function MyAccount(props) {
  const { allPosts, currentUser } = props;
  console.log(allPosts);

  return (
    <div>
      <SubNav currentUser={currentUser} />
      {currentUser &&
        allPosts
          .filter((post) => {
            return post.user_id === currentUser.id;
          })
          .map((post) => (
            <>
              <PostPreview
                post={post}
                // allPosts={allPosts}
                // title={post.title}
                // destination={post.destination}
              />
            </>
          ))}
    </div>
  );
}
