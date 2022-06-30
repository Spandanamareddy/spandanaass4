import './App.css';

function RegisterForm() {
  return (
    <div className="App">
      <div className="container ">
  <div className="row m-4">
    <div className="col-md-6 col-sm-12 bg-custom none">
      <h1 className="text-center pt-3">Register Form</h1>
    </div>
    <div className="col-md-6 col-sm-12 bg-custom-form">
      <form action="#" className="p-3">
        <div className="form-group">
          <label htmlFor="name">User Id</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="username">First Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Last Name</label>
          <input type="password" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">CONFIRM PASSWORD</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-custom mb-3 mt-3">
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  </div>
</div>

    </div>
  );
}

export default RegisterForm;