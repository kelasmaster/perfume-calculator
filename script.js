// script.js

document.getElementById('perfumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user inputs
    const totalVolume = parseFloat(document.getElementById('totalVolume').value);
    const topNotePercentage = parseFloat(document.getElementById('topNote').value);
    const middleNotePercentage = parseFloat(document.getElementById('middleNote').value);
    const baseNotePercentage = parseFloat(document.getElementById('baseNote').value);

    // Validate percentages add up to 100%
    if (topNotePercentage + middleNotePercentage + baseNotePercentage !== 100) {
        alert("The sum of percentages must equal 100%");
        return;
    }

    // Calculate amounts
    const topAmount = (topNotePercentage / 100) * totalVolume;
    const middleAmount = (middleNotePercentage / 100) * totalVolume;
    const baseAmount = (baseNotePercentage / 100) * totalVolume;

    // Display results
    document.getElementById('topAmount').textContent = topAmount.toFixed(2);
    document.getElementById('middleAmount').textContent = middleAmount.toFixed(2);
    document.getElementById('baseAmount').textContent = baseAmount.toFixed(2);

    // Show result section
    document.getElementById('result').classList.remove('hidden');
});
