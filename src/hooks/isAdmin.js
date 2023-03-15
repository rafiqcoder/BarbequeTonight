import { useState } from 'react';
import { Base_url } from '../store/utils';

const isAdmin = () => {
    const [admin,setAdmin] = useState(false);
    const [email,setEmail] = useState(null);

    console.log('email',email);
    const checkAdmin = async (email) => {
        try {
            if (email !== undefined) {
                if (email !== null && email !== '' && email !== undefined) {
                    const res = await fetch(`${Base_url}/admin?email=${email}`,{
                        method: 'POST',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                            //no cors true
                            'access-control-allow-origin': 'https://bbq.netlify.app',
                        },
                        credentials: 'include',
                    })
                    const data = await res.json();
                    console.log('data',data);
                    if (data) {
                        // console.log('data',data);
                        // if (data.logout) {
                        //     localStorage.removeItem('accessToken');


                        //     logOut()

                        //     return;
                        // }
                        if (data.admin) {

                            setAdmin(true);
                        }
                        if (data.accessToken) {
                            console.log("accessToken",data.accessToken)
                            localStorage.setItem('accessToken',data.accessToken);
                        }

                    }


                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    checkAdmin(email);


    return [setEmail,admin]

}

export default isAdmin;