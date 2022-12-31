import { connect } from 'react-redux'
import { Websocket_Reducers_Type } from '../reducers/websocket_redux'
import Spinner from './Components/Loading/Spinner'
import { Suspense, lazy } from 'react'

//Lazy
const VerifyLogin = lazy(() => import('./auth/verifyLogin'))
const Guilds = lazy(() => import('./Components/Guilds/guilds'))
const LeftTab = lazy(() => import('./Components/LeftTab/LeftTab'))
const MiddleTab = lazy(() => import('./Components/MiddleTab/MiddleTab'))

const App = (...props: any) => {
    const {
        websocket_redux,
    }: {
        websocket_redux: Websocket_Reducers_Type
    } = props[0]
    return (
        <Suspense fallback={<Spinner />}>
            <VerifyLogin>
                <div>
                    <Guilds />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {websocket_redux.LeftTabEnabled === true ? <LeftTab /> : ''}
                        <MiddleTab />
                    </div>
                </div>
            </VerifyLogin>
        </Suspense>
    )
}

const mapStateToProps = (state: Websocket_Reducers_Type) => {
    return {
        ...state,
    }
}

export default connect(mapStateToProps)(App)
