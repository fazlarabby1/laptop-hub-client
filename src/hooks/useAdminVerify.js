import { useEffect, useState } from "react"

const useAdminVerify = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
                setAdminLoading(false);
            })
    }, [email]);
    return [isAdmin, adminLoading];
}
export default useAdminVerify;