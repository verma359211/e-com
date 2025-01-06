"use client";

import React from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-red-100 text-red-800">
			<h1 className="text-4xl font-bold">Something went wrong!</h1>
			<p className="mt-4">{error.message}</p>
			<button
				onClick={() => reset()}
				className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
			>
				Try Again
			</button>
		</div>
	);
}
