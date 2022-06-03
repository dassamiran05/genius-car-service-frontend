import React from 'react';

import useServices from '../../hooks/useServices';

const ManageServices = () => {

    const [services, setServices] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure');
        if(proceed){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remain = services.filter(service => service._id !== id);
                setServices(remain);
            })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h2>Manage Services page</h2>
            {
                services.map(service => <div key={service._id}>
                    <h4>{service.name}<button onClick={() => handleDelete(service._id)}>X</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageServices;