import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto p-2 border-b-2 mb-8">
      <h1 className="text-5xl">Knowledge Cafe</h1>
      <hr />
      <img src={profile} alt="" srcSet="" />
    </header>
  );
};

export default Header;
