import InputBox from "../components/input.component";

const UserAuthForm = ({ type }) => {
  return (
    <section className="h-cover flex items-center justify-center">
      <form className="w-[80%] max-w-[400px]">
        <h1 className="text-4xl font-gelasio capitalize text-center mb-40">
          {type == "Sign-In"
            ? "Welcome Back!"
            : "Start Sharing Your Ideas and Creative Thoughts"}
        </h1>

        {type != "Sign-In" ? (
          <InputBox
            name="fullname"
            type="text"
            placeholder="Name"
            icon="fi-sr-user"
          />
        ) : (
          ""
        )}

        <InputBox
          name="email"
          type="text"
          placeholder="Email"
          icon="fi-sr-envelope"
        />

        <InputBox
          name="password"
          type="password"
          placeholder="Password"
          icon="fi-sr-lock"
        />
      </form>
    </section>
  );
};
export default UserAuthForm;
