import { useEffect, useState } from "react"
import ProfileAbout from "../../components/profile_about"
import ProfileSocialMedia from "../../components/profile_social_media"
import ProfileHeader from "../../features/profile_header"
import {IUser} from "../../types/user"

const ProfilePage = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch(`http://localhost:8001/users/3108158284`);
            console.log(response)
            if (!response.ok) {
              throw new Error('User not found');
            }
            const data = await response.json();
            setUser(data);
          } catch (error) {
            setError('Failed to fetch user');
          }
        };
    
        fetchUser();
    }, []);

    if (error) {
    return <div>Error: {error}</div>;
    }

    if (!user) {
    return <div>Loading...</div>;
    }

    return (
        <>
            <ProfileHeader 
                backgroundUrl="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000&t=st=1702140732~exp=1702141332~hmac=7a3c566ba13d884f95ebc6d9ed2c10ab379b78f97850ebd4cbdd1ef6c44aa8f9" 
                profileImageUrl="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=1800&t=st=1702141435~exp=1702142035~hmac=03c79953523fbafd27ede3e28450644929de75222bbeb828d7455c59412afd47"
                name={user.name}
                prScore={user.pr_score}
                occupation="Dev Ops"
                />
            <ProfileAbout bio="I'm a good dev"/>
        </>
    )
}

export default ProfilePage