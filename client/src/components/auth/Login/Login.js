import React, {useState} from 'react'
import FormInput from '../../form-input/FormInput'
import PropTypes from 'prop-types'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import './Login.scss'
import { login } from "../../../redux/actions/auth";

const Login = ({login, isAuthenticated}) => {
    const [formData, setFormData] = useState({username: '', password: ''})
    
    const {username, password} = formData

    if(isAuthenticated){
        return <Redirect to='/pages'/>
    }

    const handleChange = e => {
        const {name, value} = e.target
        return setFormData({...formData, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        return login({username, password})
    }

    return (
        <div className='bg'>
            <div className="login-container">
                <div className="login">
                 <span className="login-form-title"><img src="assets/logo.png" alt="Logo" /></span>
                <form onSubmit={handleSubmit}>
                    <FormInput type='text' name="username" id="username" handleChange={handleChange} label='Correo' value={username}/>
                    <FormInput type='password' name="password" id="password" handleChange={handleChange} label='Contraseña' value={password}/>
                    <button type="submit" className='login-button'><span style={{textTransform: "uppercase"}}>Iniciar sesión</span></button>
                    <div className="login-app-version">Version: 23 de Febrero 2020</div>
                </form>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login) 
