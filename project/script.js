// Fetch user data and populate the Home tab
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersList = document.getElementById('usersList');
        users.forEach(user => {
            const userCard = `
                <div class="col-md-4">
                    <div class="card mb-5 ml-4" style= "background-color: #254336; border-radius:1rem; width:350px; ">
                        <div class="card-body " style= "background-color: #254336; color: white; border-radius:1rem">
                            <h5 class="card-title" style="font-weight:bold; color: #254336;">${user.name}</h5>
                            <h3 class="card-text"><strong> ${user.username}</strong></h3>
                            <p class="card-text"><strong>Email:</strong> ${user.email}</p> 
                            <p class="card-text"><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city},  ${user.address.zipcode}</p>
                            <p class="card-text"><strong>Phone:</strong> ${user.phone}</p>
                            <p class="card-text"><strong>Website:</strong> ${user.website}</p>
                            <p class="card-text"><strong>Company:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
                            
                        </div>
                    </div>
                </div>`;
            usersList.innerHTML += userCard;
        });
    });

// Fetch photo data and populate the Gallery tab
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(photos => {
        const photosList = document.getElementById('photosList');
        photos.slice(0, 10).forEach(photo => {
            const photoCard = `
                <div class="col-md-3    " >
                    <div class="card mb-4" >
                        <img src="${photo.url}" class="card-img-top" alt="${photo.title}" >
                        <div class="card-body" style= "background-color: #254336; color: white;  height:75px;">
                            <h6 class="card-title">${photo.title}</h6>
                            <p class="card-text"> 
                        </div>
                    </div>
                </div>`;
            photosList.innerHTML += photoCard;
        });
    });
// Function to scroll back to the top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the scroll button when user scrolls down
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollBtn").style.display = "block";
    } else {
        document.getElementById("scrollBtn").style.display = "none";
    }
}