import React from 'react';

const BookingModal = ({product}) => {
    const handleBooking = () =>{
        console.log('clicked')
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{typeof(product)}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled className="input w-full input-bordered" />
                        <input name='name' type="text" placeholder="Your Name" className="input w-full input-bordered" required />
                        <input name='email' type="email" placeholder="Email Address" className="input w-full input-bordered" disabled />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <input className='btn w-full' type="submit" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;