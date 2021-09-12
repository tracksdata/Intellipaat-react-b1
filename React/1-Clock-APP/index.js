//let indianClock=document.getElementById('indianClock');
let indianClock=document.querySelector('#indianClock');
let dubaiClock=document.querySelector('#dubaiClock');
let usaClock=document.querySelector('#americanClock');

let indianClockV1=document.querySelector('#indianClockV1');
let dubaiClockV1=document.querySelector('#dubaiClockV1');
let usaClockV1=document.querySelector('#americanClockV1');


function jsClock(props){
    let time=new Date().toLocaleTimeString('en-US',{timeZone:`${props}`});
    let ui=`
    <div>
        <div> 
         ${props}
        </div>
        <div>
         <p> ${time}</p>
        </div>
    </div>
    `
    return ui;
}

function reactClock(props){
    let time=new Date().toLocaleTimeString('en-US',{timeZone:`${props}`});
    return(
    <div>
       <div>
           {props}
       </div>
       <div>
           <p>{time}</p>
       </div>
    </div>
    )

}


setInterval(function(){
// -------------------
// JS Code
//--------------------
indianClock.innerHTML=jsClock('asia/kolkata');
dubaiClock.innerHTML=jsClock('asia/dubai');
usaClock.innerHTML=jsClock('america/new_york');

// -------------------
// React Code
//--------------------
ReactDOM.render(reactClock('asia/kolkata'),indianClockV1);
ReactDOM.render(reactClock('asia/dubai'),dubaiClockV1);
ReactDOM.render(reactClock('america/new_york'),usaClockV1);

},1000);







