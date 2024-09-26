import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import config from '../../../utils/config';

export default function Career() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [file, setFile] = useState(null);

    const onSubmit = async (data) => {
        setIsLoading(true);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('location', data.location);
        formData.append('title', data.title)
        formData.append('phone', data.phone);
        if (file) {
            formData.append('cv', file);
        }

        try {
            const response = await axios.post(`${config.BaseUrl}/api/applyjob`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 201) {
                toast.success('Submission successful!');
                reset();
            }
        } catch (error) {
            console.error(error);
            toast.error('Error submitting data.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <ToastContainer limit={1} />
            <div className="service">
                <div className="service-header p-5 text-white">
                    <div className="container my-4">
                        <h2 className="font-weight-bold">Apply for a Job at Lions</h2>
                        <p className="font-weight-bold">
                            Take the next step in your career. Fill out the form below to apply for a position with the best Business Brokers!
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mt-5 w-50">
                <h2>User Submission Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Position Title</label>
                        <input
                            type="text"
                            {...register('title', { required: 'Position title is required' })}
                            id="title"
                            className="form-control"
                        />
                        {errors.title && <span className="text-danger">{errors.title.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            {...register('name', { required: 'Name is required' })}
                            id="name"
                            className="form-control"
                        />
                        {errors.name && <span className="text-danger">{errors.name.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            {...register('email', { required: 'Email is required' })}
                            id="email"
                            className="form-control"
                        />
                        {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">Location</label>
                        <input
                            type="text"
                            {...register('location', { required: 'Location is required' })}
                            id="location"
                            className="form-control"
                        />
                        {errors.location && <span className="text-danger">{errors.location.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                            type="tel"
                            {...register('phone', { required: 'Phone number is required' })}
                            id="phone"
                            className="form-control"
                        />
                        {errors.phone && <span className="text-danger">{errors.phone.message}</span>}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="cv" className="form-label">Upload CV</label>
                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            // {...register('cv', { required: 'CV upload is required' })}
                            id="cv"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 my-5">Submit Application</button>
                </form>
            </div>
        </>
    );
}
