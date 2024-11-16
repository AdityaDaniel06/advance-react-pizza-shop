import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-10 text-center sm:m-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
        {username === "" ? (
          <CreateUser />
        ) : (
          <Button type="primary" to="/">
            Continue ordering... , {username}
          </Button>
        )}
      </h1>
    </div>
  );
}

export default Home;
