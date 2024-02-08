let isLiked = false;
    let likeCounter = 0;

    function toggleLike() {
        const likeImage = document.getElementById('like-image');
        const likeCounterElement = document.getElementById('like-counter');

        if (isLiked) {
            likeImage.src = '../images/heart_empty.png';
            likeCounter--;
        } else {
            likeImage.src = '../images/heart_filled.png';
            likeCounter++;
        }

        likeCounterElement.innerText = likeCounter;

        isLiked = !isLiked;
    }

    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
      } 