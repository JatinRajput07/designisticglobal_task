
import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../../utils/config';

const AdminApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await axios.get(`${config.BaseUrl}/api/getapplyjob`);
                setApplications(response.data);

                console.log()
            } catch (err) {
                console.error(err);
                setError('Failed to load applications');
            } finally {
                setLoading(false);
            }
        };

        fetchApplications();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container my-5">
            <h1 className='text-center mb-4'>Applied Applications</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th>Sr. No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Title</th>
                        <th>CV</th>
                    </tr>
                </thead>
                <tbody>
                    {applications.map((application,i) => (
                        <tr key={application._id}>
                            <td>{i +  1 }</td>
                            <td>{application.name}</td>
                            <td>{application.email}</td>
                            <td>{application.phone}</td>
                            <td>{application.title}</td>
                            <td>
                              {  console.log(application.cv)}
                                <a href={`http://localhost:5200${application.cv}`} target="_blank">
                                    View CV
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminApplications;
