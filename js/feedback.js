document.addEventListener("DOMContentLoaded", function () {
  const ratingContainer = document.getElementsByClassName("starsContainer")[0];
  // totale di stelle
  const totalStars = 10;
  let selectedRating;

  // Aggiungi le stelle al container
  for (let i = 1; i <= totalStars; i++) {
    const star = document.createElement("img");
    star.src = "../assets/img/star.svg";
    star.classList.add("starSvg", "greyStar");
    star.dataset.ratingValue = i;
    ratingContainer.appendChild(star);

    star.addEventListener("click", handleClick);
    star.addEventListener("mouseover", handleMouseOver); // Aggiunto per l'effetto hover
    star.addEventListener("mouseout", handleMouseOut);
  }

  function handleClick(event) {
    const clickedStar = event.target;
    selectedRating = clickedStar.dataset.ratingValue;

    // Cambia colore fino a quella selezionata
    for (let i = 1; i <= totalStars; i++) {
      // Seleziona l'elemento con attributo 'data-rating-value' uguale a 'i'
      const star = ratingContainer.querySelector(`[data-rating-value="${i}"]`);
      if (i <= selectedRating) {
        star.classList.remove("greyStar"); // Stelle attive
      } else {
        star.classList.add("greyStar"); // Stelle inattive
      }
    }

    // stars in console log
    console.log("Stelle selezionate:", selectedRating);
  }
  function handleMouseOver(event) {
    const hoveredStar = event.target;
    const hoverValue = hoveredStar.dataset.ratingValue;

    // Accendi le stelle fino a quella su cui si trova il mouse
    for (let i = 1; i <= hoverValue; i++) {
      const star = ratingContainer.querySelector(`[data-rating-value="${i}"]`);
      star.classList.remove("greyStar"); // Stelle attive durante l'hover
    }
  }

  function handleMouseOut(event) {
    // Spegni tutte le stelle quando il mouse esce
    if (!selectedRating) {
      for (let i = 1; i <= totalStars; i++) {
        const star = ratingContainer.querySelector(`[data-rating-value="${i}"]`);
        star.classList.add("greyStar"); // Stelle inattive
      }
    } else {
      // Se è stata fatta una selezione, accendi le stelle fino a quella selezionata.
      for (let i = 1; i <= totalStars; i++) {
        const star = ratingContainer.querySelector(`[data-rating-value="${i}"]`);
        star.className = i <= selectedRating ? "starSvg" : "starSvg greyStar";
      }
    }
  }

  function resetStars() {
    for (let i = 1; i <= totalStars; i++) {
      const star = ratingContainer.querySelector(`[data-rating-value="${i}"]`);
      star.classList.add("greyStar"); // Imposta tutte le stelle allo stato iniziale
    }
    selectedRating = 0; // Resetta il rating selezionato a 0
  }

  let takeData = document.getElementById("data");
  // let myForm = document.getElementById('form');

  takeData.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Previene l'invio del form e il ricaricamento della pagina
      let inputData = takeData.value;
      console.log("Commento:", inputData); // Stampa il commento in console
      console.log("Stelle selezionate:", selectedRating); // Stampa il rating selezionato in console
      resetStars(); // Resetta le stelle
      takeData.value = ""; // Pulisce il campo di input dopo l'invio
    }
  });
});
