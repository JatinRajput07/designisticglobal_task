import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../../../utils/config';

export default function Contact() {
    const [isClient, setIsClient] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            const response = await axios.post(`${config.BaseUrl}/api/contact`, data);
            if (response.status === 200) {
                toast.success('Message sent successfully!');
                reset();
            }
        } catch (error) {
           console.log(error,'===v==')
            toast.error('Error sending message.');
        }
        finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <>
            {<ToastContainer limit={1} />}
            <div className="service">
                <div className="service-header p-5 text-white">
                    <div className="container my-4">
                        <h2 className="font-weight-bold">Contact Lions</h2>
                        <p className="font-weight-bold">
                            Don't waste another day. Get in contact with the best Business Brokers today!
                        </p>
                    </div>
                </div>
            </div>

            <div className="contact-us my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div>
                                <p className="m-0">CONTACT LIONS</p>
                                <h2 className="font-weight-bold">
                                    WE WANT TO <span className="text-info">HEAR FROM YOU</span>
                                </h2>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <div className="">
                                            <label className="form-label" htmlFor="first_name">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                {...register('firstName', { required: 'First name is required' })}
                                                id="first_name"
                                                className="form-control form-control-lg"
                                            />
                                            {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="">
                                            <label className="form-label" htmlFor="last_name">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                {...register('lastName', { required: 'Last name is required' })}
                                                id="last_name"
                                                className="form-control form-control-lg"
                                            />
                                            {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
                                        </div>
                                    </div>
                                    <div className="col-6 my-4">
                                        <div className="">
                                            <label className="form-label" htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                {...register('phone', { required: 'Phone number is required' })}
                                                id="phone"
                                                className="form-control form-control-lg"
                                            />

                                            {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                                        </div>
                                    </div>
                                    <div className="col-6 my-4">
                                        <div className="">
                                            <label className="form-label" htmlFor="subject">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                {...register('subject', { required: 'Subject is required' })}
                                                id="subject"
                                                className="form-control form-control-lg"
                                            />

                                            {errors.subject && <span className="text-danger">{errors.subject.message}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <label className="form-label" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        {...register('message', { required: 'Message is required' })}
                                        id="message"
                                        cols={30}
                                        rows={10}
                                    />

                                    {errors.message && <span className="text-danger">{errors.message.message}</span>}
                                </div>

                                <div className="robot-verify my-4">
                                    <div className="border w-50">
                                        <div className="d-flex bg-light">
                                            <div className="d-flex mx-4 my-4">
                                                <input className="mx-3" type="checkbox" id="robot-check" required />
                                                <h6 className="text-muted">I'm not a robot</h6>
                                            </div>
                                            <Image
                                                src="/img/Google-reCaptcha-Logo.png"
                                                width={90}
                                                height={80}
                                                alt="Google reCaptcha Logo"
                                            />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary my-4">Submit</button>
                                </div>
                            </form>
                        </div>

                        <div className="col-lg-4 right-section">
                            <div className="text-white card-body bg-info">
                                <h4>Lions Business Brokers</h4>
                                <ul className="p-0">
                                    <li className="d-flex my-3">
                                        <i className="p-2 fas fa-mobile-alt" />
                                        National: 1300309094 <br /> Mobile: 0449298989
                                    </li>
                                    <li className="d-flex my-3">
                                        <i className="p-2 fas fa-envelope-square" />
                                        kumarj597@gmail.com
                                    </li>
                                    <li className="d-flex my-3">
                                        <i className="p-2 far fa-clock" />
                                        Monday to Sunday - 8:00 am to 5:00 pm
                                    </li>
                                </ul>
                            </div>
                            <h3 className="mt-5">GET IN TOUCH</h3>
                            <div className="card-body bg-light text-muted">
                                <p className="my-4">
                                    Subscribe to our newsletters to receive the latest news and updates.
                                </p>
                                <div className="">
                                    <label className="form-label" htmlFor="newsletter_first_name">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        id="newsletter_first_name"
                                        className="form-control form-control-lg"
                                    />

                                </div>
                                <div className="">
                                    <label className="form-label" htmlFor="newsletter_email">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        id="newsletter_email"
                                        className="form-control form-control-lg"
                                    />
                                </div>
                                <button className="btn btn-info mt-2 ripple-surface w-100">
                                    Subscribe <i className="p-2 fas fa-envelope-square" />
                                </button>
                            </div>
                            <h3 className="mt-5">SOCIAL MEDIA</h3>
                            <div className="d-flex text-muted">
                                <i className="display-6 mr-2 fab fa-facebook-square" />
                                <i className="display-6 mx-2 fab fa-google-plus-square" />
                                <i className="display-6 mx-2 fab fa-linkedin" />
                                <i className="display-6 mx-2 fab fa-instagram" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-section bg-primary mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 p-4 text-white">
                            <h3>Try our 14 days free Services</h3>
                            <p>
                                See how we optimize your site's performance and grow your business.
                            </p>
                        </div>
                        <div className="col-lg-6 p-5 text-center">
                            <button className="border-0 btn-light btn-rounded font-weight-bold p-2 px-4 ripple-surface">
                                Read More
                            </button>
                            <button className="border-0 btn-dark btn-rounded font-weight-bold p-2 px-4 ripple-surface">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
