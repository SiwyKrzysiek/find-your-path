import React from "react";
import PropTypes from "prop-types";
import BookDTO from "./model/Book";

export default function Book({ book, onLogin, logged }) {
  const loginInput = React.createRef();
  const passwordInput = React.createRef();

  // console.log(onLogin);
  // onLogin("a", "b");

  const handleSubmit = () => {
    onLogin(loginInput.current.value, passwordInput.current.value);
  };

  return (
    <section>
      <hr />
      <h3 className="text-center display-4">{book.title}</h3>
      <p className="lead">{book.content}</p>

      {book.isLogin && !logged ?
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Login</label>
            <input ref={loginInput} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input ref={passwordInput} type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button onClick={handleSubmit} type="button" className="btn btn-primary">Submit</button>
        </form>
        :
        <p>You feel that something has changed</p>
      }

    </section>
  );
}

Book.propTypes = {
  book: PropTypes.instanceOf(BookDTO).isRequired
};