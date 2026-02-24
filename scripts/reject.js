function rejectCounter() {
    const rejectedCardContainer = document.getElementById('rejected-card-container');
    const totalRejected = rejectedCardContainer.children.length;
    return totalRejected;
}

function interviewCounter() {
    const interviewCardContainer = document.getElementById('interview-card-container');
    const totalInterview = interviewCardContainer.children.length;
    return totalInterview;
}

function syncOriginalCardStatus(cardID, status) {
    const originalCard = document.getElementById(cardID);
    if (!originalCard) return;

    originalCard.classList.remove('border-l-[#F1F2F4]', 'border-l-green-600', 'border-l-red-600');
    const badge = originalCard.querySelector('#badge');

    if (status === 'interview') {
        originalCard.classList.add('border-l-green-600');
        badge.classList.remove('bg-[#EEF4FF]', 'bg-red-600', 'text-[#002C5C]');
        badge.classList.add('bg-green-600', 'text-white');
        badge.innerText = 'INTERVIEW';
        return;
    }

    if (status === 'rejected') {
        originalCard.classList.add('border-l-red-600');
        badge.classList.remove('bg-[#EEF4FF]', 'bg-green-600', 'text-[#002C5C]');
        badge.classList.add('bg-red-600', 'text-white');
        badge.innerText = 'REJECTED';
        return;
    }

    originalCard.classList.add('border-l-[#F1F2F4]');
    badge.classList.remove('bg-green-600', 'bg-red-600', 'text-white');
    badge.classList.add('bg-[#EEF4FF]', 'text-[#002C5C]');
    badge.innerText = 'NOT APPLIED';
}

const rejectedJobButtons = document.querySelectorAll('#rejected-job-button');
rejectedJobButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const card = button.closest('.card');
        const cardID = card.id;
        const clonedCard = card.cloneNode(true);
        const deleteButton = clonedCard.querySelector('#delete-button');
        deleteButton.addEventListener('click', function () {
            // const card = deleteButton.closest('.card');
            clonedCard.remove();
            const originalCard = document.getElementById(cardID);
            originalCard.classList.remove('border-l-red-600');
            originalCard.classList.add('border-l-[#F1F2F4]');
            const badge = originalCard.querySelector('#badge');
            badge.classList.remove('bg-red-600');
            badge.classList.add('bg-[#EEF4FF]');
            badge.classList.remove('text-white');
            badge.classList.add('text-[#002C5C]');
            badge.innerText = 'NOT APPLIED';
            
            const rejectedJob = document.getElementById('rejected-job');
            rejectedJob.innerText = rejectCounter();
            const rejectedCount = document.getElementById('rejected-count');
            rejectedCount.innerText = rejectCounter();
            if (rejectCounter() === 0) {
                const noJobsSection = document.getElementById('no-jobs-section');
                noJobsSection.classList.remove('hidden');
                noJobsSection.classList.add('flex');
            }
        })

        const rejectedCardContainer = document.getElementById('rejected-card-container');
        clonedCard.classList.add('border-l-red-600');
        const badge = clonedCard.querySelector('#badge');
        badge.classList.remove('bg-green-600');
        badge.classList.add('bg-red-600');
        badge.classList.add('text-white');
        badge.innerText = 'REJECTED';
        rejectedCardContainer.appendChild(clonedCard);

        const interviewButton = clonedCard.querySelector('#interview-job-button');
        interviewButton.addEventListener('click', function () {
            const card = interviewButton.closest('.card');
            card.remove();
            const rejectedJob = document.getElementById('rejected-job');
            rejectedJob.innerText = rejectCounter();
            const rejectedCount = document.getElementById('rejected-count');
            rejectedCount.innerText = rejectCounter();
            if (rejectCounter() === 0) {
                const noJobsSection = document.getElementById('no-jobs-section');
                noJobsSection.classList.remove('hidden');
                noJobsSection.classList.add('flex');
            }
            const interviewCardContainer = document.getElementById('interview-card-container');
            card.classList.remove('border-l-red-600');
            card.classList.add('border-l-green-600');
            const badge = card.querySelector('#badge');
            badge.classList.remove('bg-red-600');
            badge.classList.remove('text-white');
            badge.classList.add('bg-green-600');
            badge.classList.add('text-white');
            badge.innerText = 'INTERVIEW';
            syncOriginalCardStatus(cardID, 'interview');
            interviewCardContainer.appendChild(card);
            const interviewJob = document.getElementById('interview-job');
            interviewJob.innerText = interviewCounter();
            const interviewCount = document.getElementById('interview-count');
            interviewCount.innerText = interviewCounter();

            const deleteButtonI = card.querySelector('#delete-button');
            deleteButtonI.addEventListener('click', function () {
                const card = deleteButtonI.closest('.card');
                card.remove();
                const interviewJob = document.getElementById('interview-job');
                interviewJob.innerText = interviewCounter();
                const interviewCount = document.getElementById('interview-count');
                interviewCount.innerText = interviewCounter();
                if (interviewCounter() === 0) {
                    const noJobsSection = document.getElementById('no-jobs-section');
                    noJobsSection.classList.remove('hidden');
                    noJobsSection.classList.add('flex');
                }
            })

            const rejectButton = clonedCard.querySelector('#rejected-job-button');
            rejectButton.addEventListener('click', function () {
                const card = rejectButton.closest('.card');
                card.remove();
                const interviewJob = document.getElementById('interview-job');
                interviewJob.innerText = interviewCounter();
                const interviewCount = document.getElementById('interview-count');
                interviewCount.innerText = interviewCounter();
                if (interviewCounter() === 0) {
                    const noJobsSection = document.getElementById('no-jobs-section');
                    noJobsSection.classList.remove('hidden');
                    noJobsSection.classList.add('flex');
                }
                const rejectedCardContainer = document.getElementById('rejected-card-container');
                card.classList.remove('border-l-green-600');
                card.classList.add('border-l-red-600');
                const badge = card.querySelector('#badge');
                badge.classList.remove('bg-green-600');
                badge.classList.remove('text-white');
                badge.classList.add('bg-red-600');
                badge.classList.add('text-white');
                badge.innerText = 'REJECTED';
                syncOriginalCardStatus(cardID, 'rejected');
                rejectedCardContainer.appendChild(card);
                const rejectedJob = document.getElementById('rejected-job');
                rejectedJob.innerText = rejectCounter();
                const rejectedCount = document.getElementById('rejected-count');
                rejectedCount.innerText = rejectCounter();

                const deleteButtonR = card.querySelector('#delete-button');
                deleteButtonR.addEventListener('click', function () {
                    const card = deleteButtonR.closest('.card');
                    card.remove();
                    const rejectedJob = document.getElementById('rejected-job');
                    rejectedJob.innerText = rejectCounter();
                    const rejectedCount = document.getElementById('rejected-count');
                    rejectedCount.innerText = rejectCounter();
                    if (rejectCounter() === 0) {
                        const noJobsSection = document.getElementById('no-jobs-section');
                        noJobsSection.classList.remove('hidden');
                        noJobsSection.classList.add('flex');
                    }
                })
            })
        })
        const rejectedJob = document.getElementById('rejected-job');
        rejectedJob.innerText = rejectCounter();
    })
})

