export default function Footer() {
    return (
        <footer className="bg-red-900 text-white py-10 flex justify-center">
            <div className="max-w-5xl w-full px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact */}
                    <div className="text-left">
                        <h3 className="font-semibold text-white mb-5">Contact</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">FB : Shabuja</a></li>
                            <li><a href="#" className="hover:underline">IG : Shabu12121_</a></li>
                        </ul>
                    </div>
                    {/* SH BRAND */}
                    <div className="text-left">
                        <h3 className="font-semibold text-white mb-5">SH BRAND</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">SH แม่โจ้-สันทราย</a></li>
                            <li><a href="#" className="hover:underline">SH บ้านโคกกะโดน</a></li>
                            <li><a href="#" className="hover:underline">SH บ้านไร่</a></li>
                        </ul>
                    </div>
                    {/* PERSONAL DATA PROTECTION */}
                    <div className="text-left">
                        <h3 className="font-semibold text-white mb-5">PERSONAL DATA PROTECTION</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">นโยบายด้านการคุ้มครองข้อมูลส่วนบุคคล</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
