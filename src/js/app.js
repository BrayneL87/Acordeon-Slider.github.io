    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
      panel.addEventListener('click', () => {
        panels.forEach(p => p.style.flex = "1"); 
        panel.style.flex = "4"; // Al hacer clic, este se expande
      });
    });
