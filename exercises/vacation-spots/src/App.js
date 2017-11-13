import React from "react";
import VacationBloc from "./VacationBloc.js"


function App () {
const vacationSpots = [
    {
        place: "Meridian, Idaho",
        price: "$40",
        timeToGo: "Spring",
        background: "http://www.capitalgroupco.com/awesome/wp-content/uploads/2016/04/Meridian-Idaho-Homes-For-Sale-1.jpg"
    },
    {
        place: "Cancun",
        price: "$900",
        timeToGo: "Winter",
        background: "https://media-cdn.tripadvisor.com/media/photo-s/09/58/8c/3f/playa-lancheros.jpg"
    },
    {
        place: "China",
        price: "$1200",
        timeToGo: "Fall",
        background: "http://www.history.com/s3static/video-thumbnails/AETN-History_VMS/21/116/History_The_Great_Wall_of_China_45274_reSF_HD_1104x622-16x9.jpg"
    },
    {
        place: "Russia",
        price: "$1100",
        timeToGo: "Summer",
    },
    {
        place: "Lebanon",
        price: "$400",
        timeToGo: "Spring",
        background: "https://static.boredpanda.com/blog/wp-content/uploads/2014/08/three-bridges-cave-baatara-gorge-waterfall-lebanon-3.jpg"
    }
]

const divStyle = {
    div: {
        height: "255px",
        marginTop: "50px",
        textAlign: "center"
    }
};

    return (
        <div style={divStyle.div}> {
            vacationSpots.map(function(spot) {
                if (spot.timeToGo === "Summer") {
                    return <VacationBloc place={spot.place} price = {spot.price} timeToGo = {spot.timeToGo} backgroundColor = "blue" background = {spot.background}/>

                } else {
                    return <VacationBloc place={spot.place} price = {spot.price} timeToGo = {spot.timeToGo} background = {spot.background}/>
                }
            })

       vacationSpots.map(function(spot) {
            if (Number(spot.price.replace('$', "")) < 500) {
                spot.summary = "$";
                return <VacationBloc place={spot.place} price = {spot.price} summary = {spot.summary}
                    timeToGo = {spot.timeToGo} backgroundColor = "blue" background = {spot.background}/>
            }
        }
    )



}
    </div>
    );
}







export default App
