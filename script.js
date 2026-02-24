//retrieving elements
const jobCards = document.querySelectorAll(".jobCard");
const totalCount = document.querySelector(".total-count");
const interviewCount = document.querySelector(".interview-count");
const rejectedCount = document.querySelector(".rejected-count");
const emptyState = document.getElementById("emptyState");

const allBtn = document.getElementById("all-btn");
const intBtn = document.getElementById("int-btn");
const rejBtn = document.getElementById("rej-btn");

let currentTab = "all";


//Card counting

function updateCounts() {

    const total = document.querySelectorAll(".jobCard").length;
    const interview = document.querySelectorAll(".jobCard.interview").length;
    const rejected = document.querySelectorAll(".jobCard.rejected").length;

    totalCount.innerText = total;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;
}

//tabs (all, interview, rejected)

function showTab(tab) {

    currentTab = tab;
    let visible = 0;

    const cards = document.querySelectorAll(".jobCard");

    for (let i = 0; i < cards.length; i++) {

        const card = cards[i];

        if (tab === "all") {
            card.classList.remove("hidden");
            visible++;
        }
        else if (card.classList.contains(tab)) {
            card.classList.remove("hidden");
            visible++;
        }
        else {
            card.classList.add("hidden");
        }
    }

    if (visible === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }

    updateCounts();
}

allBtn.onclick = function () {
    showTab("all");
};

intBtn.onclick = function () {
    showTab("interview");
};

rejBtn.onclick = function () {
    showTab("rejected");
};

updateCounts();
showTab("all");