function SearchProvider() {

    const showToast = () => {
        console.log("Searching Provider !!")
    }
    return (
        <>
            <div className="search-section">
                <div className="search-card">
                    <h3>🔍 Find the right professional</h3>
                    <div className="search-row">
                        <div className="search-field">
                            <label>Service Type</label>
                            <select title="select">
                                <option>Plumbing</option>
                                <option>Electrical</option>
                                <option>Cleaning</option>
                                <option>Carpentry</option>
                                <option>Painting</option>
                                <option>AC Repair</option>
                                <option>Pest Control</option>
                                <option>Gardening</option>
                            </select>
                        </div>
                        <div className="search-field">
                            <label>Your Location</label>
                            <input type="text" placeholder="e.g. Koregaon Park, Pune" />
                        </div>
                        <button className="search-btn" onClick={showToast('🔍 Searching for providers near you...')}>Search
                            Pros</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchProvider;