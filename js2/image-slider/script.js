(function() {
    const picture = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
    ];

    const btn = document.querySelectorAll(".btn");
    const imgDiv = document.querySelector(".image-container");

    let counter = 0;

    btn.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            if (btn.classList.contains('btn-left')) {
                counter--;
                if (counter < 0) {
                    counter = picture.length - 1;
                }
            }
            
            if (btn.classList.contains('btn-right')) {
                counter++;
                if (counter > picture.length - 1) {
                    counter = 0;
                }
            }
            
            // Update the image background after determining the correct counter value
            imgDiv.style.background = `url('img/${picture[counter]}.jpeg')`;
        });
    });
})();
