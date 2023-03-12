import { useEffect,useState } from "react";
import { Base_url } from "../store/utils";

const useToken = (email) => {
    const [token,setToken] = useState(null);


    useEffect(() => {
        if (email !== null && email !== '' && email !== undefined && token === null) {
            try {
                fetch(`${Base_url}/jwt?email=${email}`,{
                        method: 'POST',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.token) {
                            localStorage.setItem('accessToken',data.token);

                            setToken(data.token);
                        }
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            } catch (error) {
                console.log(error);
            }
        } else {
            return;
        }
    },[email]);

    return [token];

};

export default useToken;