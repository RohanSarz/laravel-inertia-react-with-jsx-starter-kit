import React from "react";

import { Link } from "@inertiajs/react";

function Home({ posts }) {
    console.log(posts);
    return (
        <div className="h-screen w-full bg-indigo-700 flex justify-center items-baseline ">
            <h1 className="text-3xl  text-dark tracking-wider font-medium pt-20">
                Welcome home, Start your{" "}
                <span
                    title=" Laravel | React| Inertia "
                    className="italic bg-amber-200 px-2"
                >
                    larentia
                </span>{" "}
                journey.
            </h1>
        </div>
    );
}

export default Home;
