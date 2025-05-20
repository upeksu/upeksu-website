import Navbar from "../navbar/page";
import "./page.css";

export default function Events() {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className="upe-description">
                UPSILON PI EPSILON, THE INTERNATIONAL HONOR SOCIETY FOR THE COMPUTING AND INFORMATION DISCIPLINES
            </h1>
            <h1 className="title">EVENTS</h1>

            {/* 
                To change displayed calendar, go into calendar's settings and sharing,
                enable "Make available to public" and then replace src with "Public URL to this calendar"
            */}

            <iframe
                className="events-calendar"
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&showPrint=0&title=UPE%20Events%20Test%20Calendar&src=MGY5N2NiNjdkNTM3NzJlMzFjMmM1MWM0NGVhZmVmZjEyNTBmNmI2ZTI3MWFlZjRjNGEzYmU1MDU2MzMwNDAwMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
            ></iframe>
        </div>
    );
}