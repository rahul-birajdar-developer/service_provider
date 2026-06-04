import HowItWork from "./HowItWork";
import Heading from "./Heading";

function HomePage() {

    const openModal = () => {
        console.log("Opening Model!!")
    }

    return (
        <>
            <section className="hero">
                <div className="hero-bg"></div>
                <div className="hero-grid"></div>
                <div className="hero-content">
                    <div className="hero-badge">🔥 Trusted by 00+ homeowners</div>
                    <h1>Your Home, <em>Fixed Fast</em> by Pros</h1>
                    <p>Book verified plumbers, electricians, cleaners, carpenters & more — in minutes. Real-time tracking,
                        guaranteed quality.</p>
                    <div className="hero-actions">
                        <button className="btn-large btn-accent" onClick={openModal('signup')}>Book a Service</button>
                        <button className="btn-large btn-outline"
                        >Meet Our Pros</button>
                    </div>
                    <div className="hero-stats">
                        <div className="stat">
                            <div className="stat-num">00+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                        <div className="stat">
                            <div className="stat-num">00+</div>
                            <div className="stat-label">Verified Pros</div>
                        </div>
                        <div className="stat">
                            <div className="stat-num">0.0★</div>
                            <div className="stat-label">Avg Rating</div>
                        </div>
                        <div className="stat">
                            <div className="stat-num">30min</div>
                            <div className="stat-label">Avg Response</div>
                        </div>
                    </div>
                </div>
            </section>
            <HowItWork />
            <Heading />
        </>
    )
}

export default HomePage;