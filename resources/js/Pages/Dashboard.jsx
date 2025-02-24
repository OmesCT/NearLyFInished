import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import Footer from '@/Components/Footer';


export default function Dashboard() {



    return (
        <div>
            <AuthenticatedLayout>
                <Head title="Home" />

                <div className="py-20">
                    <div className="py-10 px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-7xl">
                            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                                <div className="flex flex-col md:flex-row items-center gap-12">
                                    <div className="flex-1">
                                        <p className='font-mono font-bold text-4xl mt-8'>SH Shabu</p>
                                        <p className='font-mono font-bold text-3xl mb-8'>สาขามหาวิทยาลัยแม่โจ้</p>

                                        <p>เปิดประสบการณ์ชาบูสุดฟินกับน้ำซุปเข้มข้น วัตถุดิบสดใหม่ และน้ำจิ้มสูตรเด็ด</p>
                                        <p>มื้อนี้พร้อมลุยให้สุด แล้วซดน้ำซุปให้เกลี้ยง!</p>
                                        <p>คนกินตาย คนคายรอด</p>
                                    </div>
                                    <div className="flex flex-1 flex-row justify-center items-center gap-4">
                                        <img src="https://scontent.fbkk29-9.fna.fbcdn.net/v/t1.15752-9/479508997_1137064934349914_3911166631519261435_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=BQrve5Kry_IQ7kNvgGf6EjM&_nc_oc=Adj-Ro5HZT-bLpabnyMnMQ-uPLGXETezfald5XC06-a2hifnov6yAAwQI1Jc5RamAJU&_nc_zt=23&_nc_ht=scontent.fbkk29-9.fna&oh=03_Q7cD1gETffQ8TfM6XNa3wp_PWvWMcHtd4bLMTSC0AjoXsm7JIA&oe=67E0E70A"
                                            alt="Shabu"
                                            className="w-1/2 h-auto rounded-lg shadow-md"
                                        />
                                        <img src="https://scontent.fbkk29-8.fna.fbcdn.net/v/t1.15752-9/475274608_951048037161751_835406815299160876_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=qI8_-mmU_noQ7kNvgFDYUqS&_nc_oc=AdjS70fUb_PxYFjUD2VkmLrMN3WcJnaAbRhq-5sP6skJcgLfSNmGubPgOoJJGEiZ_nA&_nc_zt=23&_nc_ht=scontent.fbkk29-8.fna&oh=03_Q7cD1gEVccot7nkJiYRMgYa-a3lt2gIXh5ba_vqQMJIdGpwsWg&oe=67E1021A"
                                            alt="Shabu"
                                            className="w-1/2 h-auto rounded-lg shadow-md"
                                        />
                                    </div>

                                </div>

                                <div className="flex flex-col md:flex-row gap-12 mb-10">
                                    {/* เปิดทำการ */}
                                    <div className="mt-2 flex items-start space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <div className="flex flex-col">
                                            <span>เปิดทุกวันพุธ-อาทิตย์</span>
                                            <p>เวลา 10.00 น. - 22.00 น.</p>
                                        </div>
                                    </div>

                                    {/* รายละเอียดเพิ่มเติม */}
                                    <div className="mt-4 flex items-start ">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                                        </svg>
                                        <div className="flex flex-col">
                                            <span>โปรโมชั่นมา10จ่าย8!!</span>
                                            <p>ตั้งแต่วันนี้ถึงสิ้นเดือนกุมภาพันธ์</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-center text-center">
                                    <span className="font-mono font-bold text-2xl mt-20">แนะนำโต๊ะ</span>
                                    <p className="mt-6">โต๊ะชาบูที่ออกแบบให้เหมาะกับจำนวนคนที่นั่งและรูปแบบหม้อชาบู โดยคำนึงถึงพื้นที่การใช้งาน ความสะดวกสบาย และระบบระบายความร้อนของเตา</p>

                                </div>
                                <div className="flex flex-col md:flex-row gap-8 justify-center mt-14 mb-10 mx-auto ">
                                    <img
                                        src="https://scontent.fbkk29-5.fna.fbcdn.net/v/t1.15752-9/477614701_533661746120025_6041977489012638858_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=VCjMeN5vb0UQ7kNvgF4RhA9&_nc_oc=Adg7lGl3ApSlCO_5JL2_k-0AGP_0dSSpCrXa-5FfNuqyZui3rnomNA7BbuGEflsdWYw&_nc_zt=23&_nc_ht=scontent.fbkk29-5.fna&oh=03_Q7cD1gHGpMycr9yVyBJR6j94Xg50VxtUsLBMt58XR__fulOLHg&oe=67E10437"
                                        alt="Shabu"
                                        className="w-1/4 h-auto rounded-lg shadow-md"
                                    />
                                    <img
                                        src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/480813550_662133376250123_717770680631191110_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=BRe_w2YpmzwQ7kNvgE3U2P5&_nc_oc=AdjZeHZVmgt24LUvKGYJ_dNFxNphvchjhSdxGXwJcgZUdcghfjg_0Mw1xtIm3AKe_Lg&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&oh=03_Q7cD1gFc-KC_eshYjjmcmV_alfT7_4YFcLZvtBmphfyikgTDIw&oe=67E0F6FB"
                                        alt="Shabu"
                                        className="w-1/4 h-auto rounded-lg shadow-md"
                                    />
                                    <img
                                        src="https://scontent.fbkk29-6.fna.fbcdn.net/v/t1.15752-9/477953949_1171821130970234_5217681455328891485_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tW_icfz9j3IQ7kNvgH4pBAp&_nc_oc=AdgFwf5CbpO3j1TtSSBxcK5KrWfybACUhX-W8mmtr1O41KJAXhN1oZ9I3iEpKx99wGs&_nc_zt=23&_nc_ht=scontent.fbkk29-6.fna&oh=03_Q7cD1gFi0JSgaoj32kWPC8w79ZH9On1LWfFlSZy0hMr_mHozzQ&oe=67E1274F"
                                        alt="Shabu"
                                        className="w-1/4 h-auto rounded-lg shadow-md"
                                    />
                                </div >
                                <div className="flex justify-center mt-10">
                                    <Link
                                        href={route('reserve.index')}
                                        className="px-6 py-3 bg-red-900 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition"
                                    >
                                        จองโต๊ะเลย!
                                    </Link>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
            <Footer /></div>
    );
}


