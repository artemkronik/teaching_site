"use client";
import { FC, FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Contact: FC = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = {
            name: form.fullName.value,
            email: form.email.value,
            message: form.message.value,
        };
        console.log(formData);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            console.log(res);
            if (res.ok) {
                alert("הטופס נשלח! נחזור אליך בהקדם.");
                form.reset();
            } else {
                alert("חלה שגיאה בשליחת הטופס. נסה שוב.");
            }
        } catch (err) {
            alert("שגיאת רשת.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <main className="p-10 max-w-xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">צור קשר</h1>
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-lg rounded-xl p-6 space-y-4"
                >
                    <input
                        type="text"
                        name="fullName"
                        placeholder="שם מלא"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="אימייל"
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="הודעה"
                        rows={5}
                        className="w-full border rounded-lg p-2"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? "שולח..." : "שלח הודעה"}
                    </button>
                </form>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
