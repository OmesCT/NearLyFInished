import React from "react";
import { usePage, Head, useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Card, CardContent } from "../../components/ui/card";

export default function Edit() {
    const { booking, tables } = usePage().props;

    // ใช้ useForm เพื่อจัดการฟอร์ม
    const { data, setData, put, processing, errors } = useForm({
        first_name: booking.first_name || '',
        last_name: booking.last_name || '',
        email: booking.email || '',
        phone: booking.phone || '',
        table_id: booking.table_id || '',
    });

    // ฟังก์ชันส่งฟอร์ม
    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/booking/${booking.id}`);
    };

    // ตรวจสอบว่ามีข้อมูล booking และ tables หรือไม่
    if (!booking || !tables) {
        return <div>Loading...</div>;
    }

    return (
        <AuthenticatedLayout>
            <Head title={`Edit Booking for Table ${booking.table ? booking.table.id : ''}`} />
            <div className="mt-10 flex justify-center">
                <Card className="p-4 rounded-xl shadow-lg w-full max-w-4xl">
                    <CardContent className="p-3">
                        <h2 className="text-lg font-bold">Edit Booking</h2>
                        <form onSubmit={handleSubmit}>
                            {/* ชื่อ */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    value={data.first_name}
                                    onChange={(e) => setData('first_name', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                                {errors.first_name && <div className="text-red-500 text-sm">{errors.first_name}</div>}
                            </div>

                            {/* นามสกุล */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">นามสกุล</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={data.last_name}
                                    onChange={(e) => setData('last_name', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                                {errors.last_name && <div className="text-red-500 text-sm">{errors.last_name}</div>}
                            </div>

                            {/* อีเมล */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">อีเมล</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                                {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                            </div>

                            {/* เบอร์โทรศัพท์ */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                />
                                {errors.phone && <div className="text-red-500 text-sm">{errors.phone}</div>}
                            </div>

                            {/* โต๊ะ */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">โต๊ะ</label>
                                <select
                                    name="table_id"
                                    value={data.table_id}
                                    onChange={(e) => setData('table_id', e.target.value)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                >
                                    <option value="">เลือกโต๊ะ</option>
                                    {tables.map((table) => (
                                        <option key={table.id} value={table.id}>
                                            โต๊ะ {table.id} - {table.seat} ที่นั่ง
                                        </option>
                                    ))}
                                </select>
                                {errors.table_id && <div className="text-red-500 text-sm">{errors.table_id}</div>}
                            </div>

                            {/* ปุ่มอัปเดต */}
                            <button
                                type="submit"
                                disabled={processing}
                                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded"
                            >
                                {processing ? 'กำลังอัปเดต...' : 'อัปเดต'}
                            </button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AuthenticatedLayout>
    );
}
