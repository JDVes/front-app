// import { sendSignInLinkToEmail } from 'firebase/auth';
// import React, { Component } from 'react'

const signup = () => {
    return ( 
        <form>
        <h3>Sign Up</h3>
        {/* <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div> */}
        <div className="mb-3">
          <label>Company name</label>
          <input type="text" className="form-control" placeholder="Enter your Company name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your company email"
            onChange={(e) => setEmail(e.target.value) }
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value) }
          />
        </div>
        <div className="d-grid">
          <button onClick={signup} type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
     );
}
 
export default signup;
// export default class Signup extends Component {
//   render() {
//     return (
    //   <form>
    //     <h3>Sign Up</h3>
    //     <div className="mb-3">
    //       <label>First name</label>
    //       <input
    //         type="text"
    //         className="form-control"
    //         placeholder="First name"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Last name</label>
    //       <input type="text" className="form-control" placeholder="Last name" />
    //     </div>
    //     <div className="mb-3">
    //       <label>Email address</label>
    //       <input
    //         type="email"
    //         className="form-control"
    //         placeholder="Enter email"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         className="form-control"
    //         placeholder="Enter password"
    //       />
    //     </div>
    //     <div className="d-grid">
    //       <button type="submit" className="btn btn-primary">
    //         Sign Up
    //       </button>
    //     </div>
    //     <p className="forgot-password text-right">
    //       Already registered <a href="/sign-in">sign in?</a>
    //     </p>
    //   </form>
//     )
//   }
// }