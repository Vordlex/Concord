import LoginForm from './login'

const VerifyLogin = (props: any) => {
    const token = localStorage.getItem('token')
    if (token) {
        return <>{props.children}</>
    }

    return (
        <>
            <LoginForm />
        </>
    )
}

export default VerifyLogin
