
let boxes=document.querySelectorAll('.box-container .box');

boxes.forEach(box =>{

    let heading=box.querySelector('.heading');
    let icon=box.querySelector('.heading i');

    heading.onclick = () => {

for(var i=0;i<boxes.length;i++){
    if(boxes[i]!=box){
        boxes[i].classList.remove('active');
    }else{
        box.classList.toggle('active');
    }
}

if(icon.classList.contains('fa-multiply')){
    icon.classList.replace('fa-multiply','fa-plus');
}
else{
    document.querySelectorAll('.box-container .box .heading .fa-multiply').forEach(multiply =>{
       multiply.classList.replace('fa-multiply','fa-plus');
    });

    icon.classList.replace('fa-plus','fa-multiply');
}

    };

});
    