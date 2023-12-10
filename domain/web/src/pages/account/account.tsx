import { useState } from "react"
import AccountDataInput from "../../components/account_data_input"

const AccountPage = () => {
    const [profileName, setProfileName] = useState("")

    return (
        <div className="account">
            <AccountDataInput
                label="Profile Name"
                id="profileName"
                initialValue={profileName} 
                onValueChange={(e) => setProfileName(e)} 
                className="account-input-name"/>
        </div>
    )
}

export default AccountPage
