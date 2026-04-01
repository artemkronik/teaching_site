
import Link from "next/link";
import { FC } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home: FC = () => {
    return (
        <>
            <Navbar />
            <main className="p-10 text-center">
                <h1 className="text-4xl font-bold mb-6">
                    ברוך הבא לארטיומ – מורה פרטי לתכנות
                </h1>
                <p className="text-lg mb-8">
                    עם יותר מ־10 שנות ניסיון בלימוד תכנות לילדים, תלמידי תיכון וסטודנטים.
                    אני מלמד Java, C, C++, Web Development ועוד.
                </p>
                <Link
                    href="/courses"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700"
                >
                    גלה את הקורסים
                </Link>
            </main>
            <Footer />
        </>
    );
};

export default Home;
