import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-800 px-6 py-12 animate-fade-in">
      <h1 className="text-7xl md:text-9xl font-extrabold text-blue-600 mb-4 animate-bounce tracking-tight">
        404
      </h1>
      <p className="text-2xl md:text-3xl font-semibold mb-2 text-balance text-center">
        Page Not Found
      </p>
      <p className="text-base md:text-lg mb-8 text-center max-w-md text-gray-600">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
