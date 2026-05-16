export default function DownloadAppSection() {
return (
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
    <div>
        <h3 className="font-bold text-xl mb-3">Download Our App</h3>
        <p className="text-gray-500 max-w-sm">
            Experience the convenience of our app! Download now to access all features and stay connected on the go.
            Available on both iOS and Android platforms.
        </p>
    </div>

    <div className="flex space-x-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Download for iOS</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Download for Android</button>
    </div>
</div>
);
}