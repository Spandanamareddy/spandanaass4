import './App.css';

function LoginForm() {
  return (
    <div className="App">
      <div className="container ">
  <div className="row m-4">
    <div className="col-md-6 col-sm-12 bg-custom none">
      <h1 className="text-center pt-3">Login</h1>
    </div>
    <div className="col-md-6 col-sm-12 bg-custom-form">
      <form action="#" className="p-3">
        <div className="form-group">
          <label htmlFor="name">User Id</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <button type="submit" className="btn btn-custom mb-3 mt-3">
          LOGIN
        </button>
      </form>
    </div>
  </div>
</div>
    </div>
  );
}

export default LoginForm;
