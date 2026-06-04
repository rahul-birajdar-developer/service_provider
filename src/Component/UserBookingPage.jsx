import "./bookingPage.css"

function UserBookingPage() {
    return (
        <>
            <div className="page" id="page-bookings">
                <div className="booking-layout">
                    <div className="booking-header">
                        <div>
                            <h1>My Bookings</h1>
                            <div style={{ fontSize: "13px", color: "#7a5c44", marginTop: "3px" }}>6 total · 2 upcoming</div>
                        </div>
                        <button className="btn btn-primary" >+ Book New Service</button>
                    </div>

                    <div className="booking-filter-bar">
                        <div className="bk-filter active" >All (6)</div>
                        <div className="bk-filter" >🔵 Upcoming (2)</div>
                        <div className="bk-filter" >🟢 Ongoing (1)</div>
                        <div className="bk-filter" >✅ Completed (2)</div>
                        <div className="bk-filter" >❌ Cancelled (1)</div>
                    </div>

                    <div id="bookingsList">
                        {/* <!-- BOOKING 1 – Upcoming --> */}
                        <div className="booking-card" data-status="upcoming">
                            <div className="bk-top">
                                <div className="bk-status-stripe" style={{ background: "#2563a8" }}></div>
                                <div className="bk-top-inner">
                                    <div className="bk-provider-avatar" style={{ background: "#dbeafe" }}>🧹</div>
                                    <div className="bk-provider-info">
                                        <div className="bk-provider-name">Meena Didi</div>
                                        <div className="bk-service-name">Deep Home Cleaning (2BHK)</div>
                                        <div className="bk-tags">
                                            <span className="bk-tag bk-tag-cat">Home Cleaning</span>
                                            <span className="bk-tag bk-tag-type">At Home</span>
                                        </div>
                                    </div>
                                    <div className="bk-right-top">
                                        <div className="bk-id">#BK-2024-0081</div>
                                        <div className="bk-status upcoming">🔵 Upcoming</div>
                                        <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                                            <button className="btn btn-sm btn-outline">📞 Call</button>
                                            <button className="btn btn-sm btn-outline" style={{ color: "#c0392b" }} >Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bk-timeline">
                                <div className="timeline-steps">
                                    <div className="tl-step done"><div className="tl-dot">✓</div><div className="tl-label">Requested</div></div>
                                    <div className="tl-step done"><div className="tl-dot">✓</div><div className="tl-label">Confirmed</div></div>
                                    <div className="tl-step current"><div className="tl-dot">→</div><div className="tl-label">Scheduled</div></div>
                                    <div className="tl-step"><div className="tl-dot">4</div><div className="tl-label">In Progress</div></div>
                                    <div className="tl-step"><div className="tl-dot">5</div><div className="tl-label">Completed</div></div>
                                </div>
                            </div>
                            <div className="bk-body">
                                <div className="bk-detail"><div className="bk-label">📅 Date</div><div className="bk-val">Thu, 15 May 2025</div></div>
                                <div className="bk-detail"><div className="bk-label">🕐 Time</div><div className="bk-val">9:00 AM – 1:00 PM</div></div>
                                <div className="bk-detail"><div className="bk-label">📍 Address</div><div className="bk-val">Koregaon Park, Pune</div></div>
                                <div className="bk-detail"><div className="bk-label">💰 Amount</div><div className="bk-val price">₹ 899</div></div>
                            </div>
                            <div className="bk-bottom">
                                <div style={{ fontSize: "12px", background: "#e8f5ef", color: "#2d7a5f", padding: "5px 12px", borderRadius: "20px", fontWeight: "600" }}>✅ Paid — UPI</div>
                                <button className="btn btn-sm btn-outline" style={{ marginLeft: "auto" }} >📄 Invoice</button>
                                <button className="btn btn-sm btn-outline" >🗓️ Reschedule</button>
                            </div>
                        </div>

                        {/* <!-- BOOKING 2 – Upcoming --> */}
                        <div className="booking-card" data-status="upcoming">
                            <div className="bk-top">
                                <div className="bk-status-stripe" style={{ background: "#2563a8" }}></div>
                                <div className="bk-top-inner">
                                    <div className="bk-provider-avatar" style={{ background: "#fff3e8" }}>🔧</div>
                                    <div className="bk-provider-info">
                                        <div className="bk-provider-name">Suresh Bhai</div>
                                        <div className="bk-service-name">Pipe Leakage Repair & Fitting</div>
                                        <div className="bk-tags">
                                            <span className="bk-tag bk-tag-cat">Plumbing</span>
                                            <span className="bk-tag bk-tag-type">At Home</span>
                                        </div>
                                    </div>
                                    <div className="bk-right-top">
                                        <div className="bk-id">#BK-2024-0082</div>
                                        <div className="bk-status upcoming">🔵 Upcoming</div>
                                        <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
                                            <button className="btn btn-sm btn-outline" >📞 Call</button>
                                            <button className="btn btn-sm btn-outline" style={{ color: "var(--red)" }} >Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bk-body">
                                <div className="bk-detail"><div className="bk-label">📅 Date</div><div className="bk-val">Fri, 16 May 2025</div></div>
                                <div className="bk-detail"><div className="bk-label">🕐 Time</div><div className="bk-val">3:00 PM – 5:00 PM</div></div>
                                <div className="bk-detail"><div className="bk-label">📍 Address</div><div className="bk-val">Koregaon Park, Pune</div></div>
                                <div className="bk-detail"><div className="bk-label">💰 Amount</div><div className="bk-val price">₹ 450</div></div>
                            </div>
                            <div className="bk-bottom">
                                <div style={{ fontSize: "12px", background: "var(--gold-light)", color: "var(--gold)", padding: "5px 12px", borderRadius: "20px", fontWeight: "600" }}>⏳ Pay on Completion</div>
                                <button className="btn btn-sm btn-outline" style={{ marginLeft: "auto" }}>🗓️ Reschedule</button>
                            </div>
                        </div>

                        {/* <!-- BOOKING 3 – Ongoing --> */}
                        <div className="booking-card" data-status="ongoing">
                            <div className="bk-top">
                                <div className="bk-status-stripe" style={{ background: "#2d7a5f" }}></div>
                                <div className="bk-top-inner">
                                    <div className="bk-provider-avatar" style={{ background: "#fce7f3" }}>💇</div>
                                    <div className="bk-provider-info">
                                        <div className="bk-provider-name">Kavya Beauty Parlour</div>
                                        <div className="bk-service-name">Full Hair Treatment + Facial</div>
                                        <div className="bk-tags">
                                            <span className="bk-tag bk-tag-cat">Beauty & Salon</span>
                                            <span className="bk-tag bk-tag-type">At Home</span>
                                        </div>
                                    </div>
                                    <div className="bk-right-top">
                                        <div className="bk-id">#BK-2024-0079</div>
                                        <div className="bk-status ongoing" style={{ animation: "pulse 2s infinite" }}>🟢 In Progress</div>
                                        <button className="btn btn-sm btn-green" style={{ marginTop: "4px" }}>📍 Track Live</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bk-timeline">
                                <div className="timeline-steps">
                                    <div className="tl-step done"><div className="tl-dot">✓</div><div className="tl-label">Requested</div></div>
                                    <div className="tl-step done"><div className="tl-dot">✓</div><div className="tl-label">Confirmed</div></div>
                                    <div className="tl-step done"><div className="tl-dot">✓</div><div className="tl-label">Scheduled</div></div>
                                    <div className="tl-step current"><div className="tl-dot">★</div><div className="tl-label">In Progress</div></div>
                                    <div className="tl-step"><div className="tl-dot">5</div><div className="tl-label">Done</div></div>
                                </div>
                            </div>
                            <div className="bk-body">
                                <div className="bk-detail"><div className="bk-label">📅 Date</div><div className="bk-val">Today, 14 May 2025</div></div>
                                <div className="bk-detail"><div className="bk-label">🕐 Time</div><div className="bk-val">11:00 AM – 2:00 PM</div></div>
                                <div className="bk-detail"><div className="bk-label">📍 Address</div><div className="bk-val">Koregaon Park, Pune</div></div>
                                <div className="bk-detail"><div className="bk-label">💰 Amount</div><div className="bk-val price">₹ 1,299</div></div>
                            </div>
                            <div className="bk-bottom">
                                <div style={{ fontSize: "12px", fontWeight: "600", color: "#2d7a5f", display: "flex", alignItems: "center", gap: "6px" }}>
                                    <span style={{ width: "8px", height: "8px", background: "#2d7a5f", borderRadius: "50%", display: "inline-block", animation: "pulse 1.5s infinite" }}></span>
                                    Service in progress — Kavya is working
                                </div>
                                <button className="btn btn-sm btn-outline" style={{ marginLeft: "auto", color: "var(--red)" }}>🆘 SOS</button>
                            </div>
                        </div>

                        {/* <!-- BOOKING 4 – Completed, needs review --> */}
                        <div className="booking-card" data-status="completed">
                            <div className="bk-top">
                                <div className="bk-status-stripe" style={{ background: "#2d7a5f" }}></div>
                                <div className="bk-top-inner">
                                    <div className="bk-provider-avatar" style={{ background: "#fdf6e3" }}>🍱</div>
                                    <div className="bk-provider-info">
                                        <div className="bk-provider-name">Raj Tiffin Service</div>
                                        <div className="bk-service-name">Monthly Tiffin Subscription (30 days)</div>
                                        <div className="bk-tags">
                                            <span className="bk-tag bk-tag-cat">Tiffin Service</span>
                                            <span className="bk-tag bk-tag-type">Subscription</span>
                                        </div>
                                    </div>
                                    <div className="bk-right-top">
                                        <div className="bk-id">#BK-2024-0074</div>
                                        <div className="bk-status completed">✅ Completed</div>
                                        <button className="btn btn-sm btn-primary" style={{ marginTop: "4px" }} >🔁 Rebook</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bk-body">
                                <div className="bk-detail"><div className="bk-label">📅 Duration</div><div className="bk-val">1 Apr – 30 Apr 2025</div></div>
                                <div className="bk-detail"><div className="bk-label">📦 Deliveries</div><div className="bk-val">30 / 30 Done</div></div>
                                <div className="bk-detail"><div className="bk-label">📍 Address</div><div className="bk-val">Koregaon Park, Pune</div></div>
                                <div className="bk-detail"><div className="bk-label">💰 Amount</div><div className="bk-val price">₹ 2,700</div></div>
                            </div>
                            <div className="bk-bottom">
                                <div className="bk-rating-prompt">
                                    <span style={{ fontSize: "13px", fontWeight: "600" }}>Rate your experience:</span>
                                    <div className="stars-input" data-booking="74">
                                        <span className="star" >★</span>
                                        <span className="star" >★</span>
                                        <span className="star" >★</span>
                                        <span className="star" >★</span>
                                        <span className="star" >★</span>
                                    </div>
                                </div>
                                <button className="btn btn-sm btn-outline" >📄 Invoice</button>
                            </div>
                        </div>

                        {/* <!-- BOOKING 5 – Completed with review --> */}
                        <div className="booking-card" data-status="completed">
                            <div className="bk-top">
                                <div className="bk-status-stripe" style={{ background: "#2d7a5f" }}></div>
                                <div className="bk-top-inner">
                                    <div className="bk-provider-avatar" style={{ background: "#dbeafe" }}>🔌</div>
                                    <div className="bk-provider-info">
                                        <div className="bk-provider-name">Rajesh Electricals</div>
                                        <div className="bk-service-name">Fan & Light Installation (3 rooms)</div>
                                        <div className="bk-tags">
                                            <span className="bk-tag bk-tag-cat">Electrician</span>
                                            <span className="bk-tag bk-tag-type">At Home</span>
                                        </div>
                                    </div>
                                    <div className="bk-right-top">
                                        <div className="bk-id">#BK-2024-0069</div>
                                        <div className="bk-status completed">✅ Completed</div>
                                        <button className="btn btn-sm btn-primary" style={{ marginTop: "4px" }} >🔁 Rebook</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bk-body">
                                <div className="bk-detail"><div className="bk-label">📅 Date</div><div className="bk-val">5 May 2025</div></div>
                                <div className="bk-detail"><div className="bk-label">🕐 Duration</div><div className="bk-val">2.5 hours</div></div>
                                <div className="bk-detail"><div className="bk-label">📍 Address</div><div className="bk-val">Koregaon Park, Pune</div></div>
                                <div className="bk-detail"><div className="bk-label">💰 Amount</div><div className="bk-val price">₹ 750</div></div>
                            </div>
                            <div className="bk-bottom">
                                <div className="bk-rated">
                                    <span style={{ fontSize: "13px", fontWeight: "600", color: "#7a5c44" }}>Your rating:</span>
                                    <div className="given-stars">
                                        <span className="given-star">★</span><span className="given-star">★</span><span className="given-star">★</span><span className="given-star">★</span><span style={{ color: "#d4c4b0", fontSize: "14px" }}>★</span>
                                    </div>
                                    <span style={{ fontSize: "12px", color: "#7a5c44" }}>(4/5)</span>
                                </div>
                                <button className="btn btn-sm btn-outline" style={{ marginLeft: "auto" }}>📄 Invoice</button>
                            </div>
                        </div>

                        {/* <!-- BOOKING 6 – Cancelled --> */}
                        <div className="booking-card" data-status="cancelled">
                            <div className="bk-top">
                                <div className="bk-status-stripe" style={{ background: "#c0392b" }}></div>
                                <div className="bk-top-inner">
                                    <div className="bk-provider-avatar" style={{ background: "#fde8e8" }}>🚗</div>
                                    <div className="bk-provider-info">
                                        <div className="bk-provider-name">SparkClean Car Wash</div>
                                        <div className="bk-service-name">Full Car Wash + Interior Cleaning</div>
                                        <div className="bk-tags">
                                            <span className="bk-tag bk-tag-cat">Car Wash</span>
                                            <span className="bk-tag bk-tag-type">At Doorstep</span>
                                        </div>
                                    </div>
                                    <div className="bk-right-top">
                                        <div className="bk-id">#BK-2024-0071</div>
                                        <div className="bk-status cancelled">❌ Cancelled</div>
                                        <button className="btn btn-sm btn-primary" style={{ marginTop: "4px" }} >🔁 Rebook</button>
                                    </div>
                                </div>
                            </div>
                            <div className="bk-body">
                                <div className="bk-detail"><div className="bk-label">📅 Date</div><div className="bk-val">10 May 2025</div></div>
                                <div className="bk-detail"><div className="bk-label">❌ Reason</div><div className="bk-val" style={{ color: "#c0392b" }}>Provider unavailable</div></div>
                                <div className="bk-detail"><div className="bk-label">📍 Address</div><div className="bk-val">Koregaon Park, Pune</div></div>
                                <div className="bk-detail"><div className="bk-label">💰 Refund</div><div className="bk-val price">₹ 299</div></div>
                            </div>
                            <div className="bk-bottom">
                                <div style={{ fontSize: "12px", background: "#e8f5ef", color: "#2d7a5f", padding: "5px 12px", borderRadius: "20px", fontWeight: "600" }}>💚 Refund credited to wallet</div>
                                <button className="btn btn-sm btn-outline" style={{ marginLeft: "auto" }}>Find Similar Service</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UserBookingPage;