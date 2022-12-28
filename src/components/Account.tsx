import { Navbar } from "./Navbar"
import { FC, useEffect, useState } from "react"
import { useAuth } from '../contexts/AuthContext'
import { AuthProvider, User, linkWithPopup } from "firebase/auth";
import { LoadingButton } from "@mui/lab";
import { googleProvider, githubProvider, facebookProvider } from '../Firebase'


const linkWithProvider = (providerString:string):AuthProvider => {

    let providerForLinking;
    if (providerString === 'Google')
        providerForLinking = googleProvider;
    else if (providerString === 'GitHub')
        providerForLinking = githubProvider;
    else if (providerString === 'Facebook')
        providerForLinking = facebookProvider;
    
    return providerForLinking;
}

/**
 * Returns Account page as JSX 
 * @returns JSX.Element
 */
export const Account:FC = ():JSX.Element => {

    const [isLoading, setIsLoading] = useState(false);

    // Context containing user
    const context = useAuth();

    // User info and set user info
    const [userinfo, setUserInfo] = useState<User>(context.user);

    const listOfProviders = ["Google", "GitHub", "Facebook"]

    // Fetch the required data and store in state
    useEffect(() => {
        setUserInfo(context.user);
    },[context]);

    return (
        <div>
            <Navbar SelectedTab={2}/>
            <div className={"imageStyle"}>
            <img style={{display: "inline-block", marginTop: "10%", borderRadius: "50%"}} src={userinfo.photoURL} alt="User profile"></img>
            </div>
            <div className={"accounttext"}>
                <ul className={'accounttextul'}>
                    <li>Display: </li>
                    <li>Email: </li>
                </ul>
                <ul className={'accounttextul'}>
                    <li>{userinfo.displayName}</li>
                    <li>{userinfo.email}</li>
                    <li></li>
                </ul>
            </div>

            { 
                listOfProviders.map((providerString) => {

                    return (
                        <LoadingButton
                            variant="contained" 
                            color="primary" 
                            loading={isLoading} 
                            onClick={async () => { 
                                setIsLoading(true);
                                try {
                                    await linkWithPopup(context.user, linkWithProvider(providerString));
                                } catch (error) {
                                    console.error(error);
                                }
                                alert("Linked successfully with " + providerString)
                                setIsLoading(false);
                            }}>
                            {providerString}
                        </LoadingButton>
                    )
                })
            }
        </div>
    )
}
