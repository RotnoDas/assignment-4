function allJobCounter() {
    const allCardCounter = document.getElementById('all-card-container');
    const total = allCardCounter.children.length;
    return total;
}

const allButtons = document.getElementById('all-button');
allButtons.addEventListener('click', function () {
    const allCardContainer = document.getElementById('all-card-container');
    allCardContainer.classList.remove('hidden');

    const interviewCardContainer = document.getElementById('interview-card-container');
    interviewCardContainer.classList.add('hidden');

    const rejectedCardContainer = document.getElementById('rejected-card-container');
    rejectedCardContainer.classList.add('hidden');
})

const total = allJobCounter();
if (total === 0) {
    const noJobsSection = document.getElementById('no-jobs-section');
    noJobsSection.classList.add('flex');
    noJobsSection.classList.remove('hidden');

    const allCardContainer = document.getElementById('all-card-container');
    allCardContainer.classList.add('hidden');

    const interviewCardContainer = document.getElementById('interview-card-container');
    interviewCardContainer.classList.add('hidden');

    const rejectedCardContainer = document.getElementById('rejected-card-container');
    rejectedCardContainer.classList.add('hidden');

    const totalJob = document.getElementById('total-job');
    totalJob.innerText = total;

    const availableTotalJobs = document.getElementById('available-total-jobs');
    availableTotalJobs.innerText = total;

}
else {
    const noJobsSection = document.getElementById('no-jobs-section');
    noJobsSection.classList.remove('flex');
    noJobsSection.classList.add('hidden');

    const allCardContainer = document.getElementById('all-card-container');
    allCardContainer.classList.remove('hidden');

    const interviewCardContainer = document.getElementById('interview-card-container');
    interviewCardContainer.classList.add('hidden');

    const rejectedCardContainer = document.getElementById('rejected-card-container');
    rejectedCardContainer.classList.add('hidden');

    const totalJob = document.getElementById('total-job');
    totalJob.innerText = total;

    const availableTotalJobs = document.getElementById('available-total-jobs');
    availableTotalJobs.innerText = total;
}

const allButton = document.getElementById('all-button');
allButton.addEventListener('click', function () {
    const allCardContainer = document.getElementById('all-card-container');
    allCardContainer.classList.remove('hidden');

    const availableJobCount = document.getElementById('available-job-count');
    availableJobCount.classList.add('flex');
    availableJobCount.classList.remove('hidden');

    const interviewJobCount = document.getElementById('interview-job-count');
    interviewJobCount.classList.add('hidden');
    interviewJobCount.classList.remove('flex');

    const rejectedJobCount = document.getElementById('rejected-job-count');
    rejectedJobCount.classList.add('hidden');
    rejectedJobCount.classList.remove('flex');

    const noJobsSection = document.getElementById('no-jobs-section');
    noJobsSection.classList.remove('flex');
    noJobsSection.classList.add('hidden');

    if (allJobCounter() === 0) {
        noJobsSection.classList.remove('hidden');
        noJobsSection.classList.add('flex');
        allCardContainer.classList.add('hidden');
    }
})

const deleteButton = document.querySelectorAll('#delete-button');
deleteButton.forEach(function (button) {
    button.addEventListener('click', function () {
        const card = button.closest('.card');
        card.remove();
        const total = allJobCounter();
        if (total === 0) {
            const noJobsSection = document.getElementById('no-jobs-section');
            noJobsSection.classList.add('flex');
            noJobsSection.classList.remove('hidden');
        }
        const totalJob = document.getElementById('total-job');
        totalJob.innerText = total;
        const availableTotalJobs = document.getElementById('available-total-jobs');
        availableTotalJobs.innerText = total;
    })
})

const interviewButtons = document.querySelectorAll('#interview-job-button');
interviewButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const card = button.closest('.card');
        card.classList.add('border-l-green-600');
        const badge = card.querySelector('#badge');
        badge.classList.remove('bg-[#EEF4FF]');
        badge.classList.remove('text-[#002C5C]');
        badge.classList.add('bg-green-600');
        badge.classList.add('text-white');
        badge.innerText = 'INTERVIEW';

        const rejectedButton = card.querySelector('#rejected-job-button');
        rejectedButton.addEventListener('click', function () {
            card.classList.remove('border-l-green-600');
            card.classList.add('border-l-red-600');
            badge.classList.remove('bg-green-600');
            badge.classList.remove('text-white');
            badge.classList.add('bg-red-600');
            badge.classList.add('text-white');
            badge.innerText = 'REJECTED';
        })
    })
})

const rejectedButtons = document.querySelectorAll('#rejected-job-button');
rejectedButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const card = button.closest('.card');
        card.classList.add('border-l-red-600');
        const badge = card.querySelector('#badge');
        badge.classList.remove('bg-[#EEF4FF]');
        badge.classList.remove('text-[#002C5C]');
        badge.classList.add('bg-red-600');
        badge.classList.add('text-white');
        badge.innerText = 'REJECTED';

        const interviewButton = card.querySelector('#interview-job-button');
        interviewButton.addEventListener('click', function () { 
            card.classList.remove('border-l-red-600');
            card.classList.add('border-l-green-600');
            badge.classList.remove('bg-red-600');
            badge.classList.remove('text-white');
            badge.classList.add('bg-green-600');
            badge.classList.add('text-white');
            badge.innerText = 'INTERVIEW';
        })
    })
})