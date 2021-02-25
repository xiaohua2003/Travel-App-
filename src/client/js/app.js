import  {handleSubmit} from "./handleSubmit";
const planNow=document.querySelector(".planNow").addEventListener("click", function(e){
    document.getElementById("plan_form").reset();
    document.getElementById("plan_trip").scrollIntoView({behavior:"smooth"});

})

document.getElementById("travel_submit").addEventListener("click", handleSubmit);
const remove_trip=document.getElementById('remove_trip').addEventListener("click",function(e){
    document.getElementById("plan_form").reset();
    document.getElementById("trip_information").classList.add("invisible");
});


export {
    planNow, remove_trip
}