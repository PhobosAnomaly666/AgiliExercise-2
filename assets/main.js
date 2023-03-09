// Good part
const switchGood = document.querySelector(".good .switch")
// Cheap part
const switchCheap = document.querySelector(".cheap .switch")
// Fast part
const switchFast = document.querySelector(".fast .switch")

// Switch functions
function isGoodChecked() {
    // Good part
    switchGood.classList.toggle("active")
    whoIsChecked()
}
function isCheapChecked() {
    // Cheap part
    switchCheap.classList.toggle("active")
    whoIsChecked()
}
function isFastChecked() {
    // Fast part
    switchFast.classList.toggle("active")
    whoIsChecked()
}

// Switch conditions
function whoIsChecked() {
    // Si GOOD et CHEAP sont activés
    if (switchGood.classList.contains("active") && switchCheap.classList.contains("active")) {
        // Alors FAST est désactivé
        switchFast.classList.remove("active")
    }
    // Si GOOD et FAST sont activés
    if (switchGood.classList.contains("active") && switchFast.classList.contains("active")) {
        // Alors CHEAP est désactivé
        switchCheap.classList.remove("active")
    }
    // Si CHEAP et FAST sont activés
    if (switchCheap.classList.contains("active") && switchFast.classList.contains("active")) {
        // Alors GOOD est désactivé
        switchGood.classList.remove("active")
    }
}

// Calling functions
switchGood.addEventListener("click", isGoodChecked)
switchCheap.addEventListener("click", isCheapChecked)
switchFast.addEventListener("click", isFastChecked)