let arr=["Work out with research-backed programs designed by Certified Personal Trainers (CPTs).","Follow expertly-curated combinations of workouts from our free video library.","Take the guesswork out of planning routines and picking workouts.","Focus your exercise time with proper structure for more effective results.","Learn to modify individual exercises to accommodate virtually any fitness level.","Improve overall health and functional fitness.","Schedule and track progress via the FB Calendar.","Review each day's objectives and workout details.","Complete as many times as you like.","Get additional tips and information with a detailed program and nutrition guide."]
let tbody=document.querySelector("tbody");
arr.forEach((element,index)=>{
    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=element;
    
    let td2=document.createElement("td");
    td2.setAttribute("class","membershipfeatures_cell");

    let span=document.createElement("span");
    span.setAttribute("class","material-symbols-outlined");
    span.innerText="check_circle";

    td2.append(span);
    tr.append(td1,td2);
    tbody.append(tr);
})

