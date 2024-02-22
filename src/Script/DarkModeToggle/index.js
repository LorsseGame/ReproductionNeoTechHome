"use client";
// components/DarkModeToggle.js

import { useEffect } from "react";

const DarkModeToggle = () => {
  useEffect(() => {
    const page = document.getElementById("html");
    const darkModeButton = document.getElementById("darkModeButton");
    const lightModeButton = document.getElementById("lightModeButton");

    const toggleDarkMode = () => {
      page.classList.toggle("dark");
      darkModeButton.style.display = page.classList.contains("dark")
        ? "none"
        : "block";
      lightModeButton.style.display = page.classList.contains("dark")
        ? "block"
        : "none";
    };

    darkModeButton.addEventListener("click", toggleDarkMode);
    lightModeButton.addEventListener("click", toggleDarkMode);

    return () => {
      darkModeButton.removeEventListener("click", toggleDarkMode);
      lightModeButton.removeEventListener("click", toggleDarkMode);
    };
  }, []); // La dépendance vide signifie que cet effet s'exécute une seule fois après le montage initial

  return null; // Nous ne rendons rien car nous utilisons des boutons existants dans le HTML
};

export default DarkModeToggle;
