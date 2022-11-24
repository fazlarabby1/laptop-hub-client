import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className='text-4xl italic my-10 font-semibold text-center underline underline-offset-8'>Blogs</h2>
            <section className="bg-base-100">
                <div className="container flex flex-col justify-center px-4 py-8 md:p-8">
                    <div className="space-y-4">
                        <details className="border rounded-lg shadow-lg w-4/5 mx-auto mb-8">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">What are the different ways to manage a state in a React Application?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-2">State represents the value of the dynamic properties of a react component at a given instance. There are various ways to manage state in a React Application. Among them, here are the four main types of state management in React App. <br />
                                <b>Local state:</b> Local state is used to manage data in one or another component. In react, we mostly use the <b>useState hook</b> to manage the Local State. <br />
                                <b>Global state:</b> Global state is used to manage data globally. That means it is used to manage data across various components. For global state, we mostly use the react <b>useContext method</b>.<br />
                                <b>Server state:</b> The Server state is used to manage data that comes from an outside server and needs to be integrated with our UI state. For example, we use the <b>useEffect hook</b> to fetch data from the server site to show the data on our UI. <br />
                                <b>URL state:</b> Sometimes we need to pass data through our query parameters. These data are stored inside the URL state. Depending on the data, we get information from the server site through our URL.</p>
                        </details>
                        <details className="border rounded-lg shadow-lg w-4/5 mx-auto mb-8">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">How does prototypical inheritance work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">JavaScript is an object oriented programming language. In JavaScript, one object can get the properties of another object which is called inheriting the properties. The object where one object inherits the properties is known as prototype. This method solves the problem of code redundancy. That means we do not have to write one method in multiple objects individually. This saves time also.</p>
                        </details>
                        <details className="border rounded-lg shadow-lg w-4/5 mx-auto mb-8">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">What are the different ways to manage a state in a React Application?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-2">State represents the value of the dynamic properties of a react component at a given instance. There are various ways to manage state in a React Application. Among them, here are the four main types of state management in React App. <br />
                                <b>Local state:</b> Local state is used to manage data in one or another component. In react, we mostly use the <b>useState hook</b> to manage the Local State. <br />
                                <b>Global state:</b> Global state is used to manage data globally. That means it is used to manage data across various components. For global state, we mostly use the react <b>useContext method</b>.<br />
                                <b>Server state:</b> The Server state is used to manage data that comes from an outside server and needs to be integrated with our UI state. For example, we use the <b>useEffect hook</b> to fetch data from the server site to show the data on our UI. <br />
                                <b>URL state:</b> Sometimes we need to pass data through our query parameters. These data are stored inside the URL state. Depending on the data, we get information from the server site through our URL.</p>
                        </details>
                        <details className="border rounded-lg shadow-lg w-4/5 mx-auto mb-8">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">What is a unit test? Why should we write unit tests?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">In software development, unit tests are the process of testing small parts of an application to authenticate that the application is working properly. In the unit tests, a developer tests small parts of the application individually to check whether the part is properly working independently or not.<br />Unit testing is very important. Because it saves a lot of time during system testing and integration testing. If a developer does not go through the unit testing process then there is a higher chance of defects in the application. After the completion of the application, it becomes very difficult to find the area of bugs. Therefore, a developer must conduct unit testing while developing.</p>
                        </details>
                        <details className="border rounded-lg shadow-lg w-4/5 mx-auto mb-8">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400 font-semibold text-xl">React vs Angular vs Vue.</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4">Today, the most common frameworks for developing front-end are <b>React, Angular, and Vue</b>. These 3 frameworks are almost the same. These are component based frameworks and are used for creating UI features. But these 3 frameworks are not fully similar. <br />
                            Among these 3, the most popular framework is React, then comes Vue, and then Angular. <br />
                            Angular is built entirely in Typescript and every project on Angular is structured in modules, components, and services. Every module of Angular must contain a root module and a root component. Whereas, React doesn't require a specific structure. With just a few lines of coding one can create a simple react app. The React application is written in JSX format which contains HTML and JavaScript. The building blocks of react are the components. On the other hand, the Vue JS is made of reusable components. Vue JS components are Single File Components. Vue JS has its own library which is called the Vuex.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;