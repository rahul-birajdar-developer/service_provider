import SearchProvider from "./SearchProvider";
import { Link } from "react-router-dom";

function TopRatedProvider() {
    return (
        <>
            <section id="providers">
                <div className="section-label">Featured Pros</div>
                <div className="section-title">Top-rated Service Providers</div>
                <p className="section-sub">Every provider is background-verified, insured, and rated by real customers.</p>
                <SearchProvider />
                <div className="providers-grid">
                    <div className="provider-card fade-up">
                        <div className="provider-header">
                            <div className="provider-avatar" style={{ background: "rgba(59,130,246,0.15)", color: "#60a5fa" }}>RK</div>
                            <div className="provider-info">
                                <h4>Rajesh Kumar</h4>
                                <span>Plumber · 8 yrs exp</span>
                            </div>
                        </div>
                        <div className="rating-row"><span className="stars">★★★★★</span> 4.9 (312 reviews)</div>
                        <div className="provider-tags">
                            <span className="badge badge-verified">✓ Verified</span>
                            <span className="badge badge-top">🏆 Top Rated</span>
                        </div>
                        <div className="provider-tags">
                            <span className="tag">Pipe Repair</span><span className="tag">Water Tanks</span><span
                                className="tag">Drainage</span>
                        </div>
                        <div className="provider-footer">
                            <div className="price">₹250<span>/hr</span></div>
                            <Link to={'/booking'}><button className="btn-book" >Book Now</button></Link>
                        </div>
                    </div>

                    <div className="provider-card fade-up">
                        <div className="provider-header">
                            <div className="provider-avatar" style={{ background: "rgba(249,115,22,0.15)", color: "#fb923c" }}>AP</div>
                            <div className="provider-info">
                                <h4>Anil Pawar</h4>
                                <span>Electrician · 12 yrs exp</span>
                            </div>
                        </div>
                        <div className="rating-row"><span className="stars">★★★★★</span> 4.8 (287 reviews)</div>
                        <div className="provider-tags">
                            <span className="badge badge-verified">✓ Verified</span>
                            <span className="badge badge-top">🏆 Top Rated</span>
                        </div>
                        <div className="provider-tags">
                            <span className="tag">Wiring</span><span className="tag">MCB/Fuse</span><span className="tag">Fans & ACs</span>
                        </div>
                        <div className="provider-footer">
                            <div className="price">₹300<span>/hr</span></div>
                            <button className="btn-book" >Book Now</button>
                        </div>
                    </div>

                    <div className="provider-card fade-up">
                        <div className="provider-header">
                            <div className="provider-avatar" style={{ background: "rgba(34,197,94,0.15)", color: "#4ade80" }}>SM</div>
                            <div className="provider-info">
                                <h4>Sunita Mahadik</h4>
                                <span>Cleaner · 5 yrs exp</span>
                            </div>
                        </div>
                        <div className="rating-row"><span className="stars">★★★★★</span> 5.0 (189 reviews)</div>
                        <div className="provider-tags">
                            <span className="badge badge-verified">✓ Verified</span>
                        </div>
                        <div className="provider-tags">
                            <span className="tag">Deep Clean</span><span className="tag">Kitchen</span><span className="tag">Bathroom</span>
                        </div>
                        <div className="provider-footer">
                            <div className="price">₹180<span>/hr</span></div>
                            <button className="btn-book" >Book Now</button>
                        </div>
                    </div>

                    <div className="provider-card fade-up">
                        <div className="provider-header">
                            <div className="provider-avatar" style={{ background: "rgba(168,85,247,0.15)", color: "#c084fc" }}>VD</div>
                            <div className="provider-info">
                                <h4>Vijay Deshmukh</h4>
                                <span>Carpenter · 15 yrs exp</span>
                            </div>
                        </div>
                        <div className="rating-row"><span className="stars">★★★★☆</span> 4.7 (241 reviews)</div>
                        <div className="provider-tags">
                            <span className="badge badge-verified">✓ Verified</span>
                            <span className="badge badge-top">🏆 Expert</span>
                        </div>
                        <div className="provider-tags">
                            <span className="tag">Furniture</span><span className="tag">Doors</span><span className="tag">Modular</span>
                        </div>
                        <div className="provider-footer">
                            <div className="price">₹350<span>/hr</span></div>
                            <button className="btn-book" >Book Now</button>
                        </div>
                    </div>

                    <div className="provider-card fade-up">
                        <div className="provider-header">
                            <div className="provider-avatar" style={{ background: "rgba(239,68,68,0.15)", color: "#f87171" }}>MS</div>
                            <div className="provider-info">
                                <h4>Mohit Sharma</h4>
                                <span>Painter · 7 yrs exp</span>
                            </div>
                        </div>
                        <div className="rating-row"><span className="stars">★★★★★</span> 4.9 (163 reviews)</div>
                        <div className="provider-tags">
                            <span className="badge badge-verified">✓ Verified</span>
                        </div>
                        <div className="provider-tags">
                            <span className="tag">Interior</span><span className="tag">Exterior</span><span className="tag">Texture</span>
                        </div>
                        <div className="provider-footer">
                            <div className="price">₹220<span>/hr</span></div>
                            <button className="btn-book" >Book Now</button>
                        </div>
                    </div>

                    <div className="provider-card fade-up">
                        <div className="provider-header">
                            <div className="provider-avatar" style={{ background: "rgba(6,182,212,0.15)", color: "#22d3ee" }}>PJ</div>
                            <div className="provider-info">
                                <h4>Priya Jadhav</h4>
                                <span>AC Technician · 9 yrs exp</span>
                            </div>
                        </div>
                        <div className="rating-row"><span className="stars">★★★★★</span> 4.8 (208 reviews)</div>
                        <div className="provider-tags">
                            <span className="badge badge-verified">✓ Verified</span>
                            <span className="badge badge-top">🏆 Top Rated</span>
                        </div>
                        <div className="provider-tags">
                            <span className="tag">Installation</span><span className="tag">Gas Refill</span><span
                                className="tag">Service</span>
                        </div>
                        <div className="provider-footer">
                            <div className="price">₹400<span>/hr</span></div>
                            <button className="btn-book" >Book Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TopRatedProvider;