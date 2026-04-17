import PageHeader from "./PageHeader/PageHeader";
import ContentSection from "./ContentSection/ContentSection";
import SideNavbar from "./components/SideNavbar/SideNavbar";

function HomePage() {
    const posts = [
    { userName: "Alice", postContent: "Hello, this is my first post!" },
    { userName: "Bob", postContent: "React is awesome!" },
    { userName: "Charlie", postContent: "Just joined this platform, excited to connect with everyone!" }
  ];
  return (
    <>
      <PageHeader />
      <div className="flex w-screen">
        {/* <SideNavbar /> */}
        <ContentSection posts={posts} />
      </div>
    </>   
  );
}


export default HomePage;
