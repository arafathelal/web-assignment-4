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

//interview, reject button

for (let i = 0; i < jobCards.length; i++) {

    const card = jobCards[i];

    const interviewBtn = card.querySelector(".interviewBtn");
    const rejectBtn = card.querySelector(".rejectBtn");
    const deleteBtn = card.querySelector(".deleteBtn");
    const badge = card.querySelector(".statusBadge");


    //interview
    interviewBtn.onclick = function () {

        card.classList.remove("rejected");

        if (card.classList.contains("interview")) {

            card.classList.remove("interview");
            interviewBtn.classList.remove("bg-green-600", "text-white");

            badge.innerText = "NOT APPLIED";
            badge.className ="statusBadge bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm inline-block mt-2";

        } else {

            card.classList.add("interview");
            interviewBtn.classList.add("bg-green-600", "text-white");
            rejectBtn.classList.remove("bg-red-600", "text-white");

            badge.innerText = "INTERVIEW";
            badge.className ="statusBadge bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm inline-block mt-2";
        }

        showTab(currentTab);
    }

    //reject
    rejectBtn.onclick = function () {

        card.classList.remove("interview");

        if (card.classList.contains("rejected")) {

            card.classList.remove("rejected");
            rejectBtn.classList.remove("bg-red-600", "text-white");

            badge.innerText = "NOT APPLIED";
            badge.className ="statusBadge bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm inline-block mt-2";

        } else {

            card.classList.add("rejected");
            rejectBtn.classList.add("bg-red-600", "text-white");
            interviewBtn.classList.remove("bg-green-600", "text-white");

            badge.innerText = "REJECTED";
            badge.className = "statusBadge bg-red-100 text-red-700 px-3 py-1 rounded-md text-sm inline-block mt-2";
        }

        showTab(currentTab);
    }
}