document.addEventListener("DOMContentLoaded", function () {

    const pics = document.getElementById("pics");
    const favourites = document.getElementById("favorites");
    const actions = document.getElementById("actions");
    const images = document.querySelectorAll(".mandela");

    let favCount = 0;

    images.forEach((img, index) => {

        img.dataset.index = index;

        img.addEventListener("click", function () {

            if (img.parentElement === favourites) {


                const originalIndex = parseInt(img.dataset.index);

                const currentImages = pics.querySelectorAll("img");

                if (originalIndex >= currentImages.length) {
                    pics.appendChild(img);
                } else {
                    pics.insertBefore(img, currentImages[originalIndex]);
                }

                favCount--;

                const li = document.createElement("li");
                li.textContent = "Moved " + img.src + " back to gallery";
                actions.appendChild(li);

            } else {

                favourites.appendChild(img);
                favCount++;

                
                const li = document.createElement("li");
                li.textContent = "Moved " + img.src + " to favourites";
                actions.appendChild(li);

            }

            if (favCount === images.length) {
                const doneMsg = document.createElement("p");
                doneMsg.textContent = "All images have been selected!";
                document.body.appendChild(doneMsg);
            }

        });

    });

});