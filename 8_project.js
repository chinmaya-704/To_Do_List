const l=[];
// l.push=[{name:'eat',date:'02-02-2023'}]
function display(){
    
    let t='';
    for(let i=0;i<l.length;i++){
        const {name,date}=l[i];
        const h=`                
            <div>${name}</div>
            <div>${date}</div> 
            <button onclick="
                l.splice(${i},1);
                display();
            " class="dlt">Delete</button>
        `;
        t+=h;
    }
    console.log(t);
    document.querySelector('.list').innerHTML=t;
}
function add(){
    const v=document.querySelector('.int');
    const n=v.value
    const dt=document.querySelector('.dt');
    d=dt.value
    l.push({
        name:n,
        date:d
    })
    console.log(l);        
    v.value='';  
    display();      
    }    
