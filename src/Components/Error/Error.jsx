import { Helmet } from "react-helmet";
import { Link, useLocation } from "react-router-dom";
const Error = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Helmet>
        <title>Error - Page not found</title>
        <meta name="description" content="Error" />
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-4">Page Not Found</p>
      <p className="text-gray-600 mb-4">
        The page <span className="font-bold">{location.pathname}</span> does not
        exist.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Go back to Home
      </Link>
    </div>
  );
};

export default Error;
