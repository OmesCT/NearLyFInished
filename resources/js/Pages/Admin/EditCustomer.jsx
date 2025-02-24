import React from "react";
import { useForm, Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function EditCustomer({ reservations }) {
    const { data, setData, post, processing } = useForm({
        first_name: reservations.first_name,
        email: reservations.email,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/admin/update/${reservations.id}`);
    };

    return (
        <AuthenticatedLayout>
            <Head title="Edit Customer" />
            <h1>แก้ไขข้อมูลลูกค้า</h1>
            <form onSubmit={handleSubmit}>
                <label>ชื่อ: <input type="text" value={data.first_name} onChange={e => setData('first_name', e.target.value)} /></label>
                <label>อีเมล: <input type="email" value={data.email} onChange={e => setData('email', e.target.value)} /></label>
                <button type="submit" disabled={processing}>บันทึก</button>
            </form>
        </AuthenticatedLayout>
    );
}
