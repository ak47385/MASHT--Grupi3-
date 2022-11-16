function togglecontent()
{
    var x = document.getElementById("documention-toggle");
    var y =document.getElementById("readmoredown-bttn");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.textContent = 'Lexo me pak';
    } else {
      x.style.display = "none";
      y.textContent = 'Lexo me shume';
    }
}

const tittle=document.querySelectorAll('.info-procedure .steps-tittle');
tittle[0].style.background="#ff0808";
tittle[1].style.background="#03cf06";
tittle[2].style.background="#fec736";
tittle[3].style.background="rgb(6, 32, 88)";

const card=document.querySelectorAll('.last-row .img__wrap');
card[0].style.background="rgb(218, 110, 144)";
card[1].style.background="#0085ff";
card[2].style.background="#c6f";


const img_desc=document.querySelectorAll('.img__wrap .img__description');
img_desc[0].style.background="rgba(154, 29, 100, 0.954)";
img_desc[1].style.background="rgba(29, 102, 154, 0.954)";
img_desc[2].style.background="rgba(139, 29, 154, 0.954)";





