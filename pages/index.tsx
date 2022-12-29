import Head from "next/head";

import LoginItem from "../components/LoginItem";
import SignupItem from "../components/SignupItem";

const Login = () => {
  return (
    <div>
      <Head>
        <title>PitonShop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="allOfItem m-32 flex bg-gray-100">
        <SignupItem />
        <div className="br"></div>
        <LoginItem />
      </div>
    </div>
  );
};

export default Login;
