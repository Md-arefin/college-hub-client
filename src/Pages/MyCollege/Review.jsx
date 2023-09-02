import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React, { useContext } from 'react';
import { GiConfirmed } from 'react-icons/gi';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Review = () => {
    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const review = form.review.value;
        const ratings = form.rating.value;

        const reviewData = {
            name,
            review,
            ratings, 
            image: user.photoURL,
        }

        fetch('http://localhost:5000/add-review', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thanks for your feedback',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div className='mt-16'>
            <h3 className='text-2xl md:text-4xl font-semibold text-center'>Share Your Experience</h3>

            <div className='flex flex-col lg:flex-row gap-5 items-center justify-between px-5 my-16'>

                <div className='md:ml-52  md:w-[50%] lg:w-[27%]'>
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/0e6f5e0f-4ff6-4507-b8d8-778effeeca99/SFLjO6GQwx.json"
                        className='w-[100%] '
                    >
                        <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>


                <div className="card w-full lg:w-1/2 shadow-2xl bg-rose-900">

                    <form onSubmit={handleReview} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">User Name</span>
                            </label>
                            <input type="text"

                                placeholder="User Name..." defaultValue={user ? user.displayName : ''} name='name' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Feedback</span>
                            </label>
                            <textarea placeholder="feedback here..." name="review" rows="4" className="input input-bordered pt-3" required></textarea>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <select className="input input-bordered" name="rating" required>
                                <option value="">Rate our website</option>
                                <option value="1">1  Stars</option>
                                <option value="2">2 Stars</option>
                                <option value="3">3 Stars</option>
                                <option value="4">4 Stars</option>
                                <option value="5">5 Stars</option>
                            </select>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' value='Submit' className="btn text-lg bg-black text-white hover:bg-white hover:text-black w-full md:w-1/2 border-none mx-auto" >
                                Submit
                                <GiConfirmed className='text-lg' />
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default Review;