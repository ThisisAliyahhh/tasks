import guide from "./assets/guide.png"

function Footer (){
    return (
        <>
            <footer>

                <div className="guide">
                    <div className="guide-image">
                        <img src = {guide} alt="guide image" />
                    </div>
                    <div className="guide-intro">
                        <h3>Your guide</h3>
                        <p>“I have lived at Torshov for over 30 years, 
                            so I can show you all of its best parts and hidden secrets.”</p>
                        <h5>Per Harald Borgen</h5>
                    </div>
                </div>

                </footer>
        </>
    )
}

export default Footer