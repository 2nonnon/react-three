import Attribute from "./Attribute";
import Background from "./Background";
import Header from "./Header";
import Menu from "./Menu";

function Charactor() {
    return (
        <div style={{ position: 'relative', height: '100vh' }}>
            <Background />
            <section className="relative z-10 pointer-events-none">
                <Header />
                <main className="flex justify-between">
                    <Menu />
                    <Attribute />
                </main>
            </section>
        </div >
    )
}

export default Charactor