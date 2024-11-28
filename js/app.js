



const lodephone = async(scrchphone) =>{

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${scrchphone}`)

    const data = await res.json();

    const phones =data.data;

    // console.log(phones)
    displayphone(phones)

}

const displayphone = phones =>{

    const phonecontainer = document.getElementById('phone-containar')

    phonecontainer.textContent =''


    const showallcontainer = document.getElementById('show-continer');

    if (Array.isArray (phones) && phones.length >=12) {

      // showall
      
      if (showallcontainer) {
        
        showallcontainer.classList.remove('hidden');
      }
      
    }
    else{
      showallcontainer.classList.add('hidden');
    };


    // showall

    // if (phones.length>12) {
    //   
      
    // }

    phones = phones.slice(0,12)

    // console.log(phones)

    phones.forEach(phone => {

        console.log(phone)

        // crate a div
        const phonecard = document.createElement('div');

        phonecard.classList = `card bg-gray-100  shadow-xl `;
        phonecard .innerHTML =`
          <figure>
                      <img
                        src="${phone.image
                        }"
                        alt="${phone.phone_name}" />
                    </figure>
                    <div class="card-body">
                      <h2 class="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
        `
        phonecontainer.appendChild(phonecard);
    });
    togleloding(false)
}




const clickhandinar = () =>{
  togleloding(true);
  const serchfild = document.getElementById('scrch');
  const scrchphone = serchfild.value;
  console.log(scrchphone)
  lodephone(scrchphone);
}


const togleloding = (loder) =>{

  const loging =document.getElementById('lodingspner');
  
  if (loder) {
    loging.classList.remove('hidden');
  }
  else{
    loging.classList.add('hidden')
  }

};


// Function expression, declared and then called

// lodephone()