const rejectedButton = document.getElementById('rejected-button');
rejectedButton.addEventListener('click', function () {
    const availableJobCount = document.getElementById('available-job-count');
    availableJobCount.classList.remove('flex');
    availableJobCount.classList.add('hidden');
    const rejectedJobCount = document.getElementById('rejected-job-count');
    rejectedJobCount.classList.add('flex');
    rejectedJobCount.classList.remove('hidden');
    const interviewJobCount = document.getElementById('interview-job-count');
    interviewJobCount.classList.add('hidden');
    interviewJobCount.classList.remove('flex');
    const totalRejected = rejectCounter();
    if (totalRejected === 0) {
        const noJobsSection = document.getElementById('no-jobs-section');
        noJobsSection.classList.remove('hidden');
        noJobsSection.classList.add('flex');
        const allCardContainer = document.getElementById('all-card-container');
        allCardContainer.classList.add('hidden');
        const interviewCardContainer = document.getElementById('interview-card-container');
        interviewCardContainer.classList.add('hidden');
        const rejectedCardContainer = document.getElementById('rejected-card-container');
        rejectedCardContainer.classList.add('hidden');
        const rejectedCount = document.getElementById('rejected-count');
        rejectedCount.innerText = totalRejected;
        const availableTotalJobsRejected = document.getElementById('available-total-jobs-rejected');
        availableTotalJobsRejected.innerText = allJobCounter();
    }
    else {
        const noJobsSection = document.getElementById('no-jobs-section');
        noJobsSection.classList.add('hidden');
        noJobsSection.classList.remove('flex');
        const allCardContainer = document.getElementById('all-card-container');
        allCardContainer.classList.add('hidden');
        const interviewCardContainer = document.getElementById('interview-card-container');
        interviewCardContainer.classList.add('hidden');
        const rejectedCardContainer = document.getElementById('rejected-card-container');
        rejectedCardContainer.classList.remove('hidden');
        const rejectedCount = document.getElementById('rejected-count');
        rejectedCount.innerText = totalRejected;
        const availableTotalJobsRejected = document.getElementById('available-total-jobs-rejected');
        availableTotalJobsRejected.innerText = allJobCounter();
    }
})