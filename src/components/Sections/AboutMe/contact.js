// TODO: Configure form validation and form submission routes.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <div className="min-w-full flex flex-col justify-center items-center">
            <h2 className="font-bold text-white px-32 py-20 text-4xl self-start">
                Got an idea for a project? Please let me know!
            </h2>
            <form action="/api/form" method="POST" className="flex flex-col space-y-4 w-2/5">
                <label htmlFor="fullName" className="font-bold">Full Name:</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 top-1 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon icon={ faUser } className="text-gray-500" />
                    </div>
                    <input
                        required
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder={ "Edric Tom" }
                        className="mt-1 block w-full px-10 rounded-md text-black bg-gray-200 border-transparent focus:border-blue-500 focus:bg-gray-100 focus:ring-0 placeholder-gray-400"
                    />
                </div>
                <label htmlFor="email" className="font-bold">Email:</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 top-1 flex items-center pl-3 pointer-events-none">
                        <FontAwesomeIcon icon={ faEnvelope } className="text-gray-500" />
                    </div>
                    <input
                        required
                        type="text"
                        id="email"
                        name="email"
                        placeholder="edric@example.com"
                        className="mt-1 block w-full px-10 rounded-md text-black bg-gray-200 border-transparent focus:border-blue-500 focus:bg-gray-100 focus:ring-0 placeholder-gray-400"
                    />
                </div>
                <textarea
                    required
                    placeholder="What project do you have in mind?"
                    rows="8"
                    className="mt-3 resize-none block w-full rounded-md text-black bg-gray-200 border-transparent focus:border-blue-500 focus:bg-gray-100 focus:ring-0 placeholder-gray-400"></textarea>
                <button type="submit" className="px-6 py-4 text-lg font-bold selected-section hover-outline-color transition-colors duration-75 rounded-xl">
                    Submit
                </button>
            </form>
        </div>
    );
}