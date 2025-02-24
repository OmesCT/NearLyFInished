import React from "react";
import { usePage, Link, router } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard() {
    const { tables = [], reservations = [], auth } = usePage().props;

    const user = auth?.user;
    const isAdmin = user && /^csmju(0[1-9]|[1-9][0-9])@gmail\.com$/.test(user.email);

    if (!isAdmin) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="text-red-600 text-xl font-semibold">ไม่มีสิทธิ์เข้าถึงหน้านี้</div>
            </div>
        );
    }

    return (
        <AuthenticatedLayout>
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-2xl font-bold text-gray-700 mb-4">Admin Dashboard</h1>
                <Panel reservations={reservations} />
            </div>
        </AuthenticatedLayout>
    );
}

function Panel({ reservations }) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-600 mb-4">รายการจองโต๊ะ</h2>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200">
                    <thead className="bg-gray-100">
                        <tr className="text-left">
                            <th className="border border-gray-200 px-4 py-2">โต๊ะ</th>
                            <th className="border border-gray-200 px-4 py-2">ชื่อลูกค้า</th>
                            <th className="border border-gray-200 px-4 py-2">เบอร์</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">การกระทำ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.length > 0 ? (
                            reservations.map((reservation) => (
                                <tr key={reservation.id} className="border-b hover:bg-gray-50">
                                    <td className="border border-gray-200 px-4 py-2">{reservation.table_id}</td>
                                    <td className="border border-gray-200 px-4 py-2">{reservation.first_name}</td>
                                    <td className="border border-gray-200 px-4 py-2">{reservation.phone}</td>
                                    <td className="border border-gray-200 px-4 py-2 text-center">
                                        <Link
                                            href={`/admin/edit/${reservation.id}`}
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-all duration-200"
                                        >
                                            แก้ไข
                                        </Link>
                                        <button
                                            onClick={() => router.delete(`/admin/delete/${reservation.id}`)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md ml-2 transition-all duration-200"
                                        >
                                            ลบ
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center text-gray-500 py-4">
                                    ไม่มีข้อมูลการจอง
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
