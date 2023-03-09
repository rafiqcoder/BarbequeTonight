import { useEffect,useState } from 'react';
import { Base_url } from '../store/utils';

const isAdmin = (email) => {
    const [admin,setAdmin] = useState(false);


    useEffect(() => {
        if (email !== null && email !== '' && email !== undefined && admin === false) {
            fetch(`${Base_url}/admin?email=${email}`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.admin) {

                        setAdmin(true);
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        } else {

            return;
        }

    },[email]);

    return [admin]

}

export default isAdmin;