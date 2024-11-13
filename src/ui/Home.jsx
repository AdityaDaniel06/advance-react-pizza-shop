import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center sm:m-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
        <CreateUser />
      </h1>
    </div>
  );
}

export default Home;
