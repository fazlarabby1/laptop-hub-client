import { useEffect, useState } from "react";

const useSellerVerify = email => {
    const [isSeller, setIsSeller] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`${process.env.REACT_APP_API_URL}/user/seller?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data[1]) {
                        setIsSeller(data[1].isSeller);
                        setIsLoading(false);
                    }
                    return;
                })
        }
    }, [email])
    return [isSeller, isLoading];
}

export default useSellerVerify;