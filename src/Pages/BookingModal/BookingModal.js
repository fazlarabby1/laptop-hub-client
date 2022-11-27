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
        const productName = form.productName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const productId = product._id;
        const productImg = product.image;

        const booking = {
            name,
            email,
            phone,
            location,
            productName,
            price,
            productId,
            productImg
        }

        fetch(`${process.env.REACT_APP_API_URL}/bookings`, {
            method: 'POST',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking successful');
                    setProduct(null);
                }
                else {
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
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" defaultValue={user?.displayName} disabled />
                        <input name='email' type="email" className="input w-full input-bordered" defaultValue={user?.email} disabled />

                        <input name='productName' type="text" className="input w-full input-bordered" defaultValue={product.productName} disabled />

                        <input name='price' type="text" className="input w-full input-bordered" defaultValue={product.price} disabled />

                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <input type="text" name='location' placeholder='Enter Product Receive Location' className="input w-full input-bordered" required />
                        <input className='btn w-full' type="submit" value='Confirm' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;