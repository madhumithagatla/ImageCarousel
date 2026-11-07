const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80"
];

let currentIndex = 0;

function showImage() {
    document.getElementById("slide").src = images[currentIndex];

    document.getElementById("counter").textContent =
        `Image ${currentIndex + 1} of ${images.length}`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
}

function previousImage() {
    currentIndex =
        (currentIndex - 1 + images.length) % images.length;
    showImage();
}