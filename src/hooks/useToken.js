import { toast } from "node_modules/react-hot-toast/dist/index";
import { useEffect, useState } from "react";
import { Base_url } from "../store/utils";

const useToken = (email) => {
    const [token,setToken] = useState(null);
    

    useEffect(() => {
        fetch(`${Base_url}/jwt?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.token) {
                    localStorage.setItem('accessToken',data.token);
                    setToken(data.token);
                }
            })
    },[email]);

    return [token];

};

export default useToken;