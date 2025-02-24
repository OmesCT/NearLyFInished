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
                <div className="text-red-500 text-center mt-10">ไม่พบข้อมูลการจอง</div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout>
            <Head title="แก้ไขข้อมูลลูกค้า" />
            <h1>แก้ไขข้อมูลลูกค้า</h1>
            <form onSubmit={handleSubmit}>
                <label>ชื่อ: <input type="text" value={data.first_name} onChange={e => setData('first_name', e.target.value)} /></label>
                <label>เบอร์: <input type="text" value={data.phone} onChange={e => setData('phone', e.target.value)} /></label>
                <label>อีเมล: <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} /></label>
                <button type="submit" disabled={processing}>บันทึก</button>
            </form>
        </AuthenticatedLayout>
    );
}
