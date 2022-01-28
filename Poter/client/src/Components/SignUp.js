import IndexNav from "./IndexNav";
import IndexFooter from "./IndexFooter";

export default function SignUp(props) {
  function onSubmit(e) {
    e.preventDefault();

    const form = e.target;

    if (form["password"] !== form["confirm-password"]) {
      props.message("Passwords do not Match");
    }
  }

  return (
    <>
      <IndexNav />
      <div className="form-container">
        <form
          className="form signup-form"
          action=""
          method="post"
          onSubmit={onSubmit}
        >
          <div className="form-heading">Sign Up</div>
          <input type="text" name="username" placeholder="Username" required />
          <input type="text" name="email" placeholder="Email (optional)" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input
            type="password"
            name="confirm-password"
            placeholder="Confirm Password"
            required
          />
          <button type="submit" className="sbmt-btn">
            Sign Up
          </button>
        </form>
      </div>
      <IndexFooter />
    </>
  );
}
