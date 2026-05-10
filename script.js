const claimRows = document.querySelectorAll(".claim-row");
const filter = document.querySelector("#claimFilter");
const selectedClaim = document.querySelector("#selectedClaim");
const selectedStatus = document.querySelector("#selectedStatus");
const summaryText = document.querySelector("#summaryText");
const summarizeButton = document.querySelector("#summarizeButton");

const summaries = {
  "CLM-20491":
    "Claim CLM-20491 passed eligibility and intake validation. Reviewer should verify the duplicate procedure flag and confirm modifier alignment before payment advice generation.",
  "CLM-20477":
    "Claim CLM-20477 is blocked because dental coverage did not match the submitted service date. The next action is to request updated eligibility evidence from the provider channel.",
  "CLM-20461":
    "Claim CLM-20461 is ready for automated adjudication. Pharmacy benefit checks, coverage validation, and pricing rules completed without exception.",
  "CLM-20440":
    "Claim CLM-20440 needs clinical policy review. The intake payload is valid, but the adjudication rule engine found a service limit threshold exception.",
};

function setSelectedClaim(row) {
  claimRows.forEach((item) => item.classList.remove("selected"));
  row.classList.add("selected");

  const claim = row.dataset.claim;
  const status = row.dataset.status;
  selectedClaim.textContent = claim;
  selectedStatus.textContent = status[0].toUpperCase() + status.slice(1);
  selectedStatus.className = `badge ${status}`;
  summaryText.textContent = summaries[claim];
}

claimRows.forEach((row) => {
  row.addEventListener("click", () => setSelectedClaim(row));
});

filter.addEventListener("change", () => {
  const value = filter.value;
  claimRows.forEach((row) => {
    row.hidden = value !== "all" && row.dataset.status !== value;
  });
});

summarizeButton.addEventListener("click", () => {
  const selected = document.querySelector(".claim-row.selected");
  summaryText.textContent = summaries[selected.dataset.claim];
});
