function toggleDescription(id) {
  const desc = document.getElementById(id);
  const button = document.querySelector(`button[onclick="toggleDescription('${id}')"]`);

  if (desc.style.display === "none") {
    desc.style.display = "block";
    button.textContent = "Show Less";
  } else {
    desc.style.display = "none";
    button.textContent = "Show More";
  }
}

