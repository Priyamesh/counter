let counters=document.querySelectorAll(".counter");

counters.forEach((counter)=>{

    counter.innerHTML=0;
    const update=()=>{
        const target=+(counter.getAttribute('data-target'));

        let currnum=+(counter.innerHTML);
        let incr=target/200;

        if(currnum<target)
        {
            counter.innerHTML=Math.round(Number(currnum+incr));
            setTimeout(update, 10);
        }
    }
    update();
})