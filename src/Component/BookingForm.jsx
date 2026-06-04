

function BookingForm() {
    return (
        <>
            <div className="modal-overlay" id="modal" >
                <div className="modal">
                    <button className="modal-close" >✕</button>
                    <h2 id="modal-title">Welcome Back</h2>
                    <p id="modal-sub">Sign in to your FixIt Pro account</p>
                    <div className="tabs" id="modal-tabs">
                        <button className="tab active" >Log In</button>
                        <button className="tab" >Sign Up</button>
                    </div>
                    <div id="form-login">
                        <div className="form-group"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
                        <div className="form-group"><label>Password</label><input type="password" placeholder="••••••••" /></div>
                        <button className="form-submit" >Log In</button>
                        <div className="modal-divider">or</div>
                        <a className="admin-link" href="admin.html">Go to Admin Dashboard →</a>
                    </div>
                    <div id="form-signup" style={{display:"block"}}>
                        <div className="form-group"><label>Full Name</label><input type="text" placeholder="Your full name" /></div>
                        <div className="form-group"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
                        <div className="form-group"><label>Phone</label><input type="tel" placeholder="+91 98765 43210" /></div>
                        <div className="form-group"><label>Password</label><input type="password" placeholder="Create password" />
                        </div>
                        <button className="form-submit"
                        >Create Account</button>3
                    </div>
                    <div id="form-provider" style={{ display: "block" }}>
                        <div className="form-group"><label>Full Name</label><input type="text" placeholder="Your full name" /></div>
                        <div className="form-group"><label>Service Category</label>
                            <select>
                                <option>Plumbing</option>
                                <option>Electrical</option>
                                <option>Cleaning</option>
                                <option>Carpentry</option>
                                <option>Painting</option>
                                <option>AC Repair</option>
                            </select>
                        </div>
                        <div className="form-group"><label>Experience (years)</label><input type="number" placeholder="e.g. 5" />
                        </div>
                        <div className="form-group"><label>Email</label><input type="email" placeholder="you@example.com" /></div>
                        <div className="form-group"><label>Phone</label><input type="tel" placeholder="+91 98765 43210" /></div>
                        <button className="form-submit"
                        >Apply as Provider</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookingForm;