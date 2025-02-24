import React from "react";
import { useForm, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EditCustomer({ reservations }) {
    const { data, setData, post, processing } = useForm({
        first_name: reservations?.first_name || '',
        phone: reservations?.phone || '',
        email: reservations?.email || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (reservations && reservations.id) {
            post(`/admin/update/${reservations.id}`, {
                preserveScroll: true,
                onSuccess: () => {
                    console.log("ข้อมูลการจองถูกอัปเดตเรียบร้อยแล้ว");
                },
                onError: (errors) => {
                    console.error("เกิดข้อผิดพลาดในการอัปเดตข้อมูลการจอง", errors);
                }
            });
        } else {
            console.error("ไม่พบ ID การจอง");
        }
    };

    if (!reservations) {
        return (
            <AuthenticatedLayout>
                <Head title="แก้ไขข้อมูลลูกค้า" />
                <div className="text-red-500 text-center mt-10 text-lg font-semibold">ไม่พบข้อมูลการจอง</div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout>
            <Head title="แก้ไขข้อมูลลูกค้า" />
            <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-4 text-center">แก้ไขข้อมูลลูกค้า</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">ชื่อ</label>
                        <input type="text" value={data.first_name} onChange={e => setData('first_name', e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">เบอร์โทร</label>
                        <input type="text" value={data.phone} onChange={e => setData('phone', e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200" required />
                    </div>
                    <div>
                        <label className="block text-gray-700">อีเมล</label>
                        <input type="email" value={data.email} onChange={e => setData('email', e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200" required />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" disabled={processing}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50">
                            {processing ? "กำลังบันทึก..." : "บันทึก"}
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
