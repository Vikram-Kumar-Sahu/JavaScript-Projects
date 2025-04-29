(function (){
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('.customer-name');
    const customerText = document.querySelector('.customer-text');

    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');

    let index = 0;
    const customers = [];

    function Customer(img,name,text){
        this.img=img;
        this.name=name;
        this.text=text;
    }

    function createCustomer(img, name, text){
        let Img=`./img/${img}.jpg`;
        let customer=new Customer(Img, name , text);

        customers.push(customer);
    }

    createCustomer(0,'John' ,'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, molestias itaque? Labore molestiae eveniet optio, accusamus officia quod doloremque possimus sed, aliquam alias consectetur provident!');
    createCustomer(1,'Smith' ,'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, molestias itaque? Labore molestiae eveniet optio, accusamus officia quod doloremque possimus sed, aliquam alias consectetur provident!');
    createCustomer(2,'July', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, molestias itaque? Labore molestiae eveniet optio, accusamus officia quod doloremque possimus sed, aliquam alias consectetur provident!');
    createCustomer(3,'Hero',' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, molestias itaque? Labore molestiae eveniet optio, accusamus officia quod doloremque possimus sed, aliquam alias consectetur provident!');

    function updateCustomer() {
        customerImage.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
    }

    function prevCustomer() {
        index--;
        if(index < 0){
            index = customers.length - 1;
        }
        updateCustomer();
    }

    function nextCustomer() {
        index++;
        if(index === customers.length){
            index = 0;
        }
        updateCustomer();
    }

    prevBtn.addEventListener('click', prevCustomer);
    nextBtn.addEventListener('click', nextCustomer);

    // Adding event listener for arrow keys
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevCustomer();
        } else if (e.key === 'ArrowRight') {
            nextCustomer();
        }
    });

    // Initial update
    updateCustomer();
})();
