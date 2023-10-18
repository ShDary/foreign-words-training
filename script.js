let words = [
    { front: "Apple", back: "Яблоко", example: "She eats apple" },
    { front: "Juice", back: "Сок", example: "Apple juice" },
    { front: "Dog", back: "Собака", example: "He has a dog" },
    { front: "Card", back: "Карточка", example: "Give me your card" },
    { front: "Book", back: "Книга", example: "I read books" },
    { front: "House", back: "Дом", example: "We moved in new house" },
    { front: "Bathroom", back: "Ванная комната", example: "She repairs in the bathroom" },
    { front: "Picture", back: "Картина", example: "I drow pictures" },
    { front: "Guitar", back: "Гитара", example: "I play the guitar" },
    
];

let current_word_index = 0;

function updateWordDisplay() {
    let word = words[current_word_index];

    document.querySelector("#card-front h1").textContent = word.front;
    document.querySelector("#card-back h1").textContent = word.back;
    document.querySelector("#card-back p span").textContent = word.example;

    document.querySelector("#current-word").textContent = current_word_index + 1;
}

document.querySelector(".flip-card").addEventListener("click", function() {
    this.classList.toggle("active");
});

document.querySelector("#next").addEventListener("click", function() {
    if(current_word_index < words.length - 1) {
        current_word_index++;
        updateWordDisplay();
    }

    document.querySelector("#next").disabled = current_word_index >= words.length - 1;
    document.querySelector("#back").disabled = current_word_index <= 0;
});

document.querySelector("#back").addEventListener("click", function() {
    if(current_word_index > 0) {
        current_word_index--;
          updateWordDisplay();
    }

    document.querySelector("#next").disabled = current_word_index >= words.length - 1;
    document.querySelector("#back").disabled = current_word_index <= 0;
});

document.querySelector("#exam").addEventListener("click", function() {
    document.querySelector("#study-mode").classList.add("hidden");
    document.querySelector("#exam-mode").classList.remove("hidden");
    
});

updateWordDisplay();
