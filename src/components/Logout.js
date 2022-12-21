import { useAuth } from '../contexts/AuthContext'

export function Logout() {
    const { signout_process } = useAuth()

    return (
        <button onClick={signout_process}>Logout</button>
    )
}