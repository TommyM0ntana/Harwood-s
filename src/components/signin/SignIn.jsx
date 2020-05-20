import React, { Component } from 'react'
import FormInput from '../form-input/FormInput'
import './sign-in.style.scss'

class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }


  handelSubmit = (e) => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }

  handleChange = (e) => {
    const { value, name } = e.target
    this.setState({ [name]: value })

  }

  render() {
    return (
      <div className="sign-in">
        <h2> I already have un account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handelSubmit}>
          <FormInput
            label='email'
            name='email'
            type="email"
            value={this.state.email}
            require='true'
            handleChange={this.handleChange} />


          <FormInput
            label='password'
            name='password'
            type="password"
            value={this.state.password}
            require='true'
            handleChange={this.handleChange} />

          <input type="submit" value='Submit Form' />

        </form>
      </div>
    )
  }
}

export default SignIn