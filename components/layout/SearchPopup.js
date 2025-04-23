import Link from "next/link"

export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>
            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="close-search theme-btn" onClick={handlePopup}><span className="far fa-times" /></div>
                <div className="popup-inner">
                    <div className="overlay-layer" />
                    <div className="search-form">
                        <form method="post" action="">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" placeholder="Search Here" required />
                                    <input type="submit" className="theme-btn" />
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
