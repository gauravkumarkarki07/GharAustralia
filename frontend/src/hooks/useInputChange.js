import { useState } from "react";

export default function useInputChange(initialData){
    const [data, setData] = useState(initialData);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // If the name has dot notation (e.g., facilities.internet), handle nested state update
        if (name.includes('.')) {
            const [parentKey, nestedKey] = name.split('.');
            setData({
                ...data,
                [parentKey]: {
                    ...data[parentKey],
                    [nestedKey]: value === 'true' || value === 'false' ? value === 'true' : value,
                },
            });
        } else {
            setData({
                ...data,
                [name]: value === 'true' || value === 'false' ? value === 'true' : value,
            });
        }
    };

    return { data, handleChange };
}
