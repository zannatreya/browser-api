const alertDey = () => {
    alert('BOM BOM!!!!!!!!');
}

const confirmKor = () => {
    const response = confirm('picnic a jabi???');
    console.log(response);
    if (response === true) {
        alert('bkash kor!!!');
    }
    else {
        alert('DGM,dure giya mor');
    }
}

const input = () => {
    const input = prompt('tomar nam ki?');
    if (input) {
        alert('ok!!');
    }
}