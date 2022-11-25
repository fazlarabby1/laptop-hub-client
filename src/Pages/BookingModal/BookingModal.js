import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const productName = product.productName;
        const price = product.price;

        const booking = {
            name,
            email,
            phone,
            location,
            productName,
            price
        }
        
        fetch(`${process.env.REACT_APP_API_URL}/bookings`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('Booking successful');
                setProduct(null);
            }
            else{
                toast.error(data.message);
                setProduct(null);
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product.productName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" defaultValue={user?.displayName} required />
                        <input name='email' type="email" className="input w-full input-bordered" defaultValue={user?.email} disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <input type="text" name='location' placeholder='Enter Your Location' className="input w-full input-bordered" required />
                        <input className='btn w-full' type="submit" value='Confirm' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;