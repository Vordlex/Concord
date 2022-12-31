import { useState } from 'react'
import CaptchaModal from '../Components/Modal/CaptchaModal'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            {showModal === true ? (
                <CaptchaModal email={email} password={password} />
            ) : (
                <div id='div-form'>
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            setShowModal(true)
                        }}
                    >
                        <div>
                            <legend>EMAIL</legend>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <legend>PASSWORD</legend>
                            <input
                                type='password'
                                name='password'
                                id='password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <button type='submit'>LOGIN</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default LoginForm

