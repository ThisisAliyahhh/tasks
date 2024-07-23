import theatre from "./assets/theatre.png"
import park from "./assets/park.png"
import sports from "./assets/sports.png"

function Activities(){
    return(
        <>
        <section>
                <h4>Top three activities to do at Torshov</h4>
                <div className="activities">
                    <div>
                        <img src={theatre} alt="theatre image" />
                        <h5>Attend a show or a concert</h5>
                        <p>The Torshov Theatre is a great place to spend your night out.</p>
                    </div>
                    <div>
                        <img src={park} alt="park image" />
                        <h5>The Torshov Theatre is a great place to spend your night out.</h5>
                        <p>The Torshov Park is perfect for piknic, getting some tan, or just chilling out.</p>
                    </div>
                    <div>
                        <img src={sports} alt="sports image" />
                        <h5>Play sports at the Lilleborg field</h5>
                        <p>Play volleyball, football, basket ball or lift some weights.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Activities 