// TODO: Configure form validation and form submission routes.
export default function Contact() {
    return (
        <div className="min-w-full flex flex-col justify-center items-center">
            <h2 className="font-extrabold text-white text-4xl py-24">
                Got an idea for a project? Please let me know!
            </h2>
            <form action="/api/form" method="POST" className="flex flex-col space-y-4 w-2/5">
                <label htmlFor="fullName" className="font-bold">Full Name:</label>
                <input required type="text" id="fullName" name="fullName" placeholder="Edric Tom" className="mt-1 block w-full rounded-md text-black bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 placeholder-gray-400"/>
                <label htmlFor="email" className="font-bold">Email:</label>
                <input required type="text" id="email" name="email" placeholder="edric@example.com" className="mt-1 block w-full rounded-md text-black bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 placeholder-gray-400"/>
                <textarea required placeholder="What's on your mind?" rows="8" className="mt-3 resize-none block w-full rounded-md text-black bg-gray-100 border-transparent focus:border-blue-500 focus:bg-white focus:ring-0 placeholder-gray-400"></textarea>
                <button type="submit" className="px-6 py-4 text-lg font-bold hover:ring bg-blue-500 hover:shadow-2xl focus:bg-sky-600 active:bg-sky-800 transition-colors duration-75 rounded-xl">
                    Submit
                </button>
            </form>
        </div>
    );
}