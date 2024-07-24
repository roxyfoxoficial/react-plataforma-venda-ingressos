

export default function Signup() {
  return (
    <section className="text-center">
      {/* Background image */}
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/021/776/078/original/simple-gradient-wave-abstract-background-fluid-background-suitable-for-landing-page-and-computer-desktop-wallpaper-free-vector.jpg')",
          height:  300
        }}
      ></div>
      {/* Background image */}

      <div
        className="card mx-4 mx-md-5 shadow-5-strong bg-body-tertiary"
        style={{
          backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/021/776/078/original/simple-gradient-wave-abstract-background-fluid-background-suitable-for-landing-page-and-computer-desktop-wallpaper-free-vector.jpg')",
          marginTop: '-100px',
          backdropFilter: 'blur(30px)'
        }}
      >
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Sign up </h2>
              <form>
                {/* 2 column grid layout with text inputs for the first and last names */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" />
                      <label className="form-label" htmlFor="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div data-mdb-input-init className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" />
                      <label className="form-label" htmlFor="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                {/* Email input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="email" id="form3Example3" className="form-control" />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                {/* Password input */}
                <div data-mdb-input-init className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>


                {/* Submit button */}
                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block mb-4">
                  Sign up
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
