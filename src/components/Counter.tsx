export default function Counter() {
    return (
        <section className="h-full grid">
            <div className="max-w-xl m-auto w-full border-8 border-red-400">
                <div className="grid space-y-32 py-10">
                    <h1 className="text-2xl font-bold text-center">Day Since last incident</h1>
                    <h1 className="text-4xl font-bold text-center">0</h1>
                    <div className="m-auto">
                        <button className="py-3 bg-red-500 px-5 text-white font-semibold m-1 mt-4 hover:bg-red-600">Decrement</button>
                        <button className="py-3 bg-red-500 px-5 text-white font-semibold m-1 mt-4 hover:bg-red-600">Set</button>
                        <button className="py-3 bg-red-500 px-5 text-white font-semibold m-1 mt-4 hover:bg-red-600">Increment</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
