import React, { Component } from 'react';


class Registration extends Component {
  render() {
    return (
        <div className="registration">
            <h3>Sign Up</h3>
            <form>
                <div>
                    <input
                    type="text"
                    name="login"
                    autoComplete="off"
                    placeholder="E-mail"
                    spellCheck={false}
                />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Repeat password" />
                </div>
                <div>
                    <button>Sign Up</button>
                </div>
            </form>
        </div>
    );
  }
}

export default Registration;
