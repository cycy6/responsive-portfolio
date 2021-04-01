import './Portfolio.css'
import Passgen from '../assets/passgen.png'
import Calandar from '../assets/picture3.png'

function Portfolio() {
    return (
        <div className="pagebody">
            <div className="row">
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <a href="https://cycy6.github.io/Update-Password/">
                                <img className="imgcard" src={Passgen} alt="Password-Gen" /></a>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Password Generator</h5>
                                <p class="card-text">This app allows the user to update their password</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3 cardsize">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <a href="https://cycy6.github.io/Calander/">
                                <img className="imgcard" src={Calandar} alt="Calandar" /></a>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">Today's Schedule</h5>
                                <p class="card-text">This app allows the user to add in reminders for the day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portfolio;