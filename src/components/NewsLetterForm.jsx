import { useState } from "react";
import Swal from "sweetalert2";

const NewsLetterForm = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const customClass = {
        button: "transition-all duration-200 p-4 mt-5 bg-gradient-to-r bg-[#242742] hover:from-pink-400 hover:to-red-500 rounded-lg text-gray-200 font-bold",
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.trim()) {
            return setError("Valid email required");
        } else if (!isValidEmail(email)) {
            return setError("Invalid email format");
        } else {
            Swal.fire({
                html: `
                <div class="pt-[35%] md:p-0">
                <img src="/img/icon-success.svg" alt="" />

                 <h1 class="my-8 text-left text-4xl font-bold text-gray-800 md:text-5xl">Thanks for subscribing!</h1>

                <p class="text-left text-base text-gray-700">A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription.</p>
                </div>`,

                customClass: {
                    container: "m-0 p-0",
                    popup: "h-screen lg:h-auto md:py-12 md:px-8  md:rounded-3xl  md:max-w-auto",
                    htmlContainer: "h-[80vh] pt-[30%] md:h-auto",
                    actions: "w-full px-[1.6em] m-0",
                    confirmButton: `${customClass.button} w-full mt-8 `,
                },
                heightAuto: false,
                backdrop: "#242742",
                confirmButtonText: "Dismiss message",
                buttonsStyling: false,
                allowOutsideClick: false,
            });
            setError("");
            setEmail("");
        }
    };

    return (
        <div className="px-8 pt-6 ">
            <form action="" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <label
                            htmlFor="newsLetter"
                            className="text-sm font-bold mb-2"
                        >
                            Email address
                        </label>
                        {error !== "" && (
                            <label
                                htmlFor="newsLetter"
                                className="text-sm font-bold mb-2 text-red-500"
                            >
                                {error}
                            </label>
                        )}
                    </div>

                    <input
                        className={` transition-all duration-200 p-4 border border-gray-400 rounded-lg outline-none focus:border-yellow-700
            ${error !== "" && "focus:border-red-500 bg-red-100 text-red-400"}`}
                        type="text"
                        id="newsLetter"
                        name="email"
                        placeholder="email@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className={customClass.button}>
                        Subscribe to monthly newsletter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewsLetterForm;
