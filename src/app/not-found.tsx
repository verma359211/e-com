/* eslint-disable @next/next/no-html-link-for-pages */
export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
			<h1 className="text-4xl font-bold text-gray-800">404 - Page Not Found</h1>
			<p className="mt-4 text-gray-600">
			</p>
			<a
				href="/"
				className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
			>
				Go Back to Home
			</a>
		</div>
	);
}
