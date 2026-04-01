"use client";
import Link from "next/link";
import { FC } from "react";

const Navbar: FC = () => {
    return (
        <nav className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-lg">
            <h1 className="text-xl font-bold">Artem Tutoring</h1>
            <div className="space-x-6">
                <Link href="/">בית</Link>
                <Link href="/courses">קורסים</Link>
                <Link href="/contact">צור קשר</Link>
            </div>
        </nav>
    );
};

export default Navbar;
